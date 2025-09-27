"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import {
  Facebook, Twitter, Instagram, Dribbble, Youtube
} from "lucide-react";

const iconMap: Record<string, any> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  dribbble: Dribbble,
  youtube: Youtube,
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-b from-indigo-950/90 to-indigo-900/70 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={site.logo.src} alt={site.logo.alt} className="h-8 w-auto" />
          <span className="sr-only">{site.name}</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative uppercase tracking-wider text-sm font-semibold text-white/80 hover:text-white transition group
                  ${active ? "text-white" : ""}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-cyan-400 transition-all
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Socials */}
        <div className="hidden md:flex items-center gap-4">
          {site.socials.map((s) => {
            const Icon = iconMap[s.key] ?? null;
            if (!Icon) return null;
            return (
              <Link
                key={s.key}
                href={s.href}
                target="_blank"
                className="text-white/70 hover:text-white transition"
                aria-label={s.key}
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>

        {/* Mobile menu placeholder */}
        <button className="md:hidden bg-zinc-800/70 text-white text-sm px-3 py-2 rounded">
          MENU
        </button>
      </div>
    </header>
  );
}
