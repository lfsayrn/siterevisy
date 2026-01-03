"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ProblemSolution() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Initial states
      gsap.set(".prob-item", { autoAlpha: 0, x: -30 });
      gsap.set(".sol-item", { autoAlpha: 0, x: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      // Animate header
      tl.from(".section-header", { y: 30, autoAlpha: 0, duration: 0.8 });

      // Stagger problem items
      tl.to(".prob-item", { autoAlpha: 1, x: 0, stagger: 0.15, duration: 0.6 }, "-=0.4");

      // Stagger solution items
      tl.to(".sol-item", { autoAlpha: 1, x: 0, stagger: 0.15, duration: 0.6 }, "-=0.6");
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-32 bg-background overflow-hidden relative z-30">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-destructive/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="section-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">
            Por que Revisy?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            A diferença é <span className="text-primary">inegável</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* The Old Way */}
          <div className="group relative">
            {/* Card */}
            <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-destructive/10 hover:border-destructive/20 transition-colors duration-300">
              {/* Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-destructive"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Padrão atual</h3>
              </div>

              {/* Items */}
              <ul className="space-y-5">
                <li className="prob-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-destructive" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Emails intermináveis.</p>
                    <p className="text-sm text-muted-foreground mt-0.5">"Qual versão é essa? v4 ou v4_FINAL?"</p>
                  </div>
                </li>
                <li className="prob-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-destructive" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Feedbacks vagos.</p>
                    <p className="text-sm text-muted-foreground mt-0.5">"Ajusta o grave por volta de 1:20"</p>
                  </div>
                </li>
                <li className="prob-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-destructive" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Arquivos perdidos.</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Links do WeTransfer expirados e pastas enterradas no Drive.
                    </p>
                  </div>
                </li>
                <li className="prob-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-destructive" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Processo de aprovação complexo.</p>
                    <p className="text-sm text-muted-foreground mt-0.5">"O cliente aprovou? Olha na thread..."</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* The Revisy Way */}
          <div className="group relative">
            {/* Card */}
            <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/30 transition-colors duration-300 shadow-[0_0_60px_-30px] shadow-primary/20">
              {/* Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Padrão Revisy</h3>
                <span className="ml-auto px-2 py-0.5 rounded-md bg-primary/20 text-primary text-xs font-semibold">
                  Melhor
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-5">
                <li className="sol-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Link único, sempre atualizado.</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Compartilhe uma vez e todos terão acesso a versão mais recente.
                    </p>
                  </div>
                </li>
                <li className="sol-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Comentários precisos.</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Clique na waveform, deixe um feedback preciso.
                    </p>
                  </div>
                </li>
                <li className="sol-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Histórico de versões integrado.</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Compare duas versões lado a lado instantaneamente.
                    </p>
                  </div>
                </li>
                <li className="sol-item flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-foreground font-medium">Fluxo de aprovação claro</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Um clique para aprovar, todos são notificados.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
