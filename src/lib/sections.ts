// src/lib/sections.ts
export const homeSections = [
  { 
    key: "featured", 
    title: "Nổi bật", 
    description: "Những bài viết được ghim đầu trang",
    number: 3, 
    sticky: true,
    showViewAll: true,
    viewAllHref: "https://luctuyetkytuyetme.wordpress.com/"
  },
  { 
    key: "latest", 
    title: "Bài mới", 
    description: "Những bài viết mới nhất được cập nhật",
    number: 6,
    showViewAll: true,
    viewAllHref: "https://luctuyetkytuyetme.wordpress.com/"
  },
  { 
    key: "category", 
    title: "Tru Tiên", 
    description: "Những bài viết về thể loại Tru Tiên",
    slug: "tru-tien", 
    number: 6,
    showViewAll: true,
    viewAllHref: "https://luctuyetkytuyetme.wordpress.com/category/tru-tien/"
  },
  { 
    key: "tag", 
    title: "Sưu tầm ảnh", 
    description: "Bộ sưu tập hình ảnh đẹp",
    slug: "anh", 
    number: 6,
    showViewAll: true,
    viewAllHref: "https://luctuyetkytuyetme.wordpress.com/tag/anh/"
  },
];
