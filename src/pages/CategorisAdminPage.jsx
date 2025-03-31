import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { data, Link } from "react-router-dom";
import { fetchAllCate } from "../redux/slices/categorySlice";
import { addcate, deletecate } from "../custom/service/CateService";

function CategoriesAdminpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const listCate = useSelector((state) => state.category.listCata);
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(fetchAllCate());
  }, [disPatch]);
  const [show, setShow] = useState(false);

  const handleAddCate = async (data) => {
    console.log(data);
    
    await addcate(data.name, data.slug)
    disPatch(fetchAllCate())
  };

  const handDeleteCate = async (id) => {
    await deletecate(id)
    disPatch(fetchAllCate());
  }

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="bg-green-500 text-white px-2 py-1 m-2 rounded-sm"
      >
        Add Category
      </button>

      {show && (
        <form
          onSubmit={handleSubmit(handleAddCate)}
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Slug
            </label>
            <input
              type="text"
              {...register("slug", { required: "Title is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.slug && (
              <p className="text-red-600 text-xs">{errors.slug.message}</p>
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
            <th scope="col" className="px-6 py-3 font-medium text-gray-900">
              Slug
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
          {listCate ? (
            listCate.map((cate, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{cate.name}</td>
                <td className="px-6 py-4">{cate.slug}</td>

                <td className="px-6 py-4 flex justify-center items-center gap-2">
                  <Link className="text-sky-600 hover:text-sky-800">Edit</Link>
                  <button
                    onClick={() => handDeleteCate(cate.category_id)}
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
export default CategoriesAdminpage;
