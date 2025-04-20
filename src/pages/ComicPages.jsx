import { Link, useParams } from 'react-router-dom';
import ChapterList from '../components/ChapterList';
import CommentAll from '../components/CommentAll';
import { useEffect, useState } from 'react';
import { findComicById } from '../custom/service/ComicService';

function ComicPages() {
    const { slug } = useParams();
    const [comic, setComic] = useState(null);

    useEffect(() => {
        const getComicBySlug = async () => {
            try {
                const res = await findComicById(slug);
                setComic(res);
            } catch (error) {
                console.error('Lỗi khi fetch truyện:', error);
            }
        };
        getComicBySlug();
    }, [slug]);

    if (!comic) {
        return <h1 className="text-center p-4">Đang tải truyện...</h1>;
    }

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto bg-white shadow">
                <ol className="flex gap-3 p-3 text-gray-500">
                    <li><Link to='/'>Trang chủ  / </Link></li>
                    <li>{comic.title}</li>
                </ol>

                <div className="block lg:flex lg:items-center mb-3">
                    <div className="w-full lg:w-fit flex">
                        <img className="mx-auto p-3 ml-2 object-cover h-64" 
                             src={comic.cover_image || 'https://via.placeholder.com/150'} 
                             alt="cover" />
                    </div>

                    <div className="p-3">
                        <h1 className="text-2xl font-semibold leading-6 pb-4">{comic.title || 'Không có tiêu đề'}</h1>

                        <ul className="text-gray-700 space-y-2 mb-4">
                            <li className="flex">
                                <span className="w-35 flex items-center gap-1">
                                    <p>Tác giả:</p>
                                </span>
                                <p>{comic.author || 'Đang cập nhật'}</p>
                            </li>

                            <li className="flex">
                                <span className="w-35 flex items-center gap-1">
                                    <p>Tình trạng:</p>
                                </span>
                                <p>{comic.status || 'Đang cập nhật'}</p>
                            </li>

                            <li className="flex">
                                <span className="w-35 flex items-center gap-1">
                                    <p>Lượt yêu thích:</p>
                                </span>
                                <p>{comic.like ?? 0}</p>
                            </li>

                            <li className="flex">
                                <span className="w-35 flex items-center gap-1">
                                    <p>Lượt xem:</p>
                                </span>
                                <p>{comic.views ?? 0}</p>
                            </li>
                        </ul>

                        <ul className="flex flex-wrap gap-2 mb-4">
                            {Array.isArray(comic.categories) && comic.categories.length > 0 ? (
                                comic.categories.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            to={`/the-loai/${item.slug}`}
                                            className="border border-amber-500 px-3 py-1 text-amber-500 rounded-sm hover:text-white hover:bg-amber-500 duration-300"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li>Không có thể loại</li>
                            )}
                        </ul>

                        <ul className="grid grid-cols-2 gap-2 sm:flex">
                            <li>
                                <button className="flex items-center justify-center w-full rounded-sm px-3 py-2 text-white bg-emerald-600 hover:bg-emerald-500">
                                    Đọc từ đầu
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center justify-center w-full rounded-sm px-3 py-2 text-white bg-red-600 hover:bg-red-300">
                                    Theo dõi
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='p-3 space-y-2'>
                    <span className='flex text-amber-500 text-lg items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        <p className=''>Giới thiệu</p>
                    </span>
                    <p>{comic.description || 'Đang cập nhật'}</p>
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-semibold mb-2">Danh sách chương</h2>
                    <ul className="list-disc pl-5">
                        {comic.chapters && comic.chapters.length > 0 ? (
                        comic.chapters.map((chapter) => (
                            <li key={chapter.id}>Chương {chapter.chapter_name}</li>
                        ))
                        ) : (
                        <li>Chưa có chương nào.</li>
                        )}
                    </ul>
                    </div>
                <div className="p-3">
                    <h2 className="text-lg font-semibold mb-2">Bình luận</h2>
                    <CommentAll comicId={comic.id} />
                </div>
            </div>
        </div>
    );
}

export default ComicPages;
