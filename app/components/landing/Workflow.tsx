"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const STEPS = [
  { title: "Upload", desc: "Drag & drop your high-res audio." },
  { title: "Share", desc: "Send a secure link to your client." },
  { title: "Review", desc: "They click and comment. No login needed." },
  { title: "Revise", desc: "See notes in your DAW, export new version." },
  { title: "Approve", desc: "Client signs off. Done." },
];

export default function Workflow() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Line fill
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

      // Step active state
      gsap.utils.toArray(".workflow-step").forEach((step: any, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          toggleClass: "active-step",
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-32 bg-[#080808] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">From first bounce to final master.</h2>
        </div>

        <div className="workflow-list max-w-2xl mx-auto relative pl-12 md:pl-0">
          {/* Vertical Line Background */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          {/* Vertical Line Fill (Scrubbed) */}
          <div className="workflow-line-fill absolute left-[19px] md:left-1/2 top-0 w-[2px] bg-primary -translate-x-1/2 z-10 origin-top" />

          {STEPS.map((step, i) => (
            <div key={i} className="workflow-step group relative py-12 md:grid md:grid-cols-2 md:gap-12 items-center">
              {/* Dot */}
              <div className="absolute left-[19px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#111] border-2 border-white/20 z-20 transition-all duration-300 group-[.active-step]:border-primary group-[.active-step]:bg-primary group-[.active-step]:scale-150" />

              {/* Left Side (Even items) / Right Side (Odd items) Logic for Text */}
              <div
                className={`
                        transition-opacity duration-500 group-[.active-step]:opacity-100 opacity-30
                        md:text-right pl-12 md:pl-0 md:pr-0
                        ${i % 2 === 0 ? "md:order-1" : "md:order-2 md:col-start-2 text-left pl-12"}
                    `}
              >
                <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>

              {/* Empty visual side */}
              <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
