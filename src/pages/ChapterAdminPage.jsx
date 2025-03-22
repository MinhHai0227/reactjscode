import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchComicById } from "../redux/slices/comicSlice";
import { addChapter, deleteChapter } from "../custom/service/ChapterService";
import { useForm } from "react-hook-form";

function ChapterAdminPage() {
    const { comic_id } = useParams();
    const dispatch = useDispatch();

    const comic = useSelector(state => state.comic.comicById[comic_id]);

    const [showAddChapterForm, setShowAddChapterForm] = useState(false); // State to toggle the form
    const [selectedTime, setSelectedTime] = useState(''); // Track selected time (12h, 24h, 32h)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    
    useEffect(() => {
        dispatch(fetchComicById(comic_id));
    }, [comic_id]);

    const handDeleteChapter = async (id) => {
        await deleteChapter(id);
        dispatch(fetchComicById(comic_id));
    };

    // Handle time change and set auto_unlock field value
    const handleTimeChange = (event) => {
        const hours = parseInt(event.target.value); // Get hours from select
        const currentTime = new Date();
        currentTime.setHours(currentTime.getHours() + hours); // Add selected hours to current time

        // Set the calculated time to the form field (auto_unlock)
        setValue("auto_unlock_time", currentTime.toISOString().slice(0, 16)); // Set value in ISO format (yyyy-mm-ddTHH:mm)
        setSelectedTime(event.target.value); // Set the selected time
    };

    const onSubmit = async (data) => {
        await addChapter(data.comic_id, data.title, data.slug, data.price_xu, data.auto_unlock_time)
        console.log(data);
        setShowAddChapterForm(false); 
        dispatch(fetchComicById(comic_id)); 
    };

    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg ">
            <div className="flex justify-between px-2 py-1 mb-1">
                <h1 className="font-bold text-lg">{comic ? comic.title : ''}</h1>
                <button 
                    onClick={() => setShowAddChapterForm(!showAddChapterForm)} 
                    className="bg-green-500 text-white px-2 py-1 rounded-sm"
                >
                    Thêm Chapter
                </button>
            </div>

            {showAddChapterForm && (
                <div className="p-4 bg-gray-100 rounded-md mb-4  ">
                    <h2 className="text-xl font-semibold mb-2">Add New Chapter</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Comic ID (hidden field) */}
                        <input 
                            type="hidden" 
                            value={comic_id} 
                            {...register("comic_id")} 
                        />

                        {/* Title */}
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input 
                                type="text" 
                                {...register("title", { required: "Title is required" })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>

                        {/* Slug */}
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Slug</label>
                            <input 
                                type="text" 
                                {...register("slug", { required: "Slug is required" })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
                        </div>

                        {/* Price Xu */}
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Price Xu</label>
                            <input 
                                type="number" 
                                {...register("price_xu", { required: "Price Xu is required", valueAsNumber: true })}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            {errors.price_xu && <p className="text-red-500 text-sm">{errors.price_xu.message}</p>}
                        </div>

                        {/* Auto Unlock Time */}
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Auto Unlock Time</label>
                            <select
                                value={selectedTime}
                                onChange={handleTimeChange} 
                                className="w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select time</option>
                                <option value="12">mở sau 12h</option>
                                <option value="24">mở sau 24h</option>
                                <option value="32">mở sau 32h</option>
                            </select>
                            {errors.auto_unlock_time && <p className="text-red-500 text-sm">{errors.auto_unlock_time.message}</p>}
                        </div>

                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                        >
                            Add Chapter
                        </button>
                    </form>
                </div>
            )}

            <div className="max-h-110 overflow-y-auto">
                <table className="min-w-full text-sm text-left text-gray-500">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Title</th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Is_locked</th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900">Auto_unlock</th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900">ChapterImageManager</th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comic && comic.chapters ? (
                            comic.chapters.map((chapter) => (
                                <tr key={chapter.chapter_id} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">{chapter.title}</td>
                                    <td className="px-6 py-4">
                                        {chapter.is_locked && (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500 size-4">
                                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">{new Date(chapter.auto_unlock_time).toLocaleString('en-GB')}</td>
                                    <td className="px-6 py-4">
                                        <Link to={`/admin/chapter/${chapter.chapter_id}`} className="px-2 py-1 bg-blue-600 text-white rounded-sm">Upload Chapter Image</Link>
                                    </td>
                                    <td className="px-6 py-4 flex justify-center items-center gap-2">
                                        <Link className="text-sky-600 hover:text-sky-800">Edit</Link>
                                        <button onClick={() => handDeleteChapter(chapter.chapter_id)} className="text-red-600 hover:text-red-800 cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center px-6 py-4">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ChapterAdminPage;
