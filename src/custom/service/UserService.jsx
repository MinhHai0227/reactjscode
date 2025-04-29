import axios from '../axios'


const getUserById = async (id) => {
    return await axios.get(`user/${id}`)
}

const getUserByUsername = async () => {
    const res = await axios.get('user/hhh');
    return res;
  };
  
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

export {getUserByUsername,getUserById, getAllUser, deleteUser}