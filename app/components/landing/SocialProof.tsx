"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const LOGOS = [
  "Sony Music",
  "Universal",
  "Warner Music",
  "Abbey Road",
  "Solid State",
  "Atlantic",
  "Def Jam",
  "Columbia",
];
const DUPLICATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS]; // Triple for smooth loop

export default function SocialProof() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Horizontal Marquee
      gsap.to(".marquee-track", {
        xPercent: -50, // Move half the width (because of duplication)
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="hidden py-12 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-10">Usado por produtores da</p>

        <div className="relative w-full overflow-hidden mask-fade-sides">
          {/* Wrapper for marquee */}
          <div className="marquee-track flex gap-20 w-max items-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50">
            {DUPLICATED_LOGOS.map((logo, i) => (
              <div
                key={i}
                className="text-2xl font-black text-white/40 hover:text-white transition-colors cursor-default whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#050505] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
