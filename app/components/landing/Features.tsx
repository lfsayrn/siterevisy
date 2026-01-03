"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const FEATURES = [
  {
    title: "Colaboração Nativa",
    body: "Convide clientes e colaboradores instantaneamente. Sem cadastro para deixar notas. Mantenha todos sincronizados sem atrito.",
    align: "left",
    icon: "👥",
    imageUrl: "/capturas/invites.webp",
  },
  {
    title: "Controle de Versões Simplificado",
    body: "Mantenha todas as revisões de mix em um só lugar. Nunca mais pergunte 'é a v3 ou v4?'. Reverta ou compare com um clique.",
    align: "right",
    icon: "📚",
    imageUrl: "/capturas/versao.webp",
  },
  {
    title: "Exportar para DAW",
    body: "Sincronize comentários diretamente no Reaper. Transforme feedback em uma lista de tarefas estruturada na sua sessão. Pro Tools e Logic em breve.",
    align: "left",
    icon: "⚡",
    imageUrl: "/capturas/exportar.webp",
  },
];

export default function Features() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Animate each chapter
      gsap.utils.toArray(".feature-chapter").forEach((chapter: any) => {
        const q = gsap.utils.selector(chapter);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.from(q(".feat-text"), { y: 30, autoAlpha: 0, duration: 1 }).from(
          q(".feat-visual"),
          { scale: 0.9, autoAlpha: 0, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );
      });
    },
    { scope: container }
  );

  return (
    <section id="features" ref={container} className="py-32 bg-[#050505] space-y-32 overflow-hidden">
      {FEATURES.map((feat, i) => (
        <div
          key={i}
          className={`feature-chapter container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
            feat.align === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Side */}
          <div className="feat-text flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
              {feat.icon}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{feat.title}</h3>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">{feat.body}</p>
          </div>

          {/* Visual Side */}
          <div className="feat-visual flex-1 w-full">
            <div className="aspect-4/3 bg-linear-to-br from-white/5 to-[#111] rounded-3xl border border-white/5 relative overflow-hidden group">
              {/* Feature Image */}
              <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity">
                <Image src={feat.imageUrl} alt={feat.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
