import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAllComic } from "../redux/slices/comicSlice";
import { Link } from "react-router-dom";

function ComicAdminPage(){

    const listComic = useSelector(state => state.comic.data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllComic())
    },[])

    return(
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900">Image</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900">Title</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900">Status</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900">ChapterManager</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900 text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {listComic && listComic.data ? (
                        listComic.data.map((comic) => (
                        <tr key={comic.comic_id} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{comic.cover_image}</td>
                            <td className="px-6 py-4">{comic.title}</td>
                            <td className="px-6 py-4">{comic.status}</td>
                            <td className="px-6 py-4">
                                <Link to={`/admin/comic/${comic.comic_id}`} className="px-2 py-1 bg-blue-600 text-white rounded-sm">Quản lí chapter</Link>
                            </td>
                            <td className="px-6 py-4 flex justify-center items-center gap-2">
                                <Link className="text-sky-600 hover:text-sky-800">Edit</Link>
                                <button className="text-red-600  hover:text-red-800 cursor-pointer">Delete</button>
                            </td>
                        </tr>   
                        ))
                    ):(
                        <tr>
                            <td colSpan="4" className="text-center px-6 py-4">No data available</td>
                        </tr>
                    )}
                             
                </tbody>
            </table>
        </div>
    )
}
export default ComicAdminPage