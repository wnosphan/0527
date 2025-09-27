"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    subtitle: "FOR WEBSITE AND BLOG",
    title: "BLOG LỰC TUYẾT KỲ TUYẾT MÊ",
    description: "Nơi tổng hợp cảm nhận, trích đoạn, kho ảnh và thông tin xoay quanh tác phẩm Tru Tiên của Tiêu Đỉnh",
    buttonText: "Khám phá ngay",
    buttonHref: "/luc-tuyet-ky",
    image: "/hero-1.jpg"
  },
  {
    id: 2,
    subtitle: "TRU TIÊN SERIES",
    title: "KHÁM PHÁ THẾ GIỚI TRU TIÊN",
    description: "Hành trình tu tiên đầy gian nan của Trương Tiểu Phàm và những mối tình phức tạp trong thế giới tu tiên",
    buttonText: "Đọc ngay",
    buttonHref: "/tru-tien-series",
    image: "/hero-2.jpg"
  },
  {
    id: 3,
    subtitle: "NHÂN VẬT & CỐT TRUYỆN",
    title: "PHÂN TÍCH SÂUU VỀ NHÂN VẬT",
    description: "Tìm hiểu về các nhân vật trong Tru Tiên: Lực Tuyết Kỳ, Bích Dao, và những mối quan hệ phức tạp",
    buttonText: "Xem thêm",
    buttonHref: "/nhan-vat",
    image: "/hero-3.jpg"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white min-h-[85vh] flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 relative z-10">
        
        {/* Left side: Content */}
        <div className="flex flex-col justify-center space-y-8 animate-fade-in">
          <p className="uppercase tracking-[0.2em] text-sm text-cyan-300 font-medium">
            {currentSlideData.subtitle}
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            {currentSlideData.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            {currentSlideData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={currentSlideData.buttonHref}
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {currentSlideData.buttonText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/review"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Đánh giá & Review
            </Link>
          </div>
        </div>

        {/* Right side: Visual */}
        <div className="flex justify-center items-center relative">
          <div className="relative w-full max-w-lg">
            {/* Main visual container */}
            <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Content area */}
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">♡</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-cyan-300">Lực Tuyết Kỳ</h3>
                  <p className="text-gray-300 text-sm">
                    Nhân vật nữ chính trong tác phẩm kinh điển Tru Tiên
                  </p>
                </div>
                
                {/* Stats or features */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-xl font-bold text-cyan-400">8+</div>
                    <div className="text-xs text-gray-400">Tập truyện</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">100+</div>
                    <div className="text-xs text-gray-400">Bài viết</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-pink-400">∞</div>
                    <div className="text-xs text-gray-400">Cảm xúc</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-lg opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-cyan-400 w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 right-8 hidden lg:flex flex-col items-center text-white/60 animate-bounce">
        <span className="text-xs mb-2 writing-mode-vertical-rl">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
