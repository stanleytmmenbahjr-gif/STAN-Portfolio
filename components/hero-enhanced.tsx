"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SiReact, SiNextdotjs, SiTailwindcss, SiHtml5 } from 'react-icons/si';

export function HeroEnhanced() {
  const [revealed, setRevealed] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onMove(e: MouseEvent) {
      const current = el;
      if (!current) return;
      const rect = current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setPointer({ x, y });
    }
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', () => setPointer({ x: 0, y: 0 }));
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  const profileTransform = {
    transform: `translate3d(${pointer.x * 10}px, ${pointer.y * 8}px, 0)`,
  };

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div ref={containerRef} className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className={`space-y-8 stagger-parent ${revealed ? 'revealed' : ''}`}>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">STAN</h1>
              <h2 className="text-2xl sm:text-3xl text-cyan-400 font-semibold">Stanley T. M. Menbah Jr.</h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white/90 font-semibold">Full Stack Developer</p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">Hi, I'm Stanley. An aspiring Frontend and Backend Developer passionate about building responsive, modern websites and web applications that solve real-world problems.</p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">I am also a Cybersecurity student, Graphic Designer, Photographer, Peer Educator, and Church Media Director.</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="magnetic-btn inline-flex items-center px-6 py-3 bg-cyan-400 text-slate-950 font-semibold rounded-lg hover:bg-cyan-300 transition neon-glow">
                View My Work
              </a>
              <a href="#" className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition">
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-cyan-400 flex items-center justify-center neon-glow grayscale-hover" style={profileTransform}>
              <Image src="/profile.jpeg" alt="Stanley T. M. Menbah Jr." fill className="object-cover" priority sizes="(max-width: 768px) 200px, 288px" />
            </div>

            {/* Floating tech icons */}
            <div className="absolute -right-6 top-12 pointer-events-none">
              <div className="floating-icon" style={{ right: '-8px' }}>
                <SiReact size={28} className="text-cyan-300" />
              </div>
              <div className="floating-icon" style={{ right: '28px', top: '40px', animationDelay: '0.6s' }}>
                <SiNextdotjs size={24} className="text-white/80" />
              </div>
              <div className="floating-icon" style={{ right: '-4px', top: '92px', animationDelay: '1s' }}>
                <SiTailwindcss size={22} className="text-cyan-200" />
              </div>
              <div className="floating-icon" style={{ right: '56px', top: '8px', animationDelay: '1.4s' }}>
                <SiHtml5 size={20} className="text-orange-400/90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
