import React from "react";

function ComingSoonContent({ title, description, features }: {
  title: string;
  description: string;
  features?: string[];
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Đang trong quá trình phát triển</h2>
        <p className="text-gray-700 text-center leading-relaxed mb-6">
          Trang này đang được xây dựng và sẽ sớm có nội dung phong phú về {title.toLowerCase()}.
        </p>
        
        {features && features.length > 0 && (
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">🎯 Nội dung sắp ra mắt</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center">
        <div className="bg-yellow-50 rounded-lg p-6 inline-block">
          <h3 className="text-lg font-semibold mb-2">📅 Thời gian dự kiến</h3>
          <p className="text-gray-700">
            Nội dung sẽ được cập nhật trong thời gian sớm nhất. 
            <br />
            Cảm ơn bạn đã đồng hành cùng chúng tôi!
          </p>
        </div>
      </div>
    </div>
  );
}

// Trang Thảo Luận
export default function ThaoLuanPage() {
  return (
    <ComingSoonContent
      title="Thảo Luận"
      description="Không gian thảo luận và chia sẻ ý kiến về Tru Tiên và Lực Tuyết Kỳ"
      features={[
        "Diễn đàn thảo luận",
        "Q&A về Tru Tiên",
        "Tranh luận về các tình tiết",
        "Chia sẻ cảm nhận",
        "Bình chọn nhân vật yêu thích",
        "Góc nhìn đa chiều"
      ]}
    />
  );
}

export const metadata = {
  title: "Thảo Luận - Blog Lực Tuyết Kỳ Tuyết Mê",
  description: "Không gian thảo luận và chia sẻ ý kiến về tác phẩm Tru Tiên"
};
