"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".hero-anim", { autoAlpha: 1, y: 0 });
        gsap.set(".hero-mockup", { rotateX: 0, rotateY: 0, rotateZ: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stagger text reveal
      tl.to(".hero-anim", {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.1,
      });

      // Reveal mockup with tilt
      tl.to(
        ".hero-mockup",
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.4,
          ease: "expo.out",
        },
        "-=0.8"
      );

      // Scroll-based straightening animation - target the tilted inner frame
      gsap.to(".tilted-frame", {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "80% top",
          scrub: 0.8,
        },
      });

      // Parallax on floating elements
      gsap.to(".hero-float", {
        y: -60,
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
      className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-purple-900/5 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none -z-10 mix-blend-overlay" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* <div className="hero-anim opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Um novo conceito de revisão de áudio
          </div> */}

          <h1 className="hero-anim opacity-0 text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            O Novo Padrão em <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary">
              Colaboração de Áudio
            </span>
          </h1>

          <p className="hero-anim opacity-0 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chega de caos nas suas produções. Compartilhe áudio em alta fidelidade, receba feedback com timestamp e
            aprove mixagens em tempo real.
          </p>

          <div className="hero-anim opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 active:scale-95 transition-transform duration-200">
              Começar Teste Grátis
            </button>
            <button className="hidden md:flex px-8 py-4 bg-white/5 border border-white/10 text-foreground font-medium rounded-xl hover:bg-white/10 transition-colors items-center gap-2 group">
              <span>Ver demonstração</span>
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

        {/* App Screenshot - Tilted Frame */}
        <div
          ref={mockupRef}
          className="hero-mockup opacity-0 translate-y-16 mt-20 relative w-full max-w-6xl mx-auto"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="tilted-frame relative rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/50 overflow-hidden"
            style={{
              transform: "rotateX(12deg) rotateY(-2deg) rotateZ(1deg) scale(0.95)",
              transformOrigin: "center center",
            }}
          >
            {/* Browser Chrome */}
            <div className="h-10 bg-card border-b border-border flex items-center px-4 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="px-4 py-1 rounded-lg bg-muted text-xs text-muted-foreground font-mono">
                  app.userevisy.com
                </div>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="relative aspect-[16/10] bg-[#101010] flex items-center justify-center">
              {/* Placeholder - Replace with actual screenshot */}
              <div className="text-muted-foreground text-sm flex flex-col items-center gap-3">
                <svg
                  className="w-16 h-16 opacity-30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="opacity-50">Captura do App</span>
              </div>

              <Image
                src="/capturas/principal-2.png"
                alt="Revisy Application Screenshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10 opacity-50" />
        </div>

        {/* Floating Elements (Parallax) */}
        <div className="hero-float absolute top-20 right-10 w-32 h-32 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="hero-float absolute bottom-40 left-10 w-40 h-40 bg-linear-to-br from-primary/15 to-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
