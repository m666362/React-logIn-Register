import React, {useState} from 'react';
import {useOvermind} from './../Others/OvermindHelper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Box from "@material-ui/core/Box";

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

                <Box style={{padding:"6px", margin: "5px"}} border={1} borderColor="primary.main" borderRadius="5%" >
                    <h1 style={{margin: "10px"}}>Profile</h1>
                </Box>

                <Button style={{margin:"5px"}} variant="contained" color="primary">
                    Back
                </Button>
                <h3>User Name</h3>
                <h3>User Email</h3>
                <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Edit
                    </Button>
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Delete
                    </Button>
                </Grid>

            </Grid>
        </div>
    );
};

export default Login;