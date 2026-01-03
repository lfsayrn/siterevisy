"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Security() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".security-content", { autoAlpha: 0, y: 30 });

      gsap.to(".security-content", {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-20 bg-background overflow-hidden relative">
      {/* Subtle line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="security-content max-w-3xl mx-auto text-center">
          {/* Lock Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Sua música protegida</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Quem ouve não consegue baixar. Você controla quem acessa.
            <br className="hidden md:block" />
            Simples assim.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sem downloads
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Acesso controlado
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Revogue quando quiser
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
