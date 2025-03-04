import { useForm } from "react-hook-form";
import logo1 from '../assets/talatade.jpg'
import { Link } from "react-router-dom";

function Information(){
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
    };

    const imageFile = watch("image");

    return(
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-168px)] lg:min-h-[calc(100vh-124px)]">
                <ul className="flex  items-center justify-between py-3 px-5 shadow-2xl bg-amber-50">
                    <li>
                        <img className="size-15 rounded-4xl" src={logo1} alt="" />
                    </li>
                    <li className="mt-2">
                        <Link className="bg-amber-500 px-2 py-2  hover:bg-amber-400 cursor-pointer hover:text-white rounded-sm">Đổi mật khẩu</Link>
                    </li>
                </ul>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-gray-100 rounded-md shadow-md">
                    <h2 className="text-lg font-semibold text-gray-900">Thông tin tài khoản</h2>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register("name")}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                        type="email"
                        {...register("email")}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>     

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cover Photo</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <svg className="mx-auto size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                </svg>
                                <div className="mt-4 flex text-sm text-gray-600">
                                <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input {...register("coverPhoto")} type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                        Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Information;