"use client";

import React from 'react';
import Link from "next/link";

const navItems = [
  { label: "Trang Chủ", href: "/" },
  { label: "♡ Lực Tuyết Kỳ ♡", href: "/luc-tuyet-ky" },
  { label: "Phổ Cập Thông Tin Các Vấn Đề Xung Quanh Nguyên Tác Tru Tiên", href: "/tru-tien-info" },
  { label: "Tru Tiên Series", href: "/tru-tien-series" },
  { label: "Nhân Vật", href: "/nhan-vat" },
  { label: "Cốt Truyện", href: "/cot-truyen" },
  { label: "Thế Giới", href: "/the-gioi" },
  { label: "Phân Tích", href: "/phan-tich" },
  { label: "Review & Đánh Giá", href: "/review" },
  { label: "Thảo Luận", href: "/thao-luan" },
  { label: "Fan Art", href: "/fan-art" },
  { label: "Tin Tức", href: "/tin-tuc" },
  { label: "Downloads", href: "/downloads" },
  { label: "Liên Hệ", href: "/lien-he" },
];

export default function NavBar() {
  return (
    <nav className="bg-blue-900/70 text-white py-3 rounded-lg w-full">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-6 text-sm lg:text-base px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-yellow-300 transition-colors text-center whitespace-nowrap px-2 py-1 rounded hover:bg-blue-800/50"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation - Scrollable horizontal menu */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-3 px-4 py-2 scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-yellow-300 transition-colors text-center whitespace-nowrap px-3 py-2 text-sm rounded bg-blue-800/30 hover:bg-blue-800/70 min-w-max"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
