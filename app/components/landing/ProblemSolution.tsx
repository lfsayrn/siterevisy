"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ProblemSolution() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      tl.from(".problem-col", { x: -50, autoAlpha: 0, duration: 1 }).from(
        ".solution-col",
        { x: 50, autoAlpha: 0, duration: 1 },
        "-=0.8"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* The Old Way */}
          <div className="problem-col p-8 rounded-3xl bg-[#0F0F0F] border border-white/5 relative group">
            <div className="absolute top-0 right-0 p-4 opacity-5 bg-red-500 blur-3xl rounded-full w-32 h-32 pointer-events-none" />
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
              <span className="text-3xl">✕</span> The Old Way
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-red-900 mt-1 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </span>
                <span className="text-zinc-400">Confusing "Which version is this?" email threads</span>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-red-900 mt-1 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </span>
                <span className="text-zinc-400">Vague "fix the bass at 1:20" WhatsApp texts</span>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-red-900 mt-1 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </span>
                <span className="text-zinc-400">Lost Google Drive links to "Final_Mix_v4_REAL.wav"</span>
              </li>
            </ul>
          </div>

          {/* The Revisy Way */}
          <div className="solution-col p-8 rounded-3xl bg-[#121212] border border-primary/20 relative shadow-[0_0_50px_-20px_rgba(255,211,61,0.2)]">
            <div className="absolute top-0 right-0 p-4 opacity-10 bg-primary blur-3xl rounded-full w-32 h-32 pointer-events-none" />
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="text-3xl">✓</span> The Revisy Way
            </h3>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-white font-medium">One reliable, auto-updated link for everyone</span>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-primary mt-1 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-white font-medium">Frame-accurate comments directly on the waveform</span>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <span className="text-primary mt-1 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-white font-medium">
                  Instant version history, side-by-side comparison & approvals
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
