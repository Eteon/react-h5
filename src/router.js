import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import loadable from '@loadable/component';

function LoadableImport(pageFolder){
    return loadable(() => import(`@/pages/${pageFolder}`));
}

function RouterConfig({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={LoadableImport("App")} />
            </Switch>
        </Router>
    )
}

export default RouterConfig;
