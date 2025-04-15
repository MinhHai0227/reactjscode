export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Giới thiệu */}
          <div>
            <h2 className="text-lg font-semibold mb-2">TruyenWeb</h2>
            <p>
              Website đọc truyện miễn phí, cập nhật truyện mới liên tục mỗi ngày.
              Trải nghiệm đọc mượt mà, không quảng cáo.
            </p>
          </div>

          {/* Điều hướng */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Liên kết</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Trang chủ</a></li>
              <li><a href="/the-loai" className="hover:underline">Thể loại</a></li>
              <li><a href="/lien-he" className="hover:underline">Liên hệ</a></li>
              <li><a href="/ve-chung-toi" className="hover:underline">Về chúng tôi</a></li>
            </ul>
          </div>

          {/* Thông tin bản quyền */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Bản quyền</h2>
            <p>
              &copy; {new Date().getFullYear()} TruyenWeb. Mọi quyền được bảo lưu.
            </p>
            <p>Thiết kế bởi Nguyễn Đình Vinh</p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          Made with ❤️ by TruyenWeb Team
        </div>
      </div>
    </footer>
  );
}
