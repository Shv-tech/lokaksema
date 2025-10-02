// src/components/effects/ParticleMesh.tsx
"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleMesh({
  className = "fixed inset-0 -z-40 pointer-events-none",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const DPR = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      // ensure we have a size even if the element is display:none for a moment
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
    };

    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number };
    const N = 80;
    const ps: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3 * DPR,
      vy: (Math.random() - 0.5) * 0.3 * DPR,
    }));

    const maxDist = 160 * DPR;
    const maxDist2 = maxDist * maxDist;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // move
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        if (!p) continue; // <-- guard for noUncheckedIndexedAccess
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // lines
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i];
        if (!a) continue; // <-- guard

        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j];
          if (!b) continue; // <-- guard

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < maxDist2) {
            const alpha = 1 - d2 / maxDist2;
            ctx.strokeStyle = `rgba(124,58,237,${0.15 * alpha})`; // purple-ish
            ctx.lineWidth = DPR;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.fillStyle = "rgba(219,39,119,0.35)"; // pink-ish
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        if (!p) continue; // <-- guard
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6 * DPR, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden
    />
  );
}
