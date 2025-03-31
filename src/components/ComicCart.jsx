import { Link } from 'react-router-dom';
import logo1 from '../assets/talatade.jpg'

function ComicCart({item}){
    return(
        <Link to={`/truyen-tranh/${item.comic_id}`} className='w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200'>
            <div className='relative'>
                <img className='w-full h-56 object-cover' src={item.cover_image} alt="" />
                <div className='absolute left-2 top-2 flex text-sm gap-1'>
                    <p className='bg-sky-300 text-white p-0.5 rounded-sm'>13 Phút Trước</p>
                    <p className='bg-red-500 text-white p-0.5 rounded-sm'>Hot</p>
                </div>
            </div>
            <div className="p-2 text-center w-full">
                <h2 className="text-sm font-semibold text-gray-800 truncate">{item.title}</h2>
                <p className="text-xs text-gray-500">chap 123</p>
            </div>
        </Link>
    );
}
export default ComicCart