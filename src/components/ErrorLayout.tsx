import { FC } from 'react';
import React from 'react';
import { Card, Typography } from '@material-ui/core';

const ErrorLayout: FC = () => (
    <Card style={{ width: "80%", padding: "20px", height: "80vh"}}>
        <Typography variant="h1">Oops!</Typography>
    </Card>
);

export default ErrorLayout;
