import React from 'react';

import { Switch } from 'react-router-dom'; 

import PageContainer from '../pages/pageContainer'


class BodyContainer extends React.Component{

    render() {
        return (
            <>
              
                <Switch>

                  <PageContainer />  

                </Switch>   
              
            </>        
        );
    }

}

export default BodyContainer;