import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    const res = {};
    if (error.response) {
        res.data = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers;
        console.log("Error",res);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    return res;
});

export default instance;