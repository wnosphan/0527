import React from "react";

export default function TruTienSeriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Tru Tiên Series
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Về Series Tru Tiên</h2>
          <p className="text-gray-700 leading-relaxed">
            Series Tru Tiên bao gồm tác phẩm gốc và các phần tiếp theo, tạo nên một vũ trụ 
            tiên hiệp phong phú với nhiều nhân vật và cốt truyện hấp dẫn.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">🏮 Tru Tiên (Nguyên tác)</h3>
            <div className="text-gray-700 space-y-2">
              <p><strong>Thời gian:</strong> 2003-2007</p>
              <p><strong>Số chương:</strong> 452 chương</p>
              <p><strong>Nội dung:</strong> Kể về hành trình tu tiên của Trương Tiểu Phàm từ một thiếu niên bình thường 
              đến việc trở thành một tu sĩ mạnh mẽ. Tác phẩm tập trung vào tình cảm giữa các nhân vật và những 
              cuộc đấu tranh trong thế giới tu tiên.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">⚡ Tru Tiên II</h3>
            <div className="text-gray-700 space-y-2">
              <p><strong>Thời gian:</strong> Sau Tru Tiên</p>
              <p><strong>Nội dung:</strong> Tiếp nối câu chuyện với những thử thách mới và sự phát triển 
              của các nhân vật chính. Mở rộng thế giới quan và giới thiệu thêm nhiều nhân vật mới.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">🎬 Các phiên bản chuyển thể</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-blue-600">Phim truyền hình</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tru Tiên - Thanh Vân Chí (2016)</li>
                  <li>• Tru Tiên (2019)</li>
                  <li>• Các phiên bản web drama</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-600">Game & Media khác</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Game online Tru Tiên</li>
                  <li>• Game mobile</li>
                  <li>• Manhua (truyện tranh)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">📖 Các tập trong series</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Tập 1-4: Khởi đầu</h4>
                <p className="text-gray-600">Trương Tiểu Phàm gia nhập Thanh Vân Môn, học được Thái Cực Huyền Thanh Đạo.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tập 5-8: Phát triển</h4>
                <p className="text-gray-600">Những cuộc phiêu lưu và thử thách mới, mối quan hệ với Lục Tuyết Kỳ và Bích Dao.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Tru Tiên Series - Blog Lực Tuyết Kỳ Tuyết Mê",
  description: "Tìm hiểu về toàn bộ series Tru Tiên và các phiên bản chuyển thể"
};
