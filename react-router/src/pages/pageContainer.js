import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './Users';



function PageContainer(){
    return (
      <>
        
          
            
        <Route path="/" >
              <Redirect to="/home" />
        </Route>

        <Route path="/home" >
            <Home />
        </Route>
        
        <Route path="/about">
            <About />
        </Route>

        <Route path="/contact">
            <Contact />
        </Route>

        <Route path="/user">
            <User />
        </Route>
          

      </>
    );
}

export default PageContainer;