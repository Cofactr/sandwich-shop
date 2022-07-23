import React from "react";
import axios from "axios"
import logo from "./logo.svg";
import { Container, Typography } from '@material-ui/core';
import {
    withStyles,
    WithStyles
} from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RefreshIcon from '@material-ui/icons/Refresh';
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from 'routes';
import { theme, styles } from "theme";

import { URLS } from 'store/constant';

type AppProps = {} & WithStyles<typeof styles>;

const App = ({ classes }: AppProps) => {

    const flush = async () => {
        await axios.post(URLS.FLUSH());
    };

    return <MuiThemeProvider theme={theme}>
        <Router>
        <CssBaseline />
        <div className={classes.app}>
            <header className={classes.header}>
                <Link to="/"  style={{textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} className={classes.logo} alt="logo" />
                    <Typography variant="h2" className={classes.title}>Sandwich Shop</Typography>
                </Link>
                <RefreshIcon style={{ fontSize: 90, cursor: "pointer", margin: "0 10% 0 auto" }} onClick={() => flush()}/>
            </header>
            <Container className={classes.body}>
                <Routes />
            </Container>
        </div>
        </Router>
    </MuiThemeProvider>
};

export default withStyles(styles)(App);
