import axios from '../axios'

const loginApi = async (email, password) => {
    return await axios.post('auth/login', {email, password});
}

const RegisterApi = async(username, email, password) => {
    return await axios.post('auth/register', {username, email, password})
}

export {loginApi,RegisterApi}