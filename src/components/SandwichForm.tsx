import { FC, useEffect, useState } from 'react';
import React from 'react';
import { Card, TextField, Button, Select, MenuItem, Checkbox, Typography } from '@material-ui/core';
import { dispatch, useSelector } from 'store';
import { createSandwich, getMeats, getToppings } from 'store/slices/sandwich';
import { AddOn } from 'types/sandwhich';

const handleSubmit = async (
    name: string,
    price: number,
    expiresOn: string,
    meat: string,
    toasted: boolean,
    notes: string | null,
) => {
    try {
        await dispatch(
            createSandwich({
                name,
                price,
                expires_on: expiresOn,
                meat,
                toasted,
                notes,
            })
        );
    } catch (err) {
        console.error(err)
    }
};

const SandwichForm: FC = () => {
    const { meats } = useSelector((state) => state.sandwich);

    const [loading, setLoading] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [expiresOn, setExpiresOn] = useState<string|null>(null);
    const [meat, setMeat] = useState<string>('');
    const [toasted, setToasted] = useState<boolean>(false);
    const [notes, setNotes] = useState<string>('');
    
    useEffect(() => {
        const fetchData = async () => {
            const meats = (await dispatch(
                getMeats()
            )) as AddOn[];
            if (meats.length) setMeat(meats[0].id);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>

    return <Card style={{ width: "40%", padding: "20px", height: "80vh"}}>
        <h3>Sandwhich Form</h3>
        <form>
            <TextField id="name" label="Name" onChange={(event) => setName(event.target.value)} style={{width: "100%", marginBottom: "20px"}}/>
            <br/>
            <TextField id="price" label="Price" type="number" onChange={(event) => setPrice(Number(event.target.value))} style={{width: "100%", marginBottom: "20px"}}/>
            <br/>
            <TextField id="expires_on" label="Expires On" type="date" onChange={(event) => setExpiresOn(event.target.value)} style={{width: "100%", marginBottom: "20px"}}/>
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
            <TextField id="notes" label="Notes" multiline onChange={(event) => setNotes(event.target.value)} minRows={2} style={{width: "100%", marginBottom: "20px"}}/>
        </form>
        <Button onClick={() => handleSubmit(
            name,
            price,
            expiresOn as string,
            meat as string,
            toasted,
            notes,
        )} disabled={!name}>Submit</Button>
    </Card>
};

export default SandwichForm;
