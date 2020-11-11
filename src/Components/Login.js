import React, {useState} from 'react';
import {useOvermind} from './../Others/OvermindHelper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    //
}))

const Login = () => {
    const {state, actions} = useOvermind();
    const classes = useStyles();
    return (
        <div>
            <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
                  alignContent='center'>
                <h1>React Todo App Login/Register</h1>
                <TextField style={{margin:"5px"}} id="outlined-basic" label="Email" variant="outlined" />
                <TextField style={{margin:"5px"}} id="outlined-basic" label="Password" variant="outlined" />
                <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Register
                    </Button>
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Log In
                    </Button>
                </Grid>

            </Grid>
        </div>
    );
};

export default Login;