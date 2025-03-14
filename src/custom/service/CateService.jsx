import axios from '../axios'

export const getAllCate = async () => {
    return await axios.get('categories')
}

export const getComicByCate = async(cate_id) => {
    return await axios.get(`categories/${cate_id}`)
}