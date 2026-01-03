"use client";

import { useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const FAQS = [
  {
    q: "Preciso baixar?",
    a: "Não! O Revisy funciona 100% no navegador. Seus clientes podem ouvir e comentar sem criar conta.",
  },
  {
    q: "Funciona com minha DAW?",
    a: "Sim! Você pode exportar as notas como arquivo para importar na maioria das DAWs. Integração direta com Reaper já está disponível.",
  },
  {
    q: "Quanto de armazenamento eu tenho?",
    a: "Plano Basic: 5 Spaces. Plano Premium: Spaces ilimitados com versões ilimitadas.",
  },
  {
    q: "Meu áudio está seguro?",
    a: "Sim! Seus arquivos ficam em servidores seguros e acessível somente pelo link.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim! Sem contrato, sem multa. Cancele a qualquer momento direto na sua conta.",
  },
];

export default function FAQ() {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.set(".faq-item", { autoAlpha: 0, y: 20 });

      gsap.to(".faq-item", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
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
    <section id="faq" ref={container} className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Perguntas frequentes</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="faq-item border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm overflow-hidden hover:border-border transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                <span
                  className={`w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45 bg-primary text-primary-foreground" : ""
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
