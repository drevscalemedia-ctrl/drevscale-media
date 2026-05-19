"use client";
import { useEffect, useRef } from "react";

const DOT_COUNT = 60;
const MAX_DIST = 140;
const SPEED = 0.4;
const DOT_R = 2.5;
const DOT_COLOR = "29,155,240";
const DOT_ALPHA = 0.45;
const LINE_ALPHA_MAX = 0.18;

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function LightSectionOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let dots: Dot[] = [];
    let raf: number;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      dots = Array.from({ length: DOT_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
      }));
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) { d.vx *= -1; d.x = Math.max(0, Math.min(w, d.x)); }
        if (d.y < 0 || d.y > h) { d.vy *= -1; d.y = Math.max(0, Math.min(h, d.y)); }
      }

      // lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const a = LINE_ALPHA_MAX * (1 - dist / MAX_DIST);
            ctx!.strokeStyle = `rgba(${DOT_COLOR},${a.toFixed(3)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(dots[i].x, dots[i].y);
            ctx!.lineTo(dots[j].x, dots[j].y);
            ctx!.stroke();
          }
        }
      }

      // dots
      ctx!.fillStyle = `rgba(${DOT_COLOR},${DOT_ALPHA})`;
      for (const d of dots) {
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, DOT_R, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    seed();
    tick();

    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => { resize(); seed(); }, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", width: "100%", height: "100%" }}
    />
  );
}
