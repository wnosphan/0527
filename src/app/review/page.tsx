import React from "react";

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Review & Đánh Giá
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Đánh giá tổng quan về Tru Tiên</h2>
          <p className="text-gray-700 leading-relaxed">
            Tru Tiên được coi là một trong những tác phẩm tiên hiệp kinh điển của văn học mạng Trung Quốc. 
            Tác phẩm có sức ảnh hưởng lớn đến thể loại tiên hiệp hiện đại.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              ⭐ Đánh giá tổng thể
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-green-600">Điểm mạnh</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Cốt truyện hấp dẫn, có chiều sâu
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Nhân vật được xây dựng sống động
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Thế giới quan rộng lớn, chi tiết
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Tình cảm giữa các nhân vật tự nhiên
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Văn phong hay, dễ đọc
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-orange-600">Điểm cần cải thiện</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">⚠</span>
                    Một số tình tiết hơi dài dòng
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">⚠</span>
                    Cần thời gian để làm quen với thế giới quan
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">⚠</span>
                    Một số nhân vật phụ chưa được khai thác hết
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">📊 Đánh giá chi tiết</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Cốt truyện</span>
                  <span className="text-blue-600 font-medium">9/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Nhân vật</span>
                  <span className="text-green-600 font-medium">8.5/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Thế giới quan</span>
                  <span className="text-purple-600 font-medium">9.5/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Tình cảm</span>
                  <span className="text-pink-600 font-medium">8/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Văn phong</span>
                  <span className="text-indigo-600 font-medium">8.5/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">💭 Nhận xét từ độc giả</h3>
            <div className="space-y-4">
              <div className="bg-white rounded p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 italic">
                  "Tru Tiên là tác phẩm đã mở ra con đường tiên hiệp cho tôi. Cốt truyện hấp dẫn, 
                  nhân vật sống động, đặc biệt là mối tình giữa Tiểu Phàm và Lục Tuyết Kỳ."
                </p>
                <div className="text-sm text-gray-500 mt-2">- Độc giả A</div>
              </div>
              
              <div className="bg-white rounded p-4 border-l-4 border-green-500">
                <p className="text-gray-700 italic">
                  "Thế giới tu tiên trong Tru Tiên được xây dựng rất chi tiết và logic. 
                  Tác giả Tiêu Đỉnh thực sự là một bậc thầy trong việc kể chuyện."
                </p>
                <div className="text-sm text-gray-500 mt-2">- Độc giả B</div>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-purple-500">
                <p className="text-gray-700 italic">
                  "Dù đã đọc nhiều lần nhưng mỗi lần đọc lại vẫn cảm thấy thú vị. 
                  Tru Tiên xứng đáng là tác phẩm kinh điển của thể loại tiên hiệp."
                </p>
                <div className="text-sm text-gray-500 mt-2">- Độc giả C</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">🏆 Thành tích & Giải thưởng</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-medium mb-2">📈 Thống kê</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Hơn 100 triệu lượt đọc online</li>
                  <li>• Được dịch ra nhiều ngôn ngữ</li>
                  <li>• Top 1 tiểu thuyết tiên hiệp nhiều năm</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">🎬 Ảnh hưởng</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Được chuyển thể thành phim, game</li>
                  <li>• Tạo xu hướng cho thể loại tiên hiệp</li>
                  <li>• Ảnh hưởng đến nhiều tác giả khác</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Review & Đánh Giá - Blog Lực Tuyết Kỳ Tuyết Mê",
  description: "Đánh giá chi tiết về tác phẩm Tru Tiên, ưu điểm và nhận xét từ độc giả"
};
