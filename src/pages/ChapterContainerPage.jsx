import banner from '../assets/manga.jpg'
import { Link, useParams } from "react-router-dom"
import CommentAll from '../components/CommentAll'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import LockContent from '../components/LockContent'
import Content from '../components/Content'
import LoginToRead from '../components/LoginToRead'
import { fetchChapterBycomicId } from '../redux/slices/chapterSlice';
import { fetchComicById } from '../redux/slices/comicSlice';


function ChapterContainerPage(){

    const isLogin = useSelector(state => state.auth.isLogin);
    const {comic_id,chapter_id} = useParams();
    const comic = useSelector(state => state.comic.comicById[comic_id]);
    
    const chapter = useSelector(state => state.chapter.chapterByComicId[chapter_id]);
    const loading = useSelector(state => state.chapter.loading)
    const dispatch = useDispatch();

    
    console.log('checj ul',chapter? chapter.is_locked : 'he')

    useEffect(() => {
        if (chapter_id && !chapter && !loading) {
            dispatch(fetchChapterBycomicId(chapter_id));
        }
    }, [dispatch, chapter_id, chapter, loading]);


    return(
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className='relative'>
                    <img className='object-cover h-96 w-full' src={banner} alt="" /> 
                    <h2 className='absolute uppercase  bottom-0 inset-x-0 text-center bg-slate-50 border-t-2 border-dashed text-gray-900 lg:text-2xl p-2 h-fit'>
                        cập nhật chương mới sớm nhất tại website <span className='bg-amber-500 text-white px-2 font-medium rounded-xl '>truyendocviet.com</span>
                    </h2>              
                </div>
                <div className="bg-white shadow rounded-sm mt-2">
                    <ol className='flex gap-3 pt-5 px-3 text-gray-500'>
                        <li><Link to='/'>Trang chủ</Link> </li>
                        <li className="before:mr-3 before:text-gray-500 before:content-['/'] "><Link to={`/truyen-tranh/${comic_id}`}>{comic ? comic.title : ''}</Link> </li>
                        <li className="before:mr-3 before:text-gray-500 before:content-['/'] "><Link to={`/truyen-tranh/${comic_id}/${chapter_id}`}>{chapter ? chapter.title : ''} </Link> </li>
                    </ol>   
                    <h1 className='p-3 text-gray-800 text-xl font-semibold leading-6 '>{comic ? comic.title : ''} - {chapter ? chapter.title : ''} <span className="text-sm font-normal">(Cập nhật lúc: 21:57 27/2/2025)</span></h1>
                    <div className="text-center px-3 py-4">
                        <span className="text-gray-600 ">Nếu không xem được truyện vui lòng "BÁO LỖI" bên dưới</span>
                        <button className="flex items-center text-white gap-1 bg-amber-500 py-1.5 px-2 m-2 rounded-sm mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>
                            <span>Báo Lỗi Chương</span>
                        </button>
                        <div className="bg-sky-100 p-2 mt-3 text-sky-400 text-sm italic">
                            <span><i className="fa-solid fa-circle-info"></i> Sử dụng mũi tên trái hoặc phải để di chuyển chapter</span>
                        </div>
                        <div className="flex items-center justify-center text-white gap-2 pt-3">
                            <Link className="flex items-center gap-1 bg-sky-400 px-2 py-1.5 rounded-sm hover:bg-sky-500 hover:text-amber-500 w-30 justify-center duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                </svg>
                                <span>Chap trước</span>
                            </Link>
                            <Link className="flex items-center gap-1 bg-sky-400 px-2 py-1.5 rounded-sm hover:bg-sky-500 hover:text-amber-500 w-30 justify-center duration-200">
                                <span>Chap sau</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-177 mt-2 mx-auto bg-white">
                {
                    chapter && chapter.is_locked === true? (
                        isLogin ? (
                            <LockContent xu={chapter ? chapter.price_xu : ''}/>
                        ):(
                            <LoginToRead/>
                        )                  
                    ):(
                        <Content chapterimg={chapter ? chapter.chapterimg : null}/>
                    )
                }
                </div>
                <div className='bg-white shadow rounded-sm mt-2 py-3'>
                    <div className="flex items-center justify-center text-white gap-2">
                        <Link className="flex items-center gap-1 bg-sky-400 px-2 py-1.5 rounded-sm hover:bg-sky-500 hover:text-amber-500 w-30 justify-center duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                            <span>Chap trước</span>
                        </Link>
                        <Link className="flex items-center gap-1 bg-sky-400 px-2 py-1.5 rounded-sm hover:bg-sky-500 hover:text-amber-500 w-30 justify-center duration-200">
                            <span>Chap sau</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                    <ol className='flex gap-3 pt-5 px-3 text-gray-500'>
                        <li><Link>Trang chủ</Link> </li>
                        <li className="before:mr-3 before:text-gray-500 before:content-['/'] "><Link>Ta là Tà Đế</Link> </li>
                        <li className="before:mr-3 before:text-gray-500 before:content-['/'] "><Link>Chương 121</Link> </li>
                    </ol>
                </div>
                <div className='bg-white shadow rounded-sm mt-2 py-3'>
                    <CommentAll/>
                </div>
            </div>
        </div>
    )
}
export default ChapterContainerPage