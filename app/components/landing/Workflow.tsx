"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const STEPS = [
  {
    title: "Upload",
    desc: "Arraste e solte seus arquivos de áudio em alta resolução. Suportamos WAV, AIFF, FLAC e mais.",
    icon: "↑",
  },
  {
    title: "Compartilhe",
    desc: "Gere um link seguro e envie para seus clientes. Sem necessidade deles criarem uma conta.",
    icon: "→",
  },
  {
    title: "Revise",
    desc: "Eles clicam, ouvem e deixam comentários com timestamp diretamente na waveform.",
    icon: "💬",
  },
  {
    title: "Ajuste",
    desc: "Exporte as notas para sua DAW, altere e suba a nova versão.",
    icon: "🔄",
  },
  {
    title: "Aprove",
    desc: "Cliente aprova com um clique. Todos são notificados. Pronto.",
    icon: "✓",
  },
];

export default function Workflow() {
  const container = useRef<HTMLDivElement>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useGSAP(
    () => {
      // Line fill animation
      gsap.fromTo(
        ".workflow-line-fill",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".workflow-list",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Step active state and completion tracking
      gsap.utils.toArray(".workflow-step").forEach((step: any, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          toggleClass: "active-step",
          onEnter: () => {
            setCompletedSteps((prev) => (prev.includes(i) ? prev : [...prev, i]));
          },
          onLeaveBack: () => {
            setCompletedSteps((prev) => prev.filter((s) => s !== i));
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">
            Como funciona
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Do primeiro bounce ao master final.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Um fluxo de trabalho otimizado que mantém todos sincronizados.
          </p>
        </div>

        <div className="workflow-list max-w-3xl mx-auto relative">
          {/* Vertical Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Vertical Line Fill (Scrubbed) */}
          <div className="workflow-line-fill absolute left-6 md:left-1/2 top-0 w-0.5 bg-primary -translate-x-1/2 z-10 origin-top" />

          {STEPS.map((step, i) => {
            const isCompleted = completedSteps.includes(i);
            const isEven = i % 2 === 0;

            return (
              <div key={i} className="workflow-step group relative py-10 md:grid md:grid-cols-2 md:gap-16 items-center">
                {/* Dot */}
                <div
                  className={`
                    absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 
                    w-12 h-12 rounded-full z-20 
                    flex items-center justify-center
                    transition-all duration-500 ease-out
                    border-2
                    ${
                      isCompleted
                        ? "bg-primary border-primary text-primary-foreground scale-100"
                        : "bg-card border-border text-muted-foreground scale-90 group-[.active-step]:scale-110 group-[.active-step]:border-primary group-[.active-step]:bg-primary group-[.active-step]:text-primary-foreground"
                    }
                  `}
                >
                  <span className="text-lg font-bold">{step.icon}</span>
                </div>

                {/* Content */}
                <div
                  className={`
                    transition-all duration-500 
                    pl-20 md:pl-0
                    ${isCompleted ? "opacity-100" : "opacity-40 group-[.active-step]:opacity-100"}
                    ${isEven ? "md:text-right md:pr-12" : "md:col-start-2 md:text-left md:pl-12"}
                  `}
                >
                  <div className={`inline-flex items-center gap-2 mb-2 ${isEven ? "md:flex-row-reverse" : ""}`}>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isCompleted ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      Passo {i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>

                {/* Empty spacer for grid */}
                <div className={isEven ? "md:order-2 hidden md:block" : "md:order-1 hidden md:block"} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
