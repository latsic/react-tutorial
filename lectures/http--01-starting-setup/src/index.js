import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// To set a default url
//axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';

// setting default headers
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//axios.defaults.headers.post['Content-Type'] = 'application/json';



let myInterceptor = axios.interceptors.request.use(request => {
  console.log('request', request);
  return request;
}, error => {
  console.log("axios interceptor error", error);
  return Promise.reject(error);
});

//to remove interceptor:
//axios.interceptors.request.eject(myInterceptor);

axios.interceptors.response.use(response => {
  console.log('response', response);
  return response;
}, error => {
  console.log("axios interceptor error", error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
