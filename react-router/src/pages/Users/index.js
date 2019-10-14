import React from 'react';

import { Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import ListUser from './ListUser';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

function Users(){
    let match = useRouteMatch();

    return (
        <> 
           <Router>
            <ul>
                <li>
                    <Link to='/user'>Lista de Usuarios</Link>
                </li>   
                <li>
                    <Link to={`${match.url}/create`}>Crear Usuario</Link>
                </li>
                <li>
                    <Link to={`${match.url}/:id/edit`}>Editar Usuario</Link>
                </li>
            </ul> 
            
            <Switch>   
            
                <Route exact path={match.path}>
                    <ListUser />
                </Route>
                
                <Route path={`${match.path}/create`}>
                    <CreateUser />
                </Route>

                <Route path={`${match.path}/:id/edit`}> 
                    <EditUser />
                </Route>
            
            </Switch> 
          </Router>  
        </>     
     
    );
}

export default Users;