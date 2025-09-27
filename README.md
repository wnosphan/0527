# Blog Lức Tuyết Kỳ Tuyết Mê

Website blog chuyên về tác phẩm **Tru Tiên** của tác giả **Tiêu Đỉnh**, với tập trung đặc biệt vào nhân vật **Lực Tuyết Kỳ**.

## 🌟 Tổng quan

Website được xây dựng bằng **Next.js 15** với **TypeScript** và **Tailwind CSS**, tích hợp với **WordPress.com REST API** để đồng bộ nội dung từ blog gốc `luctuyetkytuyetme.wordpress.com`.

## 🚀 Công nghệ sử dụng

- **Next.js 15.0.3** - React framework với App Router
- **TypeScript 5.6.2** - Kiểu dữ liệu tĩnh
- **Tailwind CSS 3.4.10** - CSS framework
- **WordPress.com REST API** - Đồng bộ nội dung
- **DOMPurify** - Bảo mật HTML
- **Vercel** - Hosting và deployment

## 📱 Tính năng chính

### ✅ Đã triển khai
- **🔄 Tự động đồng bộ nội dung**: ISR với revalidation mỗi 10 giây
- **📱 Responsive design**: Tối ưu cho desktop và mobile
- **🎨 UI/UX hiện đại**: Thiết kế sạch sẽ, dễ sử dụng
- **⚡ Performance cao**: SSR + SSG với Next.js 15
- **🤖 SEO tối ưu**: Metadata động cho từng trang
- **🔄 Cache management**: Hệ thống cache thông minh
- **📊 Cache monitoring**: Dashboard theo dõi trạng thái cache
- **⏰ Automation**: Vercel cron jobs để refresh dữ liệu

### 🗺️ Cấu trúc trang
1. **Trang Chủ** (`/`) - 4 section nội dung động
2. **♡ Lực Tuyết Kỳ ♡** (`/luc-tuyet-ky`) - Giới thiệu nhân vật chính
3. **Phổ Cập Thông Tin** (`/tru-tien-info`) - Thông tin về nguyên tác
4. **Tru Tiên Series** (`/tru-tien-series`) - Tổng quan series
5. **Nhân Vật** (`/nhan-vat`) - Database nhân vật
6. **Review & Đánh Giá** (`/review`) - Đánh giá chi tiết
7. **Liên Hệ** (`/lien-he`) - Thông tin liên hệ
8. **Coming Soon Pages**: Cốt Truyện, Thế Giới, Phân Tích, Thảo Luận, Fan Art, Tin Tức, Downloads

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn
- Git

### Chạy development server
```bash
npm run dev
# hoặc sử dụng batch file
.\dev.bat
```

Website sẽ chạy tại `http://localhost:3000` (hoặc port khả dụng tiếp theo)

## 📂 Cấu trúc dự án

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── refresh-cache/ # Manual cache refresh
│   │   └── revalidate/    # Manual revalidation
│   ├── luc-tuyet-ky/      # Lực Tuyết Kỳ page
│   ├── nhan-vat/          # Nhân vật page
│   ├── review/            # Review page
│   ├── lien-he/           # Liên hệ page
│   ├── [other-pages]/     # Các trang khác
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── NavBar.tsx         # Navigation menu
│   ├── Footer.tsx         # Site footer
│   ├── PostCard.tsx       # Post display component
│   └── CacheStatus.tsx    # Cache monitoring
├── lib/                   # Utilities
│   ├── wp.ts             # WordPress API client
│   └── sections.ts       # Homepage sections config
└── styles/
    └── globals.css       # Global styles
```

## 🚀 Website hoàn chình

Website đã được hoàn thiện với đầy đủ các tính năng:

- ✅ **Tích hợp WordPress API**: Đồng bộ nội dung tự động
- ✅ **Header/Footer hoàn chỉnh**: Navigation với 14 menu items
- ✅ **Responsive design**: Hoạt động tốt trên mọi thiết bị
- ✅ **SEO optimization**: Metadata dynamic cho từng trang
- ✅ **Performance**: ISR + caching system
- ✅ **Multi-page structure**: 14+ trang với nội dung phong phú
- ✅ **Professional UI**: Tailwind CSS với design hiện đại

## 🎯 Mục tiêu dự án

Tạo ra một website blog chuyên nghiệp về **Tru Tiên** và **Lực Tuyết Kỳ** với:
- Nội dung được đồng bộ tự động từ WordPress.com
- Trải nghiệm người dùng tốt nhất
- Performance cao và SEO tối ưu
- Thiết kế responsive và hiện đại

---

*Được xây dựng với ❤️ dành cho cộng đồng yêu thích Tru Tiên*