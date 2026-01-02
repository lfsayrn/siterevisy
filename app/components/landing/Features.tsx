"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const FEATURES = [
  {
    title: "Collaborative by Design",
    body: "Invite clients and guests instantly. No sign-up required for them to leave notes. Keep everyone in sync without the friction.",
    align: "left",
    icon: "👥",
  },
  {
    title: "Version Control, Simplified",
    body: "Keep every mix revision in one stack. Never ask 'is this v3 or v4?' again. Revert or compare with a single click.",
    align: "right",
    icon: "📚",
  },
  {
    title: "Export to DAW",
    body: "Sync comments directly into Reaper. Turn feedback into a structured to-do list inside your session. Pro Tools & Logic coming soon.",
    align: "left",
    icon: "⚡",
  },
];

export default function Features() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Animate each chapter
      gsap.utils.toArray(".feature-chapter").forEach((chapter: any) => {
        const q = gsap.utils.selector(chapter);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: "top 80%",
          },
        });

        tl.from(q(".feat-text"), { y: 30, autoAlpha: 0, duration: 1 }).from(
          q(".feat-visual"),
          { scale: 0.9, autoAlpha: 0, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-32 bg-[#050505] space-y-32 overflow-hidden">
      {FEATURES.map((feat, i) => (
        <div
          key={i}
          className={`feature-chapter container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
            feat.align === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Side */}
          <div className="feat-text flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
              {feat.icon}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{feat.title}</h3>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">{feat.body}</p>
          </div>

          {/* Visual Side */}
          <div className="feat-visual flex-1 w-full">
            <div className="aspect-4/3 bg-linear-to-br from-white/5 to-[#111] rounded-3xl border border-white/5 relative overflow-hidden group">
              {/* Placeholder Visuals */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                {i === 0 && <div className="text-[120px]">👋</div>}
                {i === 1 && <div className="text-[120px]">📑</div>}
                {i === 2 && <div className="text-[120px]">🎹</div>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
