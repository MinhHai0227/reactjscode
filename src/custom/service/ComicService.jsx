import axios from '../axios';

export const getAllComics = async () => {
    return await axios.get('comics')
}

export const findComicById = async (id) => {
    return await axios.get(`comics/${id}`)
}

