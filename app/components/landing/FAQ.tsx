"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to install anything?",
    a: "No. Revisy runs entirely in your browser. Guests can leave feedback without creating an account.",
  },
  {
    q: "Does it work with my DAW?",
    a: "Yes. You can export notes as a CSV or text file to import into almost any DAW. Direct integration with Reaper is available now.",
  },
  {
    q: "How much storage do I get?",
    a: "Basic plans get 5 active Spaces. Premium plans get unlimited Spaces and versions.",
  },
  {
    q: "Is my audio secure?",
    a: "Yes. We use enterprise-grade encryption for transfer and storage. Your links are private.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Often asked questions</h2>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl bg-[#0A0A0A] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
              >
                <span className="font-medium text-lg text-zinc-200">{faq.q}</span>
                <span
                  className={`text-2xl text-zinc-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
