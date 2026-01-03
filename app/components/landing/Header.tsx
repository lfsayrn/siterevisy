"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-24 h-10 transition-transform group-hover:scale-105">
            <Image src="/logo.png" alt="Revisy Logo" fill className="object-contain object-left invert" />
          </div>
        </Link>

        {/* Nav / CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="https://app.userevisy.com/login"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block"
          >
            Entrar
          </Link>
          <Link
            href="https://app.userevisy.com/registry"
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform"
          >
            Começar
          </Link>
        </div>
      </div>
    </header>
  );
}
