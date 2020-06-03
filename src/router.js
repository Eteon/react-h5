import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import JumpToLogin from '@/routes/Login';
import PassAuthentication from '@/routes/AppSubRoutes';
import NotFound from '@/pages/Prompt/NotFound';

function RouterConfig({ history, app }) {
    const currentUserIsLoggedIn = true;
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/App" />
                </Route>
                <Route path='/App'>
                    {currentUserIsLoggedIn
                        ? <PassAuthentication />
                        : <Redirect to='/login' />}
                </ Route>
                <Route path='/login' component={JumpToLogin} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
};

export default RouterConfig;
