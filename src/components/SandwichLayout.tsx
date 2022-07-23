import { FC, useEffect, useState } from 'react';
import React from 'react';

import _ from "lodash";

import { useParams } from 'react-router-dom';

import { Card, Checkbox, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import BackIcon from '@material-ui/icons/ArrowLeftRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { Sandwich } from 'types/sandwhich';
import { dispatch, useSelector } from 'store';
import { deleteSandwich, getMeats, getSandwich, updateSandwich } from 'store/slices/sandwich';

const SandwichLayout: FC = () => {
    const { sandwichId } = useParams<{ sandwichId: string }>();
    const { meats, sandwiches } = useSelector((state) => state.sandwich);
    const [loading, setLoading] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [expiresOn, setExpiresOn] = useState<string>('');
    const [meat, setMeat] = useState<string>('');
    const [toasted, setToasted] = useState<boolean>(false);
    const [notes, setNotes] = useState<string>('');

    const [sandwich, setSandwich] = useState<Sandwich|null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!sandwichId) return;
            await dispatch(getMeats())
            await dispatch(getSandwich(sandwichId))
            console.log(sandwiches);
            
            setLoading(false);
        };
        fetchData();
    }, [sandwichId]);

    useEffect(() => {
        if (!sandwichId || !sandwiches.length) return;
        setSandwich(_.find(sandwiches, ["id", sandwichId]) || null);
    }, [sandwiches]);

    useEffect(() => {
        if (!sandwich) return;
        setName(sandwich.name);
        setPrice(sandwich.price);
        setExpiresOn(sandwich.expires_on);
        setMeat(sandwich.meat.id);
        setToasted(sandwich.toasted);
        setNotes(sandwich.notes || "");
    }, [sandwich]);

    useEffect(() => {
        if (!meat) return;
        updateMeat(meat)
    }, [meat]);

    useEffect(() => {
        updateToasted(toasted)
    }, [toasted]);

    const updateName = async (value: string) => {
        if (!sandwichId || !value) return;
        await dispatch(updateSandwich(sandwichId, { name: value }))
    }

    const updatePrice = async (value: number) => {
        if (!sandwichId || !value) return;
        await dispatch(updateSandwich(sandwichId, { price: value }))
    }

    const updateExpiresOn = async (value: string) => {
        if (!sandwichId || !value) return;
        await dispatch(updateSandwich(sandwichId, { expires_on: value }))
    }

    const updateMeat = async (value: string) => {
        if (!sandwichId || !value) return;
        await dispatch(updateSandwich(sandwichId, { meat: value }))
    }

    const updateToasted = async (value: boolean) => {
        if (!sandwichId) return;
        await dispatch(updateSandwich(sandwichId, { toasted: value }))
    }

    const updateNotes = async (value: string) => {
        if (!sandwichId) return;
        await dispatch(updateSandwich(sandwichId, { notes: value }))
    }

    const trashSandwich = async () => {
        if (!sandwichId) return;
        await dispatch(deleteSandwich(sandwichId));
        location.pathname = "/"
    }

    if (loading || !sandwich) return <Card style={{ width: "80%", padding: "20px", height: "80vh"}}>Loading...</Card>

    return (
        <Card style={{ width: "80%", padding: "20px", height: "80vh"}}>
            <div style={{display: "flex"}}>
                <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
                    <BackIcon style={{ fontSize: 90 }}/>
                </Link>
                <DeleteIcon style={{marginLeft: 'auto', fontSize: 90, cursor: "pointer"}} onClick={trashSandwich}/>
            </div>
            <form>
                <TextField id="name" label="Name" value={name} onChange={event => setName(event.target.value)} onBlur={() => updateName(name)} style={{width: "100%", marginBottom: "20px"}}/>
                <br/>
                <TextField id="price" label="Price" type="number" value={price} onChange={event => setPrice(Number(event.target.value))} onBlur={() => updatePrice(price)}  style={{width: "100%", marginBottom: "20px"}}/>
                <br/>
                <TextField id="expires_on" label="Expires On" type="date" value={expiresOn} onChange={event => setExpiresOn(event.target.value)} onBlur={() => updateExpiresOn(expiresOn)} style={{width: "100%", marginBottom: "20px"}}/>
                <br/>
                <Select
                    id="meat"
                    label="Meat"
                    value={meat}
                    onChange={event => setMeat(event.target.value as string)}
                    style={{width: "100%", marginBottom: "20px"}}
                >
                    {meats.map(meat => <MenuItem key={meat.id} value={meat.id}>{meat.name}</MenuItem>)}
                </Select>
                <br/>
                <div style={{width: "100%", marginBottom: "20px"}}>
                    <Typography>Toppings:</Typography>
                </div>
                <br/>
                <div style={{width: "100%", marginBottom: "20px"}}>
                    <Typography>Toasted:</Typography>
                    <Checkbox checked={toasted} onChange={(e, checked) => setToasted(checked)}/>
                </div>
                <TextField id="notes" label="Notes" multiline minRows={2} value={notes} onChange={event => setNotes(event.target.value)} onBlur={() => updateName(notes)} style={{width: "100%", marginBottom: "20px"}}/>
            </form>
                
        </Card>
        )
};

export default SandwichLayout;
