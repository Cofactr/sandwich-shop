import { FC, useEffect, useState } from 'react';
import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { dispatch, useSelector } from 'store';
import { getSandwiches } from 'store/slices/sandwich';
import { Sandwich } from 'types/sandwhich';

const SandwichList: FC = () => {
    const [isLoading, setLoading] = useState(true);
    const { sandwiches } = useSelector((state) => state.sandwich);

    useEffect(() => {
        const fetchData = async () => {
            const rows = (await dispatch(
                getSandwiches()
            )) as Sandwich[];
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Card style={{ width: "40%", padding: "20px", height: "80vh"}}>
            <Typography variant="h3">Sandwhich List</Typography>
            {isLoading && (<>
                <Typography>Loading...</Typography>
            </>)}
            {!isLoading && !sandwiches && (<>
                <Typography>No Sandwiches</Typography>
            </>)}
            {!isLoading && sandwiches?.map(sandwich => (<Link to={`/${sandwich.id}`} key={sandwich.id} style={{ color: 'inherit', textDecoration: 'none' }}>
                <Grid container style={{ borderBottom: '1px solid gray', display: 'flex' }}>
                    <Typography variant="h5">{sandwich.name}</Typography>
                    <Typography style={{marginLeft: 'auto'}}>${sandwich.price}</Typography>
                </Grid>
            </Link>))}
        </Card>
    );
};

export default SandwichList;
