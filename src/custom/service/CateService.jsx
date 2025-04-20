import axios from "../axios";

const getAllCate = async () => {
  return await axios.get(`category`);
};

const getComicByCate = async (cate_id) => {
  return await axios.get(`category/${cate_id}`);
};

const addcate = async (name, slug) => {
  return await axios.post(`category`, { name, slug });
};

const deletecate = async (id) => {
  return await axios.delete(`category/${id}`);
};

export { deletecate, getAllCate, getComicByCate, addcate };
