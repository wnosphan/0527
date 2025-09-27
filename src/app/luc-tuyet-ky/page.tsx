import React from "react";

export default function LucTuyetKyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        ♡ Lực Tuyết Kỳ ♡
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Giới thiệu về Lực Tuyết Kỳ</h2>
          <p className="text-gray-700 leading-relaxed">
            Lực Tuyết Kỳ là một nhân vật quan trọng trong tác phẩm Tru Tiên của Tiêu Đỉnh. 
            Với tính cách mạnh mẽ và quyết đoán, cô là một trong những nhân vật nữ được yêu thích nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Thông tin nhân vật</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Tên:</strong> Lực Tuyết Kỳ</li>
              <li><strong>Tác phẩm:</strong> Tru Tiên</li>
              <li><strong>Tác giả:</strong> Tiêu Đỉnh</li>
              <li><strong>Đặc điểm:</strong> Mạnh mẽ, quyết đoán</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Nội dung liên quan</h3>
            <p className="text-gray-700 mb-4">
              Khám phá thêm về nhân vật Lực Tuyết Kỳ và những câu chuyện xoay quanh cô trong tác phẩm Tru Tiên.
            </p>
            <div className="text-sm text-gray-500">
              Nội dung sẽ được cập nhật thêm...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "♡ Lực Tuyết Kỳ ♡ - Blog Lực Tuyết Kỳ Tuyết Mê",
  description: "Tìm hiểu về nhân vật Lực Tuyết Kỳ trong tác phẩm Tru Tiên của Tiêu Đỉnh"
};
