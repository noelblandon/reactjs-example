import React from 'react';
import { Route } from 'react-router-dom';

import App from '../pages/container/app';
import RegisterPage from '../pages/auth/registerPage';

export default (
    <Route path="/" component={App}>
        <Route exact path='register' component={RegisterPage} />
    </Route>
);

