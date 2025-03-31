import axios from "../axios";

const getAllCountries = async () => {
  return await axios.get("countries");
};

const deleteCountry = async (id) => {
    return await axios.delete(`countries/${id}`)
};

const addCountry = async (name) => {
    return await axios.post('countries',name)
}
export { getAllCountries, deleteCountry, addCountry};
