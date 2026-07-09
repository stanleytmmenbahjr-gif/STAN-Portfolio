"use client";

import React, { useMemo } from 'react';

type Particle = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function FloatingParticles({ count = 24 }: { count?: number }) {
  const particles: Particle[] = useMemo(() => {
    const arr: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const seed = (i + 1) * 37;
      const size = 8 + ((seed * 7) % 57);
      const left = ((seed * 13) % 1000) / 10;
      const top = ((seed * 19) % 1000) / 10;
      const duration = 10 + ((seed * 3) % 180) / 10;
      const delay = ((seed * 5) % 800) / 100;
      const opacity = 0.2 + (((seed * 11) % 70) / 100);

      arr.push({
        left: `${left}%`,
        top: `${top}%`,
        size,
        duration,
        delay,
        opacity,
      });
    }

    return arr;
  }, [count]);

  return (
    <div className="particles" aria-hidden>
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
