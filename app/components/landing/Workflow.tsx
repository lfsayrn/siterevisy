"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const STEPS = [
  {
    title: "Upload",
    desc: "Drag & drop your high-res audio files. We support WAV, AIFF, FLAC, and more.",
    icon: "↑",
  },
  {
    title: "Share",
    desc: "Generate a secure link and send it to your client. No account needed for them.",
    icon: "→",
  },
  {
    title: "Review",
    desc: "They click, listen, and leave timestamped comments directly on the waveform.",
    icon: "💬",
  },
  {
    title: "Revise",
    desc: "Export notes to your DAW, make changes, and upload the new version.",
    icon: "🔄",
  },
  {
    title: "Approve",
    desc: "Client signs off with one click. Everyone gets notified. Done.",
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
            How it works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            From first bounce to final master.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A streamlined workflow that keeps everyone in sync.
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
                      Step {i + 1}
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
