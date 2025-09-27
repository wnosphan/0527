import { Playfair_Display, Spectral } from "next/font/google";
// Nếu bạn có file thư pháp Việt (VD: ThuPhap.woff2), đặt vào /public/fonts/
// rồi bỏ comment 4 dòng localFont bên dưới để dùng đúng "chất" thư pháp.
import localFont from "next/font/local";

export const bodySerif = Spectral({
  subsets: ["vietnamese"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const displayClassic = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["700", "800", "900"],
  display: "swap",
});

// ===== TUỲ CHỌN: Thư pháp bản địa (nếu có file) =====
// export const calligraphy = localFont({
//   src: [{ path: "../../public/fonts/ThuPhap.woff2", weight: "400", style: "normal" }],
//   display: "swap",
// });
