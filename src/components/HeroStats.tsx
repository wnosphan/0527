import React from "react";

const stats = [
  {
    icon: "📚",
    number: "8+",
    label: "Tập truyện",
    description: "Tru Tiên series"
  },
  {
    icon: "👥",
    number: "20+", 
    label: "Nhân vật",
    description: "Được phân tích"
  },
  {
    icon: "📝",
    number: "100+",
    label: "Bài viết",
    description: "Nội dung chất lượng"
  },
  {
    icon: "💖",
    number: "∞",
    label: "Cảm xúc",
    description: "Từ độc giả"
  }
];

export default function HeroStats() {
  return (
    <section className="bg-white py-16 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Blog Tru Tiên hàng đầu Việt Nam
          </h2>
          <p className="text-gray-600 text-lg">
            Nơi tập trung những thông tin, cảm nhận và phân tích sâu sắc nhất về tác phẩm kinh điển
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-6 py-3 text-blue-700">
            <span className="animate-pulse">✨</span>
            <span className="font-medium">Được cập nhật thường xuyên từ WordPress.com</span>
            <span className="animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
