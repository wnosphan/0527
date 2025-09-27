"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Slide } from "@/lib/site";
import { displayClassic /*, calligraphy*/ } from "@/lib/fonts";

type Props = { slides: Slide[]; auto?: boolean; intervalMs?: number };

export default function HeroCarousel({ slides, auto = true, intervalMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [auto, intervalMs, total]);

  const current = slides[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-950 to-purple-900 text-white">
      {/* decorative stars / noise layer (optional) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(transparent, rgba(0,0,0,0.5))" }}
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[80vh] py-12 px-6">
        {/* LEFT: Text block */}
        <div className="space-y-6 md:pr-8">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-blue-200">
            {current.kicker}
          </p>

          {/* DÙNG FONT CỔ PHONG CHO TIÊU ĐỀ HERO - CỐ ĐỊNH CHIỀU CAO */}
          <div className="h-32 md:h-40 flex items-center">
            <h1 className={`${displayClassic.className} font-extrabold leading-relaxed
              ${current.title.length > 15 
                ? "text-2xl md:text-4xl lg:text-5xl" 
                : "text-3xl md:text-5xl lg:text-6xl"
              }`}>
              {current.title}
            </h1>
          </div>

          <a
            href={current.ctaHref}
            className="inline-block relative font-semibold tracking-wider mt-4"
          >
            <span className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition">
              {current.ctaText}
            </span>
          </a>

          {/* pager 01 02 03 */}
          <div className="flex items-center gap-4 mt-10">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={`w-8 h-8 text-center text-sm font-normal tabular-nums tracking-widest transition-colors flex items-center justify-center
                  ${i === index ? "text-white" : "text-white/60 hover:text-white/90"}`}
              >
                {(i + 1).toString().padStart(2, "0")}
              </button>
            ))}
            <span className="mx-2 h-px w-8 bg-white/40" />
          </div>
        </div>

        {/* RIGHT: Image block */}
        <div className="relative">
          <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder image since we don't have actual images yet */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-bold text-white">♡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Slide {index + 1}</h3>
                  <p className="text-gray-300 text-sm">{current.imageAlt}</p>
                </div>
              </div>
            </div>
            
            {/* Uncomment when you have actual images */}
            {/*
            <Image
              src={current.imageSrc}
              alt={current.imageAlt || current.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
