import React, { useReducer, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

//Material-UI Components
import { Container, Typography, Grid, CssBaseline, Toolbar } from  '@material-ui/core';

//import own components

import Input_one from './components/Input_one';
import Input_two from './components/Input_two';

 // Firebase Config
 const firebaseConfig = {
  apiKey: "AIzaSyAqlQDZdMEcvk5Cw4-_f24gEQvuVphJO5I",
  authDomain: "reactjs-login-451ec.firebaseapp.com",
  databaseURL: "https://reactjs-login-451ec.firebaseio.com",
  projectId: "reactjs-login-451ec",
  storageBucket: "",
  messagingSenderId: "574724937852",
  appId: "1:574724937852:web:d15381a64ddc5f861e51f9",
  measurementId: "G-M9XXD4XZ1R"
};


const styles = makeStyles({
    toolbarTitle: {
      flex:1,
    },
});

// Create context object
export const AppContext = React.createContext();

// Set up Initial State
const initialState = {

    inputText: '',

};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {
                inputText: action.data
            };


        default:
            return initialState;
    }
}

function App() {

  const classes = styles();
 
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <div>
      <Container maxWidth="lg">
        <CssBaseline />
        {/* Title */}
        <Toolbar>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}>
            Pass Data Between react sibling components
          </Typography>
        </Toolbar>

        {/*Inputs*/}
        <Grid container spacing={1}>
          <AppContext.Provider value={{ state, dispatch }}>
            <Input_one/>
            <Input_two/>
          </AppContext.Provider>  
        </Grid>
      </Container>

      <!-- div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      
      </div -->

    </div>
  );
}

export default App;
