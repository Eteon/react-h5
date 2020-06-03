import dva from 'dva';
import React from 'react';
import ReactDOM from 'react-dom';
import intl from 'react-intl-universal';
import Reduxundoable from 'redux-undo';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';
import DocumentTitle from 'react-document-title';
import * as models from '@/models';
import locale, { currentLocale } from '@/locales';
import '@/global/app.less';

const { createBrowserHistory } = require('history');

const app = dva({
    history: createBrowserHistory(),
    onAction: createLogger(),
    onReducer: reducer => {
        return (state, action) => {
            const undoOpts = {};
            const newState = Reduxundoable(reducer, undoOpts)(state, action);
            return { ...newState, routing: newState.present.routing }
        }
    }
});

app.use(createLoading());

Object.keys(models).forEach(item => {
    app.model(models[item]);
});

app.router(require('./router').default);
intl.init({
    currentLocale,
    locales: { [currentLocale]: locale }
}).then(() => {
    const App = app.start();
    ReactDOM.render(
        <DocumentTitle title={intl.get('title')}>
            <App />
        </DocumentTitle>,
        document.getElementById('root'),
    );
});