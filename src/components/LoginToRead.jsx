import { Link } from "react-router-dom"

function LoginToRead(){
    return(
        <div className="pb-3">
            <p className="bg-amber-500 w-full p-3 font-semibold text-white">Cần Đăng Nhập</p>
            <p className="text-center p-3">Chương truyện này đã bị khóa. Bạn cần là thành viên mới có thể đọc được.</p>
            <div className="flex items-center justify-center gap-2 text-white my-10">
                <Link to='/login' className="bg-amber-500 px-1.5 py-1 rounded-sm hover:bg-amber-400 w-24 text-center">Đăng Nhập</Link>
                <Link to='/register' className="bg-amber-500 px-1.5 py-1 rounded-sm hover:bg-amber-400 w-24 text-center">Đăng Kí</Link>
            </div>
            <p className="text-center">Truyện sẽ mở khóa vào <span className='font-semibold'>22:30 27/02/2015</span> </p>
        </div>
    )
}
export default LoginToRead