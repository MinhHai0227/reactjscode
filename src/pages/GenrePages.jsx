import ComicList from "../components/ComicList";
import Page from "../components/Page";

function GenrePages(){
    return(
        <div className="bg-gray-100 ">
            <div className="max-w-7xl mx-auto ">
            <div>
                <div className="pt-5">
                    <div className="flex gap-2 text-sky-400 text-2xl items-center p-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z" clipRule="evenodd" />
                        </svg>
                        <p>Truyện Manhua</p>
                    </div>
                    <p className="p-4 bg-white shadow-xs text-sm rounded-sm">Thể loại thường xuất hiện nhiều bí ẩn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra cầu trả lời thỏa đáng</p>
                </div>
                <div className="p-3 mt-5 bg-white shadow-sm rounded-sm">
                    <ul >
                        <li className="flex items-center p-1">
                        <span className="text-sm text-gray-400 w-22">Thể loại</span>
                        <select name="Manhua" className=" p-1 w-30 border border-gray-300 rounded-md ">
                            <option value="">Manhua</option>
                        </select>
                        </li>
                        <li className="flex items-center p-1">
                        <span className="text-sm text-gray-400 w-22">Tình trạng</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <button className="p-1 px-3 border border-gray-300 rounded-md">Đang tiến hành</button>
                            <button className="p-1  px-3 border border-gray-300 rounded-md">Hoàn thành</button>
                        </div>
                        </li>
                        <li className="flex items-center p-1">
                        <span className="text-sm text-gray-400 w-22">Quốc gia</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <button className="p-1 px-3 border border-gray-300 rounded-md">Việt Nam</button>
                            <button className="p-1 px-3 border border-gray-300 rounded-md">Trung Quốc</button>
                            <button className="p-1 px-3 border border-gray-300 rounded-md">Nhật Bản</button>
                            <button className="p-1 px-3 border border-gray-300 rounded-md">Hàn Quốc</button>
                        </div>
                        </li>
                        <li className="flex items-center p-1">
                        <span className="text-sm text-gray-400 w-22">Sắp xếp</span>
                        <select name="Manhua" className="p-1 w-50 border border-gray-300 rounded-md ">
                            <option value="">Ngày đăng gảm dần</option>
                        </select>
                        </li>
                    </ul>
                </div>
            </div>
            <ComicList/>
            <Page/>
        </div>
        </div> 
    );
}
export default GenrePages;