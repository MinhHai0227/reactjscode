import axios from "../axios";

const getAllCate = async () => {
  return await axios.get("categories");
};

const getComicByCate = async (cate_id) => {
  return await axios.get(`categories/${cate_id}`);
};

const addcate = async (name, slug) => {
  return await axios.post(`categories`, { name, slug });
};

const deletecate = async (id) => {
  return await axios.delete(`categories/${id}`);
};

export { deletecate, getAllCate, getComicByCate, addcate };
