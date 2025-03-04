import { useState } from "react";
import CommentList from "./CommentList";
import Page from "./Page";


function CommentAll(){
    const[isFocus, setIsFocus] = useState(false);

    const handleFocus = () => {
        setIsFocus(true);
    }

    const handleUnFocus = () => {
        setIsFocus(false);
    }

    return(
        <div className="p-3">
            <span className="text-amber-500 text-lg flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" size-6">
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
                <p>Bình Luận (855)</p>
            </span>
            <h2 className="text-gray-800 mb-5">Vào <span className="font-medium">Fanpage</span> like và theo dõi để ủng hộ TruyenDocViet nhé.</h2>
            <form action="">
                <textarea 
                className="w-full border border-gray-600 rounded-sm p-2 focus:border-gray-700 outline-none focus:ring-2 focus:ring-gray-300" 
                placeholder="Hãy bình luận có văn hoá để tránh khoá tài khoản"
                onFocus={handleFocus}
                onBlur={handleUnFocus} />
                {isFocus && 
                <button className="bg-blue-500 text-white px-2 rounded-sm cursor-pointer hover:bg-blue-400 duration-200 w-24">Gửi</button>
                }
            </form>
            <CommentList/>
            <Page/>
        </div>
    );
}
export default CommentAll;