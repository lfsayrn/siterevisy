"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const INTEGRATIONS = [
  {
    name: "Reaper",
    logo: "/reaper-logo.png",
    available: true,
    description: "Export notes as markers",
  },
  {
    name: "Logic Pro",
    logo: "/logic-pro.png",
    available: false,
    description: "Coming Q2 2025",
  },
  {
    name: "Pro Tools",
    logo: "/pro-tools.png",
    available: false,
    description: "Coming Q3 2025",
  },
  {
    name: "Ableton",
    logo: "/ableton.png",
    available: false,
    description: "Coming Q4 2025",
  },
];

export default function Integrations() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Main card reveal
      gsap.from(".main-integration", {
        scale: 0.9,
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      // DAW cards stagger
      gsap.from(".daw-card", {
        scale: 0.8,
        autoAlpha: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".daw-grid",
          start: "top 80%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-32 bg-background overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Connects with your studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Export your notes directly to your DAW. Work faster, stay in flow.
          </p>
        </div>

        {/* Main Integration Card */}
        <div className="main-integration max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-card/50 backdrop-blur-sm overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              {/* Revisy to Reaper flow */}
              <div className="flex items-center gap-6 flex-1">
                {/* Revisy */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(255,211,61,0.4)]">
                    <Image src="/icon.png" alt="Revisy" width={30} height={30} className="object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Revisy</span>
                </div>

                {/* Connection */}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-muted rounded-full" />
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground bg-card px-2 py-1 rounded-full border border-border">
                      Export
                    </span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-muted via-primary/50 to-primary rounded-full" />
                </div>

                {/* Reaper */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-card border-2 border-border flex items-center justify-center shadow-lg">
                    <Image src="/reaper-logo.png" alt="Reaper" width={48} height={48} className="object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Reaper</span>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available Now
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">One-click marker export</h3>
                <p className="text-muted-foreground">
                  All your timestamped notes become Reaper markers. Open your project and jump to each feedback point
                  instantly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other DAWs */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">More integrations coming</h3>
          <p className="text-sm text-muted-foreground">We're working on support for your favorite DAWs</p>
        </div>

        <div className="daw-grid grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {INTEGRATIONS.filter((i) => !i.available).map((daw) => (
            <div
              key={daw.name}
              className="daw-card group relative p-4 rounded-xl bg-card/50 border border-border/50 hover:border-border transition-colors text-center"
            >
              <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-muted flex items-center justify-center overflow-hidden grayscale opacity-60 group-hover:opacity-80 transition-opacity">
                <Image src={daw.logo} alt={daw.name} width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{daw.name}</span>
              <div className="text-[10px] text-muted-foreground/60 mt-1">{daw.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
