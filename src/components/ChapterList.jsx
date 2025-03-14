import { Link } from "react-router-dom";

function ChapterList({chapters,comic_id}){
    return(
        <div className=" m-3 max-h-125 overflow-y-auto border border-gray-300 shadow rounded-sm">
            <ul className="p-4 text-gray-600 space-y-1">

                {chapters && chapters.length && chapters.map((item, index) => (
                    <li key={index} className="border-b border-gray-200 pb-0.5 flex justify-between">
                        <Link to={`/truyen-tranh/${comic_id}/${item.chapter_id}`}className="flex items-center">
                            <p className="w-24 hover:text-amber-500 duration-200">{item.title}</p>
                            {item && item.is_locked == true ?(
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500 size-4">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                </svg>
                            ):(
                                ''
                            )}
                        </Link>
                    <p>{new Date(item.created_at).toLocaleDateString('en-GB')}</p>
                </li>
                ))}
            </ul>
      </div>
    );
}
export default ChapterList;