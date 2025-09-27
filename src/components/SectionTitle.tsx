import { ReactNode } from "react";
import { displayClassic } from "@/lib/fonts";

export default function SectionTitle({ children }: { children?: ReactNode }) {
  return (
    <h2
      className={`${displayClassic.className} text-3xl md:text-4xl font-bold tracking-wide mb-4 flex items-center gap-4`}
    >
      <span>{children}</span>
      <span className="h-[2px] flex-1 bg-cyan-500/70" />
    </h2>
  );
}
