import axios from '../axios'

const getUserById = async () => {
    const token = localStorage.getItem('token')
    if(!token){
        return;
    }
    return await axios.get(`users/unlock`,{
        headers: {Authorization: `Bearer ${token}`}
    })
}

const getAllUser = async (role) => {
    return await axios.get(`users/?role=${role}`)
}

const deleteUser = async (id) => {
    try {
        

        return await axios.delete(`users/${id}`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; 
    }
};

export {getUserById, getAllUser, deleteUser}