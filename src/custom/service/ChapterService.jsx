import axios from '../axios';

export const findChapterByComicId = async (id) => {
    return await axios.get(`chapters/${id}`)
}