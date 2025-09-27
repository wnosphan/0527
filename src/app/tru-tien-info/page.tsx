import React from "react";

export default function TruTienInfoPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Phổ Cập Thông Tin Các Vấn Đề Xung Quanh Nguyên Tác Tru Tiên
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Về tác phẩm Tru Tiên</h2>
          <p className="text-gray-700 leading-relaxed">
            Tru Tiên là một tác phẩm tiểu thuyết tiên hiệp nổi tiếng của tác giả Tiêu Đỉnh. 
            Tác phẩm kể về hành trình tu tiên của Trương Tiểu Phàm và những mối quan hệ phức tạp 
            trong thế giới tu tiên.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Thông tin tác phẩm</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Tên gốc:</strong> 誅仙</li>
              <li><strong>Tác giả:</strong> Tiêu Đỉnh (萧鼎)</li>
              <li><strong>Thể loại:</strong> Tiên hiệp, Huyền hương</li>
              <li><strong>Năm xuất bản:</strong> 2003</li>
              <li><strong>Số tập:</strong> 8 tập</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Nhân vật chính</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Trương Tiểu Phàm:</strong> Nhân vật chính</li>
              <li><strong>Lục Tuyết Kỳ:</strong> Nữ chính</li>
              <li><strong>Bích Dao:</strong> Nữ phụ quan trọng</li>
              <li><strong>Điền Bất Dịch:</strong> Thầy của Tiểu Phàm</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Các vấn đề được thảo luận</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">📚 Nội dung & Cốt truyện</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Phân tích các tập trong series</li>
                <li>• Diễn biến cốt truyện</li>
                <li>• Các chi tiết quan trọng</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">👥 Nhân vật & Mối quan hệ</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Phân tích tính cách nhân vật</li>
                <li>• Mối quan hệ giữa các nhân vật</li>
                <li>• Sự phát triển của nhân vật</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">🎬 Chuyển thể & Phiên bản</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Phim truyền hình</li>
                <li>• Game online</li>
                <li>• Các phiên bản khác</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">💭 Thảo luận & Đánh giá</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Đánh giá từ độc giả</li>
                <li>• So sánh với tác phẩm khác</li>
                <li>• Tác động văn hóa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Phổ Cập Thông Tin Tru Tiên - Blog Lực Tuyết Kỳ Tuyết Mê",
  description: "Tìm hiểu các thông tin, vấn đề xung quanh nguyên tác Tru Tiên của Tiêu Đỉnh"
};
