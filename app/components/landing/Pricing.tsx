"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Pricing() {
  const container = useRef(null);
  const [annual, setAnnual] = useState(true);

  return (
    <section ref={container} className="py-32 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional tools. Indie prices.</h2>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-zinc-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-14 h-7 bg-white/10 rounded-full relative transition-colors hover:bg-white/20"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                annual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-zinc-500"}`}>
            Yearly <span className="text-primary text-xs">(Save 20%)</span>
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Card */}
          <div className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/5 hover:border-white/10 transition text-left flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
            <p className="text-zinc-400 text-sm mb-6">Essential. For solo producers.</p>
            <div className="text-4xl font-bold text-white mb-8">
              R$ {annual ? "19,90" : "24,90"}
              <span className="text-sm font-normal text-zinc-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-primary">✓</span> 5 Spaces
              </li>
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-primary">✓</span> Unlimited Versions
              </li>
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-primary">✓</span> High-Res Audio
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-white/5 text-white font-bold hover:bg-white/10 transition">
              Start 7-day trial
            </button>
          </div>

          {/* Premium Card */}
          <div className="p-8 rounded-3xl bg-[#161616] border border-primary/20 hover:border-primary/40 transition text-left flex flex-col relative overflow-hidden transform md:scale-105 shadow-2xl">
            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
              POPULAR
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
            <p className="text-zinc-400 text-sm mb-6">Studio. For teams and power users.</p>
            <div className="text-4xl font-bold text-white mb-8">
              R$ {annual ? "39,90" : "49,90"}
              <span className="text-sm font-normal text-zinc-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-primary">✓</span> Unlimited Spaces
              </li>
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-primary">✓</span> Team Collaboration
              </li>
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-primary">✓</span> DAW Export (Reaper)
              </li>
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-primary">✓</span> Priority Support
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-primary text-black font-bold hover:bg-primary transition shadow-[0_0_20px_rgba(255,211,61,0.3)]">
              Start 7-day trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
