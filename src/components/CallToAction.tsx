import React from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4">
            🎯 Tham gia cộng đồng
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Khám phá thế giới Tru Tiên cùng chúng tôi
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Tham gia cộng đồng độc giả yêu thích Tru Tiên để chia sẻ cảm nhận, 
          thảo luận về cốt truyện và khám phá những chi tiết thú vị trong tác phẩm.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/thao-luan"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Tham gia thảo luận
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href="/lien-he"
            className="inline-flex items-center border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Liên hệ với chúng tôi
          </Link>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-6 text-blue-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1000+</div>
            <div className="text-xs">Độc giả</div>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs">Bài phân tích</div>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-xs">Cập nhật</div>
          </div>
        </div>
      </div>
    </section>
  );
}
