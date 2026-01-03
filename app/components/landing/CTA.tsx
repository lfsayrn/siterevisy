"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CTA() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set(".cta-content", { autoAlpha: 0, y: 40 });
      gsap.set(".cta-badge", { autoAlpha: 0, scale: 0.9 });
      gsap.set(".cta-button", { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(".cta-badge", { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" })
        .to(".cta-content", { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .to(".cta-button", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-32 relative overflow-hidden bg-background flex flex-col items-center justify-center text-center"
    >
      {/* Multiple layered background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 z-10 max-w-3xl">
        {/* Badge */}
        <div className="cta-badge mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />7 dias grátis · Cancele quando quiser
          </span>
        </div>

        {/* Main content */}
        <div className="cta-content">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Pronto para{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-yellow-300 to-primary">
              evoluir
            </span>
            <br />
            seu workflow?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Junte-se a produtores que entregam mixagens profissionais{" "}
            <span className="text-foreground font-medium">mais rápido</span>.
          </p>
        </div>

        {/* CTA Button Group */}
        <div className="cta-button mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_60px_rgba(255,211,61,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              Começar Teste Grátis
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-yellow-300 to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          </button>

          <button className="hidden md:inline-block px-8 py-5 bg-white/5 border border-white/10 text-foreground font-medium text-lg rounded-2xl hover:bg-white/10 transition-colors">
            Ver demonstração
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Pagamento seguro
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Setup em 2 minutos
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Suporte humanizado
          </div>
        </div>
      </div>
    </section>
  );
}
