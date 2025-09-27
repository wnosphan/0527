import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 mt-12">
      <div className="container mx-auto py-8 px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Blog Info */}
          <div>
            <h3 className="text-yellow-300 font-bold text-lg mb-3">Blog Lực Tuyết Kỳ Tuyết Mê</h3>
            <p className="text-sm leading-relaxed">
              Nơi chia sẻ và phổ cập thông tin về nguyên tác Tru Tiên, 
              tác giả Tiêu Đỉnh và nhân vật Lực Tuyết Kỳ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-300 font-bold text-lg mb-3">Liên kết nhanh</h3>
            <div className="space-y-2 text-sm">
              <p><a href="/" className="hover:text-yellow-300 transition-colors">Trang chủ</a></p>
              <p><a href="/luc-tuyet-ky" className="hover:text-yellow-300 transition-colors">♡ Lực Tuyết Kỳ ♡</a></p>
              <p><a href="/kho-anh" className="hover:text-yellow-300 transition-colors">Kho Ảnh</a></p>
              <p><a href="/tru-tien-muc-luc" className="hover:text-yellow-300 transition-colors">Tru Tiên – Mục Lục</a></p>
            </div>
          </div>

          {/* Source Info */}
          <div>
            <h3 className="text-yellow-300 font-bold text-lg mb-3">Nguồn dữ liệu</h3>
            <p className="text-sm">
              Nội dung được đồng bộ từ{" "}
              <a
                href="https://luctuyetkytuyetme.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline font-medium"
              >
                WordPress.com
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Tự động cập nhật mỗi 10 giây
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Blog Lực Tuyết Kỳ Tuyết Mê. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Được xây dựng với Next.js 15 + WordPress.com API
          </p>
        </div>
      </div>
    </footer>
  );
}
