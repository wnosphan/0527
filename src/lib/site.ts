// src/lib/site.ts
export const site = {
  name: "Lục Tuyết Kỳ",
  logo: { src: "/branding/logo.svg", alt: "Lục Tuyết Kỳ" },
  nav: [
    { label: "Home", href: "/" },
    { label: "♡ Lục Tuyết Kỳ ♡", href: "/luc-tuyet-ky" },
    { label: "Cảm nhận", href: "/cam-nhan" },
    { label: "Kho Ảnh", href: "/kho-anh" },
    { label: "Đoạn trích", href: "/doan-trich" },
    { label: "Tuyết Kỳ Ca", href: "/tuyet-ky-ca" },
    { label: "Thành Tích", href: "/thanh-tich" },
    { label: "Video", href: "/video" },
    { label: "Phim Ảnh", href: "/phim-anh" },
    { label: "Phàm Tuyết", href: "/pham-tuyet" },
    { label: "Hoạt Hình Tru Tiên", href: "/hoat-hinh-tru-tien" },
    { label: "Bên Lề", href: "/ben-le" },
    { label: "Tru Tiên – Mục Lục (Tân bản 2024)", href: "/tru-tien-muc-luc" },
    {
      label: "Phổ Cập: Tru Tiên, Tiêu Đỉnh & Lục Tuyết Kỳ",
      href: "/pho-cap-thong-tin",
    },
  ],
  socials: [
    { key: "facebook", href: "https://facebook.com" },
    { key: "twitter", href: "https://x.com" },
    { key: "dribbble", href: "https://dribbble.com" },
    { key: "instagram", href: "https://instagram.com" },
    { key: "youtube", href: "https://youtube.com" },
  ],
};

export type Slide = {
  id: number;
  kicker: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt?: string;
};

export const heroSlides: Slide[] = [
  {
    id: 1,
    kicker: "CHO WEBSITE & BÀI VIẾT",
    title: "LỤC TUYẾT KỲ",
    ctaText: "XEM BÀI VIẾT MỚI",
    ctaHref: "#latest",
    imageSrc: "/hero/slide-1.jpg",
    imageAlt: "Lục Tuyết Kỳ",
  },
  {
    id: 2,
    kicker: "TRÍCH ĐOẠN & CẢM NHẬN",
    title: "TRĂNG ĐÁY TRỜI — TUYẾT ĐẦU KIẾM",
    ctaText: "ĐỌC TRÍCH ĐOẠN",
    ctaHref: "/doan-trich",
    imageSrc: "/hero/slide-2.jpg",
    imageAlt: "Trích đoạn văn học",
  },
  {
    id: 3,
    kicker: "KHO ẢNH & TƯ LIỆU",
    title: "GHI LẠI NHỮNG KHOẢNH KHẮC",
    ctaText: "MỞ KHO ẢNH",
    ctaHref: "/kho-anh",
    imageSrc: "/hero/slide-3.jpg",
    imageAlt: "Kho ảnh tư liệu",
  },
];
