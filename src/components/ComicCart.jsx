import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi'; 

dayjs.extend(relativeTime);
dayjs.locale('vi'); 


function ComicCart({ item }) {
  const latestChapter = item.chapters.length > 0 ? item.chapters[0] : null;

  const timeAgo = latestChapter
  ? dayjs(latestChapter.create_at).fromNow()
  : 'Chưa có chương';

  return (
    <Link to={`/truyen-tranh/${item.slug}`} className='w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200'>
      <div className='relative'>
        <img className='w-full h-56 object-cover' src={item.cover_image} alt={item.title} />
        <div className='absolute left-2 top-2 flex text-sm gap-1'>
          <p className='bg-sky-300 text-white p-0.5 rounded-sm'>{timeAgo}</p>
          <p className='bg-red-500 text-white p-0.5 rounded-sm'>Hot</p>
        </div>
      </div>
      <div className="p-2 text-center w-full">
        <h2 className="text-sm font-semibold text-gray-800 truncate">{item.title}</h2>
        <p className="text-xs text-gray-500">
          {latestChapter ? `Chương ${latestChapter.chapter_name}` : "Chưa có chương"}
        </p>
      </div>
    </Link>
  );
}

export default ComicCart;
