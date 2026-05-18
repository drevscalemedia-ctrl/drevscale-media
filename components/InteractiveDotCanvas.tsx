"use client";
import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  moving: boolean;
}

const SPACING = 34;
const DOT_R = 1.5;
const REPEL_R = 120;
const REPEL_R_SQ = REPEL_R * REPEL_R;
const SPRING = 0.08;
const FRICTION = 0.85;
const PUSH = 2.2;
const REST = 0.005;

export default function InteractiveDotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const s = useRef({
    mx: -9999, my: -9999,
    dots: [] as Dot[],
    raf: 0,
    reduced: false,
    dpr: 1,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const r = s.current;

    r.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    r.dpr = Math.min(window.devicePixelRatio || 1, 2);

    function buildGrid() {
      const w = canvas!.offsetWidth || window.innerWidth;
      const h = canvas!.offsetHeight || window.innerHeight;
      canvas!.width = w * r.dpr;
      canvas!.height = h * r.dpr;
      ctx.setTransform(r.dpr, 0, 0, r.dpr, 0, 0);

      r.dots = [];
      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const hx = col * SPACING;
          const hy = row * SPACING;
          r.dots.push({ x: hx, y: hy, homeX: hx, homeY: hy, vx: 0, vy: 0, moving: false });
        }
      }
    }

    function frame() {
      const w = canvas!.offsetWidth || window.innerWidth;
      const h = canvas!.offsetHeight || window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const dot of r.dots) {
        const dx = dot.x - r.mx;
        const dy = dot.y - r.my;
        const dSq = dx * dx + dy * dy;
        const near = dSq < REPEL_R_SQ;

        if (!r.reduced && (near || dot.moving)) {
          if (near) {
            const dist = Math.sqrt(dSq);
            const t = (REPEL_R - dist) / REPEL_R;
            const force = t * t; // quadratic: edge barely moves, center pushes hard
            const angle = Math.atan2(dy, dx);
            dot.vx += Math.cos(angle) * force * PUSH;
            dot.vy += Math.sin(angle) * force * PUSH;
          }

          dot.vx += (dot.homeX - dot.x) * SPRING;
          dot.vy += (dot.homeY - dot.y) * SPRING;
          dot.vx *= FRICTION;
          dot.vy *= FRICTION;
          dot.x += dot.vx;
          dot.y += dot.vy;

          if (!near && Math.abs(dot.vx) < REST && Math.abs(dot.vy) < REST) {
            dot.x = dot.homeX;
            dot.y = dot.homeY;
            dot.vx = dot.vy = 0;
            dot.moving = false;
          } else {
            dot.moving = true;
          }
        }

        // Color: white base, tint toward #1D9BF0 (29,155,240) when near cursor
        let opacity = 0.5;
        let ri = 255, gi = 255, bi = 255;

        if (!r.reduced && near) {
          const dist = Math.sqrt(dSq);
          const t = 1 - dist / REPEL_R;
          opacity = 0.5 + t * 0.45; // 0.5 → 0.95
          ri = Math.round(255 - t * 0.55 * (255 - 29));
          gi = Math.round(255 - t * 0.55 * (255 - 155));
          bi = Math.round(255 - t * 0.55 * (255 - 240));
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ri},${gi},${bi},${opacity})`;
        ctx.fill();
      }

      r.raf = requestAnimationFrame(frame);
    }

    buildGrid();
    frame();

    const onMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      r.mx = e.clientX - rect.left;
      r.my = e.clientY - rect.top;
      // mark dots near cursor as moving so they wake up
      for (const dot of r.dots) {
        const dx = dot.x - r.mx;
        const dy = dot.y - r.my;
        if (dx * dx + dy * dy < REPEL_R_SQ * 1.5) dot.moving = true;
      }
    };
    const onLeave = () => { r.mx = r.my = -9999; };

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        cancelAnimationFrame(r.raf);
        buildGrid();
        frame();
      }, 100);
    };

    // No interaction on touch-only devices
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch && !r.reduced) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseleave", onLeave, { passive: true });
    }
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(r.raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.25 }}
    />
  );
}
