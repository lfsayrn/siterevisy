"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const WAVEFORM_DATA = [
  50, 75, 20, 90, 60, 40, 80, 25, 65, 35, 95, 45, 70, 30, 85, 55, 100, 20, 80, 40, 60, 30, 90, 50, 70, 25, 85, 35, 75,
  45, 95, 20, 65, 40, 80, 55, 30, 90, 60, 25, 70, 45, 85, 35, 75, 50, 95, 20, 65, 40, 80, 30, 60, 25, 90, 45, 70, 35,
  85, 50,
];

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".hero-anim", { autoAlpha: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stagger text reveal - using .to() because we start with opacity-0 in CSS
      tl.to(".hero-anim", {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.1,
      });

      // Reveal mock player
      tl.to(
        ".hero-mock",
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
        },
        "-=0.8"
      );

      // Expand waveform mask
      tl.to(
        ".waveform-mask",
        {
          scaleX: 1,
          duration: 1.8,
          ease: "expo.inOut",
        },
        "-=1.2"
      );

      // Parallax on scroll
      gsap.to(".hero-float", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background - Subtle Gradient & Grain */}
      <div className="absolute inset-0 bg-[#050505] -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-purple-900/5 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none -z-10 mix-blend-overlay" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="hero-anim opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Audio Review Reinvented
          </div>

          <h1 className="hero-anim opacity-0 text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            The New Standard for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary">
              Audio Collaboration
            </span>
          </h1>

          <p className="hero-anim opacity-0 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Stop the email chaos. Share high-fidelity audio, get timestamped feedback, and approve mixes in real-time.
          </p>

          <div className="hero-anim opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 active:scale-95 transition-transform duration-200">
              Start Free Trial
            </button>
            <button
              ref={playRef}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 group"
            >
              <span>See live demo</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Mockup */}
        <div className="hero-mock opacity-0 translate-y-12 scale-95 mt-20 relative w-full max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-black/50 overflow-hidden aspect-video md:aspect-21/9 ring-1 ring-white/5">
            {/* Top Bar - DAW Style */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#111] border-b border-white/5 flex items-center justify-between px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 mix-blend-screen" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 mix-blend-screen" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 mix-blend-screen" />
              </div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Revisy Player v2.0</div>
            </div>

            {/* Main Area */}
            <div className="absolute inset-x-0 bottom-0 top-10 flex items-center justify-center p-8 bg-[url('/noise.png')] bg-opacity-[0.02]">
              <div className="w-full flex items-center gap-6">
                {/* Play Button */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,211,61,0.3)] hover:scale-105 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Waveform Container */}
                <div className="flex-1 h-32 bg-[#1a1a1a] rounded-xl border border-white/5 relative overflow-hidden flex items-center px-6 gap-[3px]">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-[1px] h-full bg-white" />
                    ))}
                  </div>

                  {/* Waveform graphic - High Fidelity - Tighter bars */}
                  <div className="absolute inset-0 flex items-center gap-[3px] px-6">
                    {WAVEFORM_DATA.map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-zinc-700/50 rounded-full transition-all duration-300 group-hover:bg-zinc-600"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>

                  {/* Progress Waveform (Amber) */}
                  <div className="waveform-mask absolute inset-0 flex items-center gap-[3px] px-6 overflow-hidden w-[30%] border-r border-primary/50 bg-primary/5">
                    {WAVEFORM_DATA.map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary rounded-full shadow-[0_0_10px_rgba(255,211,61,0.5)]"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>

                  {/* Time */}
                  <div className="absolute top-2 right-4 font-mono text-xs text-primary">01:24:12</div>
                  <div className="absolute bottom-2 left-4 font-mono text-xs text-zinc-600">Master_Final_v3.wav</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements (Parallax) */}
          <div className="hero-float absolute -top-8 -right-8 w-24 h-24 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
          <div className="hero-float absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-3xl delay-75" />
        </div>
      </div>
    </section>
  );
}
