import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import GeneralTab from './components/GeneralTab';
import Layout from './pages/Layout';
import SettingsTab from './components/SettingsTab';
import store from './store';
import TasksTab from './components/TasksTab';

import '../css/style.scss';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
        .catch((error) => console.log('Could not register service worker.', error));
  });
}

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={TasksTab}></Route>
                <Route path="/notes" component={GeneralTab}></Route>
                <Route path="/settings" component={SettingsTab}></Route>
            </Layout>
        </BrowserRouter>
    </Provider>, app);
