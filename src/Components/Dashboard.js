import React,{useState} from 'react';
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

const Dashboard = () => {
    const {state, actions} = useOvermind();
    const classes = useStyles();
    return (
        <div>
            <Grid style={{padding: 48}} container direction='column' justify='center' alignItems='center'
                  alignContent='center'>
                <Box style={{padding:"6px", margin: "5px"}} border={1} borderColor="primary.main" borderRadius="5%" >
                    <Typography>User Profile</Typography>
                    <Grid style={{float: "right"}} container direction='row' alignItems='center' alignContent='center' justify='center'>
                        <Box style={{padding:"6px", margin: "5px"}} border={1} borderColor="primary.main" borderRadius="5%" >User Email</Box>
                        <Box style={{padding:"6px", margin: "5px"}} border={1} borderColor="primary.main" borderRadius="5%" >User Name</Box>
                        <Button style={{margin:"5px"}} variant="contained" color="primary">
                            LogOut
                        </Button>
                    </Grid>

                </Box>

                <h1>Dashboard</h1>
                <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                    <TextField  id="outlined-basic" label="Task Name" variant="outlined" />
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Add
                    </Button>
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Edit
                    </Button>
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Delete All
                    </Button>
                    <Button style={{margin:"5px"}} variant="contained" color="primary">
                        Get All
                    </Button>
                </Grid>
                <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                    <Box style={{padding:"6px"}} border={1} borderColor="primary.main" borderRadius="5%" >Task</Box>
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

export default Dashboard;