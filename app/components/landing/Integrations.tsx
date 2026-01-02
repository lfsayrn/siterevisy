"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Integrations() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Pipeline reveal
      gsap.from(".pipe-node", {
        scale: 0,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Connects with your studio.</h2>
          <p className="text-zinc-400">Seamless integration with your favorite tools.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[2px] bg-linear-to-r from-transparent via-white/20 to-transparent -z-10" />

          {/* Nodes */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            {/* Revisy Node */}
            <div className="pipe-node w-24 h-24 rounded-2xl bg-[#111] border border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(255,211,61,0.2)] z-10">
              <span className="text-2xl font-bold text-white">R</span>
            </div>

            {/* Arrow */}
            <div className="pipe-node text-zinc-600">
              <svg className="w-8 h-8 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Reaper Node (Main) */}
            <div className="pipe-node w-24 h-24 rounded-2xl bg-[#0F0F0F] border border-white/20 flex flex-col items-center justify-center gap-2 z-10">
              <div className="w-8 h-8 bg-zinc-700 rounded-full" /> {/* Placeholder Icon */}
              <span className="text-xs font-bold text-zinc-300">Reaper</span>
            </div>

            {/* Others (Coming Soon) */}
            <div className="pipe-node flex gap-4 opacity-50 grayscale">
              <div className="w-16 h-16 rounded-xl bg-[#0F0F0F] border border-white/10 flex items-center justify-center text-xs text-zinc-500">
                Logic
              </div>
              <div className="w-16 h-16 rounded-xl bg-[#0F0F0F] border border-white/10 flex items-center justify-center text-xs text-zinc-500">
                Pro Tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
