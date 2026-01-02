"use client";

import { useMemo, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type NoteMock = {
  id: string;
  time: string;
  timeSeconds: number;
  author: string;
  ago: string;
  text: string;
  avatar: string;
};

const DURATION_SECONDS = 202; // 3:22

function fmtMMSS(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function DemoPinned() {
  const container = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const [notesCount, setNotesCount] = useState(1);
  const [showAB, setShowAB] = useState(false);
  const [waveformProgress, setWaveformProgress] = useState(0);

  const notes: NoteMock[] = useMemo(
    () => [
      {
        id: "n1",
        time: "1:18",
        timeSeconds: 78,
        author: "Guilherme Couto",
        ago: "há 7 horas",
        text: "Diminuiu o 808 aqui",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: "n2",
        time: "1:32",
        timeSeconds: 92,
        author: "Camila Nunes",
        ago: "há 53 min",
        text: "Vocal tá sibilando um pouco — tenta um de-esser leve (7–9k) e reavalia.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: "n3",
        time: "1:58",
        timeSeconds: 118,
        author: "Rafa Monteiro",
        ago: "há 40 min",
        text: "Kick e baixo estão brigando no refrão. Um sidechain mais curto + HPF no reverb deve limpar.",
        avatar: "https://randomuser.me/api/portraits/men/58.jpg",
      },
    ],
    []
  );

  // Waveform mais denso e "wavy" como no print
  const waveform = useMemo(() => {
    const n = 280;
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
      const t = i / n;
      // Combinação de ondas para parecer áudio real
      const wave1 = Math.sin(t * Math.PI * 8) * 0.3;
      const wave2 = Math.sin(t * Math.PI * 24 + 1.2) * 0.2;
      const wave3 = Math.sin(t * Math.PI * 48 + 2.4) * 0.15;
      const noise = Math.sin(i * 0.7) * Math.sin(i * 1.3) * 0.25;
      const base = 0.4 + wave1 + wave2 + wave3 + noise;
      arr.push(Math.max(0.1, Math.min(1, base)));
    }
    return arr;
  }, []);

  useGSAP(
    () => {
      // Initial states
      gsap.set(".note-card", { autoAlpha: 0, y: 20 });
      gsap.set(".wf-marker", { autoAlpha: 0, scale: 0.8 });
      gsap.set(".ab-overlay", { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(".ab-modal", { autoAlpha: 0, scale: 0.95, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2800",
          scrub: 1,
          pin: wrapper.current,
          onUpdate: (self) => {
            const p = self.progress;
            // Waveform progress (0 to 62% based on scroll)
            setWaveformProgress(Math.min(p * 100, 65));

            // Notes count based on scroll
            if (p < 0.25) setNotesCount(1);
            else if (p < 0.45) setNotesCount(2);
            else setNotesCount(3);

            // Show A/B modal near end
            setShowAB(p > 0.75);
          },
        },
      });

      // ACT 1 — First note appears with marker
      tl.to(".note-1", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "+=1.0").to(
        ".wf-marker-1",
        { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)" },
        "<+0.2"
      );

      // ACT 2 — Second note
      tl.to(".note-2", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "+=0.5").to(
        ".wf-marker-2",
        { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)" },
        "<+0.2"
      );

      // ACT 3 — Third note
      tl.to(".note-3", { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "+=0.5").to(
        ".wf-marker-3",
        { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)" },
        "<+0.2"
      );

      // ACT 5 — A/B Modal opens
      tl.to(".ab-overlay", { autoAlpha: 1, pointerEvents: "auto", duration: 0.5, ease: "power2.out" }, "+=0.4").to(
        ".ab-modal",
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: "expo.out" },
        "<+0.1"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative bg-[#0a0512] text-white">
      <div ref={wrapper} className="h-screen w-full flex items-center justify-center">
        {/* Main frame */}
        <div className="relative w-[94%] max-w-[1400px] h-[88vh] mt-15 rounded-xl border border-white/10 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,.7)]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-[#0c0716]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,80,200,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,160,60,0.08),transparent_50%)]" />

          <div className="relative h-full flex flex-col px-8 py-6">
            {/* Header Row */}
            <div className="flex items-center justify-between">
              {/* Left: Notas header */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-white/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-white/90">Notas</span>
                  <span className="text-sm text-white/40">{notesCount}</span>
                </div>
              </div>

              {/* Right: Toolbar */}
              <div className="flex items-center gap-3">
                {/* Filter pills */}
                <div className="flex items-center gap-0.5 rounded-lg bg-white/5 border border-white/10 p-0.5">
                  <button className="px-3 py-1.5 rounded-md bg-white/10 text-[11px] font-medium text-white/90 border border-white/10">
                    Todos
                  </button>
                  <button className="px-3 py-1.5 rounded-md text-[11px] text-white/50 hover:bg-white/5 transition">
                    Notas
                  </button>
                  <button className="px-3 py-1.5 rounded-md text-[11px] text-white/50 hover:bg-white/5 transition">
                    Enquetes
                  </button>
                </div>

                {/* Mic button */}
                <button className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-white/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </button>

                {/* Add note button */}
                <button className="px-3 py-1.5 rounded-lg bg-[#ffd33d] text-black text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-sm">+</span>
                  1:18
                </button>

                {/* Poll button */}
                <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                  </svg>
                  Enquete
                </button>
              </div>
            </div>

            {/* Notes Area */}
            <div className="flex-1 mt-6 pt-2">
              <div className="space-y-5">
                {notes.map((note, idx) => (
                  <NoteCard key={note.id} note={note} className={`note-card note-${idx + 1}`} />
                ))}
              </div>
            </div>

            {/* Teste A/B Label */}
            <div className="mt-4 mb-2 flex items-center gap-2 text-xs text-white/50">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
              </svg>
              <span>Teste A/B</span>
            </div>

            {/* Waveform */}
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="relative h-24 px-5 py-4">
                {/* Base waveform (gray/white) */}
                <div className="absolute inset-x-5 top-4 bottom-4 flex items-center gap-[1px]">
                  {waveform.map((v, i) => (
                    <div
                      key={`base-${i}`}
                      className="flex-1 rounded-sm bg-white/50"
                      style={{ height: `${Math.round(v * 90)}%` }}
                    />
                  ))}
                </div>

                {/* Progress overlay (yellow) - identical structure to base */}
                <div
                  className="wf-progress absolute left-5 right-5 top-4 bottom-4 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - waveformProgress}% 0 0)` }}
                >
                  <div className="absolute inset-0 flex items-center gap-px">
                    {waveform.map((v, i) => (
                      <div
                        key={`prog-${i}`}
                        className="flex-1 rounded-sm bg-[#ffd33d]"
                        style={{ height: `${Math.round(v * 90)}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Markers (avatars on waveform) */}
                <div className="absolute inset-0 pointer-events-none">
                  {notes.map((note, idx) => {
                    const leftPercent = (note.timeSeconds / DURATION_SECONDS) * 100;
                    return (
                      <div
                        key={note.id}
                        className={`wf-marker wf-marker-${idx + 1} absolute`}
                        style={{
                          left: `${leftPercent}%`,
                          bottom: "8px",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <div className="h-7 w-7 rounded-full overflow-hidden border-2 border-[#0c0716] shadow-lg">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={note.avatar} alt={note.author} className="h-full w-full object-cover" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Player Footer */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 flex items-center justify-between">
              {/* Left: Track info */}
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/85">1767379217_sample2.mp3</div>
                  <div className="text-xs text-white/40 font-mono">1:18 / 3:22</div>
                </div>
              </div>

              {/* Center: Transport controls */}
              <div className="flex items-center gap-3">
                <button className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 20L9 12l10-8v16zM7 19V5H5v14h2z" />
                  </svg>
                </button>
                <button className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/10 transition">
                  <svg className="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <button className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 4l10 8-10 8V4zm12 0h2v16h-2V4z" />
                  </svg>
                </button>
              </div>

              {/* Right: Volume */}
              <div className="flex items-center gap-3">
                <button className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                </button>
                <div className="w-32 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                  <div className="h-full w-[65%] bg-white/60 rounded-full" />
                  <div className="absolute right-[35%] top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow" />
                </div>
              </div>
            </div>

            {/* A/B Modal Overlay */}
            <div className="ab-overlay absolute inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <div className="ab-modal relative w-[90%] max-w-[900px] rounded-2xl border border-white/10 bg-[#0c0716] shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="px-7 py-6 border-b border-white/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg font-semibold">Comparação A/B</div>
                      <div className="mt-1 text-sm text-white/50">Selecione as versões para comparar visualmente.</div>
                    </div>
                    <button className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  {/* Version selectors */}
                  <div className="mt-5 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-[11px] text-white/40 uppercase tracking-wider mb-2">Versão A (Topo)</div>
                      <div className="h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                        <span className="text-sm text-white/75">v1 — sample2.mp3</span>
                        <svg
                          className="w-4 h-4 text-white/40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-white/40 uppercase tracking-wider mb-2">Versão B (Baixo)</div>
                      <div className="h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                        <span className="text-sm text-white/75">v2 — sample1.mp3</span>
                        <svg
                          className="w-4 h-4 text-white/40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Waveform comparison */}
                <div className="px-7 py-6">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    {/* Track A */}
                    <div className="px-5 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 rounded-md bg-[#ffd33d] text-black text-xs font-bold">V1</span>
                          <span className="text-sm text-white/80">sample2.mp3</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-[#ffd33d]">
                          <span className="h-2 w-2 rounded-full bg-[#ffd33d]" />
                          OUVINDO
                        </div>
                      </div>
                      <div className="h-16 flex items-center gap-px">
                        {waveform.slice(0, 200).map((v, i) => (
                          <div
                            key={`ab1-${i}`}
                            className="flex-1 rounded-full bg-white/80"
                            style={{ height: `${Math.round(v * 80)}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Track B */}
                    <div className="px-5 py-4 border-t border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 rounded-md bg-white/10 text-white/50 text-xs font-bold">V2</span>
                        <span className="text-sm text-white/50">sample1.mp3</span>
                      </div>
                      <div className="h-16 flex items-center gap-px opacity-40">
                        {waveform.slice(0, 200).map((v, i) => (
                          <div
                            key={`ab2-${i}`}
                            className="flex-1 rounded-full bg-white/60"
                            style={{ height: `${Math.round(v * 80)}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="h-12 w-12 rounded-full bg-[#ffd33d] text-black flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                        <span className="text-xs text-white/50 font-mono">0:00 / 3:22</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 text-white/50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                        <div className="w-36 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                          <div className="h-full w-[70%] bg-[#ffd33d] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-xs text-white/35">
                      Dica: Pressione espaço para tocar/pausar. Clique na faixa para solar.
                    </div>
                    <button className="px-6 py-3 rounded-xl bg-[#ffd33d] text-black font-semibold text-sm">
                      Fechar Comparação
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Note Card matching the reference image exactly */
function NoteCard({ note, className = "" }: { note: NoteMock; className?: string }) {
  return (
    <div className={`relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-visible ${className}`}>
      {/* Time badge (yellow pill on top) */}
      <div className="absolute left-4 -top-2.5 z-10">
        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#ffd33d] text-black text-xs font-semibold shadow-lg">
          <span className="h-4 w-4 rounded-full bg-black/15 flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          {note.time}
        </div>
      </div>

      <div className="px-4 pt-5 pb-3">
        <div className="flex items-start justify-between">
          {/* Left: Avatar + content */}
          <div className="flex items-start gap-3 min-w-0">
            <div className="h-9 w-9 rounded-full overflow-hidden border border-white/10 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={note.avatar} alt={note.author} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-white/90">{note.author}</span>
                <span className="text-[10px] text-white/40">{note.ago}</span>
              </div>
              <div className="mt-0.5 text-xs text-white/70 leading-relaxed">{note.text}</div>
            </div>
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center gap-1.5 ml-3">
            <button className="h-7 w-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
            <button className="h-7 w-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="6" cy="12" r="1.5" />
                <circle cx="18" cy="12" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-white/35">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Sem respostas
          </div>
          <button className="text-xs text-white/70 hover:text-white/90 transition">Responder</button>
        </div>
      </div>
    </div>
  );
}
