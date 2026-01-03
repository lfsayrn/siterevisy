"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const BASIC_FEATURES = [
  "5 Spaces (EPs/Albums)",
  "Versões ilimitadas por track",
  "Áudio em alta resolução",
  "Notas com timestamp",
  "Links de compartilhamento",
];

const PREMIUM_FEATURES = [
  "Tudo do Basic +",
  "Spaces ilimitados",
  "Colaboração em equipe",
  "Exportação para DAW (Reaper)",
  "Suporte prioritário",
  "Aprovação de versões",
];

export default function Pricing() {
  const container = useRef<HTMLDivElement>(null);
  const [annual, setAnnual] = useState(true);

  useGSAP(
    () => {
      // Set initial state
      gsap.set(".pricing-card", { autoAlpha: 0, y: 40 });

      gsap.to(".pricing-card", {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section id="pricing" ref={container} className="py-32 bg-background overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">
            Preços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Ferramentas profissionais. <br className="hidden md:block" />
            <span className="text-primary">Preços independentes.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Comece grátis por 7 dias. Cancele quando quiser.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Mensal
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-14 h-7 bg-muted rounded-full relative transition-colors hover:bg-muted/80"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-primary rounded-full transition-transform duration-300 ${
                annual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Anual{" "}
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold ml-1">
              -20%
            </span>
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Basic Card */}
          <div className="pricing-card p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-border transition-all duration-300 text-left flex flex-col backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-1">Basic</h3>
              <p className="text-sm text-muted-foreground">Para produtores solo</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">R$ {annual ? "19,90" : "24,90"}</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              {annual && <p className="text-xs text-muted-foreground mt-1">Cobrado anualmente (R$ 238,80/ano)</p>}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {BASIC_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-xl bg-muted text-foreground font-semibold hover:bg-muted/80 transition-colors">
              Começar teste grátis
            </button>
          </div>

          {/* Premium Card */}
          <div className="pricing-card relative p-8 rounded-2xl bg-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 text-left flex flex-col shadow-[0_0_60px_-20px] shadow-primary/20">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                Mais Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-1">Premium</h3>
              <p className="text-sm text-muted-foreground">Para equipes e power users</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">R$ {annual ? "39,90" : "49,90"}</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              {annual && <p className="text-xs text-muted-foreground mt-1">Cobrado anualmente (R$ 478,80/ano)</p>}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {PREMIUM_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Começar teste grátis
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-sm text-muted-foreground">Todos os planos incluem 7 dias de teste grátis.</p>
      </div>
    </section>
  );
}
