import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
   
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
  
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {

    return response.data;
}, function (error) {
    const res = {};
    if (error.response) {
        res.data = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers;
        console.log("Error",res);
    } else if (error.request) {
        
    // Yêu cầu đã được thực hiện nhưng không nhận được phản hồi
    // `error.request` là một thể hiện của XMLHttpRequest trong trình duyệt và là một thể hiện của
    // http.ClientRequest trong node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    return res;
});

export default instance;