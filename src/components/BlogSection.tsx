import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "72 Phép Biến Hóa của Tôn Ngộ Không",
    excerpt: "Khám phá sức mạnh thần kỳ của 72 phép biến hóa và ý nghĩa sâu sắc đằng sau mỗi phép thuật của Đại Thánh.",
    date: "2024-03-15",
    readTime: "8 phút đọc",
    category: "Thần thông"
  },
  {
    id: 2,
    title: "Hành Trình Tu Hành tại Núi Hoa Quả",
    excerpt: "Câu chuyện về quãng thời gian Tôn Ngộ Không tu luyện tại Núi Hoa Quả và những bài học về lãnh đạo từ Vua Khỉ.",
    date: "2024-03-12",
    readTime: "6 phút đọc",
    category: "Triết học"
  },
  {
    id: 3,
    title: "Như Ý Kim Cô Bổng - Vũ Khí Huyền Thoại",
    excerpt: "Tìm hiểu về thanh gậy thần kỳ có thể co giãn theo ý muốn và vai trò của nó trong các trận chiến kinh điển.",
    date: "2024-03-10",
    readTime: "5 phút đọc",
    category: "Vũ khí"
  },
  {
    id: 4,
    title: "Đại Náo Thiên Cung - Biểu Tượng Nổi Loạn",
    excerpt: "Phân tích sâu về cuộc nổi loạn chống lại Thiên Đình và ý nghĩa hiện đại của tinh thần đấu tranh.",
    date: "2024-03-08",
    readTime: "10 phút đọc",
    category: "Lịch sử"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Blog Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá những câu chuyện huyền thoại qua góc nhìn hiện đại
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group cursor-pointer shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-smooth font-serif">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-primary transition-smooth"
                  >
                    Đọc thêm
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Xem tất cả bài viết
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;