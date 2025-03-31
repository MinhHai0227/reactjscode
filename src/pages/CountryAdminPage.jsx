import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../redux/slices/countriesSlide";
import { data, Link } from "react-router-dom";
import { addCountry, deleteCountry } from "../custom/service/CountriService";
import { useForm } from "react-hook-form";

function CountryAdminpage() {
  const listCountries = useSelector((state) => state.country.listCountries);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchAllCountries());
  }, []);

  const handDeleteCountry = async (id) => {
    await deleteCountry(id);
    disPatch(fetchAllCountries());
  };

  const [show, setShow] = useState(false);

  const handleAddCountry = async (data) => {
    await addCountry(data)
    disPatch(fetchAllCountries());
    setShow(false)
  }

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="bg-green-500 text-white px-2 py-1 m-2 rounded-sm"
      >
        Add country
      </button>

      {show && (
        <form
          onSubmit={handleSubmit(handleAddCountry)}
          encType="multipart/form-data"
          className="mt-4"
        >
          {/* Trường Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Title is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && (
              <p className="text-red-600 text-xs">{errors.name.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </form>
      )}
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium text-gray-900 text-center"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {listCountries ? (
            listCountries.map((country, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{country.name}</td>

                <td className="px-6 py-4 flex justify-center items-center gap-2">
                  <Link className="text-sky-600 hover:text-sky-800">Edit</Link>
                  <button
                    onClick={() => handDeleteCountry(country.country_id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center px-6 py-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
export default CountryAdminpage;
