"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CTA() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        y: 40,
        autoAlpha: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-32 relative overflow-hidden bg-black flex flex-col items-center justify-center text-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="cta-content container mx-auto px-4 z-10 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Ready to upgrade your workflow?
        </h2>
        <p className="text-xl text-zinc-400 mb-12">Join thousands of producers delivering professional mixes faster.</p>
        <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          Start Free Trial
        </button>
        <p className="mt-6 text-sm text-zinc-600">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
