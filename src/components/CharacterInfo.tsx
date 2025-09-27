import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Zap, Shield, Sword } from "lucide-react";

const CharacterInfo = () => {
  const abilities = [
    { name: "72 Phép Biến Hóa", level: "Thần Cấp", icon: Zap },
    { name: "Cân Đẩu Vân", level: "Cực Phẩm", icon: Crown },
    { name: "Kim Cương Bất Hoại", level: "Bất Tử", icon: Shield },
    { name: "Như Ý Kim Cô Bổng", level: "Thần Khí", icon: Sword },
  ];

  return (
    <section id="character" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Thông Tin Nhân Vật</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tôn Ngộ Không, còn được biết đến với danh hiệu Đại Thánh Tề Thiên, là nhân vật chính 
              trong tiểu thuyết kinh điển "Tây Du Ký" của Ngô Thừa Ân. Sinh ra từ đá thần, 
              ông sở hữu sức mạnh vô song và tinh thần bất khuất.
            </p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Tên thật:</span>
                <span>Tôn Ngộ Không</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Danh hiệu:</span>
                <span>Đại Thánh Tề Thiên</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Xuất thân:</span>
                <span>Núi Hoa Quả</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Thầy:</span>
                <span>Tổ Sư Bồ Đề</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Vũ khí:</span>
                <span>Như Ý Kim Cô Bổng</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-serif">Khả Năng Đặc Biệt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {abilities.map((ability, index) => {
                  const Icon = ability.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{ability.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-imperial text-primary-foreground">
                        {ability.level}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="gradient-imperial text-primary-foreground shadow-elegant">
              <CardContent className="p-6">
                <blockquote className="text-lg font-serif italic">
                  "Ta là Tôn Ngộ Không, Đại Thánh Tề Thiên! 
                  Dù có 500 năm dưới chân núi Ngũ Hành, 
                  tinh thần ta không bao giờ khuất phục!"
                </blockquote>
                <footer className="mt-4 text-sm opacity-90">
                  — Tôn Ngộ Không, Tây Du Ký
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterInfo;