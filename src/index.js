import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

//Default configs for axios requests application wide
axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Authorization'] = 'OAUTH-TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.request.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById( 'root' ) );
    registerServiceWorker();