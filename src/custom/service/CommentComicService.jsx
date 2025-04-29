import axios from '../axios';

const getAllCommentComics = async (id) => {
    return await axios.get(`comment/comic/${id}`)
}


export {getAllCommentComics}


