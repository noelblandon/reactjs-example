import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

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



  return (
    <div className="App">
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
     
    </div>
  );
}

export default App;
