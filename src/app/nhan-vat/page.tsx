import React from "react";

export default function CharactersPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Nhân Vật
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Các nhân vật chính trong Tru Tiên</h2>
          <p className="text-gray-700 leading-relaxed">
            Khám phá các nhân vật quan trọng và mối quan hệ phức tạp giữa họ trong thế giới Tru Tiên.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Trương Tiểu Phàm</h3>
                <p className="text-gray-700 mb-3">
                  Nhân vật chính của câu chuyện. Xuất thân từ một thiếu niên bình thường ở Thảo Miếu Thôn, 
                  sau đó gia nhập Thanh Vân Môn và bước vào con đường tu tiên đầy gian nan.
                </p>
                <div className="text-sm text-gray-600">
                  <span className="inline-block bg-blue-100 px-2 py-1 rounded mr-2">Nhân vật chính</span>
                  <span className="inline-block bg-green-100 px-2 py-1 rounded">Thanh Vân Môn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                👩
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-pink-600">Lục Tuyết Kỳ</h3>
                <p className="text-gray-700 mb-3">
                  Nữ chính của tác phẩm, con gái của Lục Tuyết Kỳ. Là một nữ tu sĩ tài năng và xinh đẹp 
                  của Tiểu Trúc Phong, có mối quan hệ tình cảm phức tạp với Trương Tiểu Phàm.
                </p>
                <div className="text-sm text-gray-600">
                  <span className="inline-block bg-pink-100 px-2 py-1 rounded mr-2">Nữ chính</span>
                  <span className="inline-block bg-green-100 px-2 py-1 rounded">Tiểu Trúc Phong</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                🌸
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">Bích Dao</h3>
                <p className="text-gray-700 mb-3">
                  Một trong những nhân vật nữ quan trọng nhất, có xuất thân bí ẩn và sức mạnh đáng sợ. 
                  Mối quan hệ của cô với Trương Tiểu Phàm tạo nên nhiều tình tiết gay cấn trong truyện.
                </p>
                <div className="text-sm text-gray-600">
                  <span className="inline-block bg-purple-100 px-2 py-1 rounded mr-2">Nữ phụ quan trọng</span>
                  <span className="inline-block bg-red-100 px-2 py-1 rounded">Bí ẩn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                🧙‍♂️
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Điền Bất Dịch</h3>
                <p className="text-gray-700 mb-3">
                  Thầy của Trương Tiểu Phàm tại Đại Trúc Phong, là người đã dạy cho anh Thái Cực Huyền Thanh Đạo. 
                  Một nhân vật quan trọng trong quá trình trưởng thành của nhân vật chính.
                </p>
                <div className="text-sm text-gray-600">
                  <span className="inline-block bg-green-100 px-2 py-1 rounded mr-2">Sư phụ</span>
                  <span className="inline-block bg-blue-100 px-2 py-1 rounded">Đại Trúc Phong</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">🏮 Các môn phái chính</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded p-4">
              <h4 className="font-medium mb-2 text-blue-600">Thanh Vân Môn</h4>
              <p className="text-gray-600">Môn phái chính diện, nơi Trương Tiểu Phàm tu luyện</p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-medium mb-2 text-red-600">Quỷ Vương Tông</h4>
              <p className="text-gray-600">Môn phái ma đạo mạnh mẽ</p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-medium mb-2 text-green-600">Thiên Âm Tự</h4>
              <p className="text-gray-600">Môn phái Phật giáo thanh tịnh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Nhân Vật - Blog Lực Tuyết Kỳ Tuyết Mê",
  description: "Tìm hiểu về các nhân vật chính trong tác phẩm Tru Tiên"
};
