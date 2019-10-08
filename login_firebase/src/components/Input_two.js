import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';

//Material UI Components
import {Grid, Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles ({
    root: {
        padding:'2px 4px',
        display:'flex',
        alignItems:'center',
        width:'100%',
    },
    input: {
        marginLeft:'8px',
            flex:1,

    },
    IconButton: {
        padding:10,
    }
});

export default function Input_two () {

    const classes = useStyles();

    return (
     <React.Fragment>
         <Grid xs={12} md={6}>
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Input Two"
                />
                <IconButton
                    className={classes.iconButton}
                    arial-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
         </Grid>
    </React.Fragment>            
    );


};

