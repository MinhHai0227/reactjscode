import banner from "../assets/manga.jpg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchChapterBySlug } from "../redux/slices/chapterSlice";

function ChapterContainerPage() {
  const { slug } = useParams();  // Lấy slug từ URL
  const dispatch = useDispatch();

  // Lấy dữ liệu chapter từ Redux store
  const chapter = useSelector((state) => state.chapter.chapterBySlug?.[slug]);  
  const loading = useSelector((state) => state.chapter.loading);  // Trạng thái loading của API
  const error = useSelector((state) => state.chapter.error); // Thêm để xử lý lỗi nếu có

  console.log('slug', slug);  // Log slug để kiểm tra

  useEffect(() => {
    // Nếu chưa có dữ liệu và không đang trong trạng thái loading thì gọi API
    if (slug && !chapter && !loading) {
      dispatch(fetchChapterBySlug(slug));  // Gọi API để lấy chapter theo slug
    }
  }, [dispatch, slug, chapter, loading]);

  if (loading) {
    return <p>Loading...</p>;  // Hiển thị loading khi đang lấy dữ liệu
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;  // Hiển thị lỗi nếu có
  }

  if (!chapter) {
    return <p>Không tìm thấy dữ liệu chương.</p>;  // Nếu không có dữ liệu chương
  }

  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <img className="object-cover h-96 w-full" src={banner} alt="Manga Banner" />
          <h2 className="absolute uppercase bottom-0 inset-x-0 text-center bg-slate-50 border-t-2 border-dashed text-gray-900 lg:text-2xl p-2 h-fit">
            Cập nhật chương mới nhất tại website{" "}
            <span className="bg-amber-500 text-white px-2 font-medium rounded-xl ">
              truyendocviet.com
            </span>
          </h2>
        </div>
        <div className="bg-white shadow rounded-sm mt-2">
          <ol className="flex gap-3 pt-5 px-3 text-gray-500">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="before:mr-3 before:text-gray-500 before:content-['/']">
              <Link to={`/truyen-tranh/${slug}`}>
                {chapter?.chapter_name || "Truyện chưa có tên"}
              </Link>
            </li>
            <li className="before:mr-3 before:text-gray-500 before:content-['/']">
              <Link to={`/truyen-tranh/${slug}`}>
                {chapter?.slug || "Chương chưa có tiêu đề"}
              </Link>
            </li>
          </ol>
          <h1 className="p-3 text-gray-800 text-xl font-semibold leading-6 ">
            {chapter?.chapter_name || "Chương chưa có tiêu đề"}{" "}
            <span className="text-sm font-normal">
              (Cập nhật lúc: 21:57 27/2/2025)
            </span>
          </h1>
        </div>
        <div className="w-full max-w-5xl mt-2 mx-auto bg-white">
          {chapter?.chapterImages && chapter.chapterImages.length > 0 ? (
            <div className="flex flex-col gap-4 p-4">
              {chapter.chapterImages.map((image, index) => (
                <div key={index} className="rounded-lg shadow-md overflow-hidden">
                  <img
                    className="w-full h-auto object-cover"
                    src={image.image_url}
                    alt={`Chapter image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 p-4">Chương này chưa có hình ảnh.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default ChapterContainerPage;
