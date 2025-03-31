import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComic } from "../redux/slices/comicSlice";
import { Link } from "react-router-dom";
import { addComic, deleteComic } from "../custom/service/ComicService";
import { fetchAllCate } from "../redux/slices/categorySlice";
import { useForm } from "react-hook-form";
import { fetchAllCountries } from "../redux/slices/countriesSlide";

function ComicAdminPage() {
  const listComic = useSelector((state) => state.comic.data);
  const listCate = useSelector((state) => state.category.listCata);
  const listCountries = useSelector((state) => state.country.listCountries);

  const dispatch = useDispatch();

  const [showAddForm, setShowAddForm] = useState(false);

  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  useEffect(() => {
    dispatch(fetchAllCate());
  }, []);

  useEffect(() => {
    dispatch(fetchAllComic());
  }, [dispatch]);

  const handleDeleteComic = async (id) => {
    try {
      await deleteComic(id);
      dispatch(fetchAllComic());
    } catch (error) {
      console.error("Failed to delete comic", error);
    }
  };

  const handleAddComic = async (data) => {
    try {
      // Tạo FormData để gửi dữ liệu
      const categories = Array.isArray(data.categoryIds)
        ? data.categoryIds
        : [];
      const comicData = {
        title: data.title,
        slug: data.slug,
        description: data.description,
        author: data.author,
        file: data.file[0],
        country_id: data.country_id,
        categoryIds: categories,
      };

      // Gửi yêu cầu POST lên API để thêm comic
      await addComic(comicData);

      dispatch(fetchAllComic());
      setShowAddForm(false); // Đóng form sau khi thêm thành công
    } catch (error) {
      console.error("Error adding comic", error);
    }
  };

  return (
    <div>
      {/* Nút thêm comic */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Comic
      </button>

      {/* Form thêm comic */}
      {showAddForm && (
        <form
          onSubmit={handleSubmit(handleAddComic)}
          encType="multipart/form-data"
          className="mt-4"
        >
          {/* Trường Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.title && (
              <p className="text-red-600 text-xs">{errors.title.message}</p>
            )}
          </div>

          {/* Trường Slug */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Slug
            </label>
            <input
              type="text"
              {...register("slug", { required: "Slug is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.slug && (
              <p className="text-red-600 text-xs">{errors.slug.message}</p>
            )}
          </div>

          {/* Trường Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.description && (
              <p className="text-red-600 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Trường Author */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              {...register("author", { required: "Author is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.author && (
              <p className="text-red-600 text-xs">{errors.author.message}</p>
            )}
          </div>

          {/* Trường Cover Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Cover Image
            </label>
            <input
              type="file"
              {...register("file", { required: "Cover image is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.cover_image && (
              <p className="text-red-600 text-xs">
                {errors.cover_image.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <div className="space-y-2">
              {listCountries &&
                listCountries.map((country, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      value={country.country_id}
                      {...register("country_id", {
                        required: "Country is required",
                      })}
                      className="mr-2"
                    />
                    <label>{country.name}</label>
                  </div>
                ))}
            </div>
            {errors.country_id && (
              <p className="text-red-600 text-xs">
                {errors.country_id.message}
              </p>
            )}
          </div>

          {/* Trường Categories */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Categories
            </label>
            <div className="space-y-2">
              {listCate &&
                listCate.map((category, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      value={category.category_id} // Chắc chắn rằng bạn đang sử dụng đúng category_id
                      {...register("categoryIds")} // Xử lý mảng categories
                      className="mr-2"
                    />
                    <label>{category.name}</label>
                  </div>
                ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Comic
          </button>
        </form>
      )}

      {/* Comic List */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-6">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium text-gray-900">
                Image
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-gray-900">
                Title
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-gray-900">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-gray-900">
                ChapterManager
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
            {listComic && listComic.data ? (
              listComic.data.map((comic) => (
                <tr key={comic.comic_id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      className="size-15 object-cover"
                      src={comic.cover_image}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4">{comic.title}</td>
                  <td className="px-6 py-4">{comic.status}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/admin/comic/${comic.comic_id}`}
                      className="px-2 py-1 bg-blue-600 text-white rounded-sm"
                    >
                      Quản lí chapter
                    </Link>
                  </td>
                  <td className="px-6 py-4 flex justify-center items-center gap-2">
                    <Link className="text-sky-600 hover:text-sky-800">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteComic(comic.comic_id)}
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
      </div>
    </div>
  );
}

export default ComicAdminPage;
