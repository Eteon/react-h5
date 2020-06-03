import React from 'react';
import loadable from '@loadable/component';
const App = loadable(() => import('@/pages/App'))

export default function Authentication() {
    return (<App />)
};