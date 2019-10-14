import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './components/menu';
import BodyContainer from './components/bodyContainer';

function App() {
  return (

    <>
      <Router>
        <Menu />
        <BodyContainer />
      </Router>  
    </> 
  );
}

export default App;
