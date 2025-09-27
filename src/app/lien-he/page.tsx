import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Liên Hệ
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Liên hệ với chúng tôi</h2>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi rất vui khi nhận được phản hồi, góp ý và chia sẻ từ các bạn độc giả 
            yêu thích Tru Tiên và Lực Tuyết Kỳ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              📧 Thông tin liên hệ
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🌐</span>
                <div>
                  <h4 className="font-medium">Website nguồn</h4>
                  <p className="text-gray-600 text-sm">
                    <a 
                      href="https://luctuyetkytuyetme.wordpress.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      luctuyetkytuyetme.wordpress.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">💬</span>
                <div>
                  <h4 className="font-medium">Góp ý & Phản hồi</h4>
                  <p className="text-gray-600 text-sm">
                    Chia sẻ ý kiến của bạn về nội dung website
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">🤝</span>
                <div>
                  <h4 className="font-medium">Hợp tác</h4>
                  <p className="text-gray-600 text-sm">
                    Cùng phát triển nội dung về Tru Tiên
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">📝 Gửi tin nhắn</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chủ đề
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Góp ý về nội dung</option>
                  <option>Báo lỗi website</option>
                  <option>Đề xuất nội dung mới</option>
                  <option>Hợp tác</option>
                  <option>Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tin nhắn
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nhập tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">🎯 Mục tiêu của website</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-medium mb-2">📚 Chia sẻ kiến thức</h4>
              <p className="text-sm">
                Cung cấp thông tin chi tiết và chính xác về tác phẩm Tru Tiên 
                và các nhân vật, đặc biệt là Lực Tuyết Kỳ.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🤝 Xây dựng cộng đồng</h4>
              <p className="text-sm">
                Tạo nên một không gian để các fan của Tru Tiên có thể 
                giao lưu, thảo luận và chia sẻ đam mê.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">📈 Phát triển nội dung</h4>
              <p className="text-sm">
                Liên tục cập nhật và mở rộng nội dung dựa trên 
                phản hồi và đóng góp từ cộng đồng.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🌟 Tôn vinh tác phẩm</h4>
              <p className="text-sm">
                Giúp quảng bá và tôn vinh giá trị của tác phẩm 
                Tru Tiên trong cộng đồng yêu thích tiểu thuyết tiên hiệp.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">⚠️ Lưu ý quan trọng</h3>
          <div className="text-gray-700 space-y-2">
            <p>
              • Website này được tạo ra với mục đích chia sẻ và thảo luận về tác phẩm Tru Tiên 
              một cách phi lợi nhuận.
            </p>
            <p>
              • Tất cả nội dung về Tru Tiên thuộc bản quyền của tác giả Tiêu Đỉnh 
              và các nhà xuất bản liên quan.
            </p>
            <p>
              • Chúng tôi tôn trọng bản quyền và sẽ gỡ bỏ nội dung nếu có yêu cầu 
              từ chủ sở hữu bản quyền.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Liên Hệ - Blog Lực Tuyết Kỳ Tuyết Mê",
  description: "Liên hệ với chúng tôi về website Tru Tiên và Lực Tuyết Kỳ"
};
