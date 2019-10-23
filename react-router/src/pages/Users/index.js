import React,{ lazy, Suspense } from 'react';

import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

/*import ListUser from './ListUser';
import CreateUser from './CreateUser';
import EditUser from './EditUser';*/



import ListUser   from "./ListUser";
import CreateUser from "./CreateUser";
import EditUser   from "./EditUser";
const API_URL  = "https://reqres.in/";


function Users(){
    let match = useRouteMatch();

    return (
        <> 
            <Switch>   
            
                
                <Route exact path={match.path}>
                    <ListUser />
                </Route>
                
                <Route path={`${match.path}/create`}>
                    <CreateUser />
                </Route>

                <Route path={`${match.path}/edit`}> 
                    <EditUser />
                </Route>
            
            </Switch> 
          
        </>     
     
    );
}

export default Users;