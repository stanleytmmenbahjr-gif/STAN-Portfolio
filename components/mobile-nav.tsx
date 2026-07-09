"use client";

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="p-2 rounded-md bg-[#0D1326]/60 border border-cyan-400/10 text-cyan-200 hover:bg-[#0D1326]/80 transition"
      >
        <FiMenu size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-cyan-400/10 bg-[#050B1A]/95">
            <div className="text-lg font-semibold text-white">STAN</div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md bg-[#0D1326]/60 border border-cyan-400/10 text-cyan-200">
              <FiX size={20} />
            </button>
          </div>

          <nav className="flex-1 p-6 bg-[#050B1A]/95 space-y-4">
            <a href="#about" onClick={() => setOpen(false)} className="block text-lg font-medium text-white/90 py-3 px-2 rounded-md hover:bg-[#0D1326]/60">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="block text-lg font-medium text-white/90 py-3 px-2 rounded-md hover:bg-[#0D1326]/60">Skills</a>
            <a href="#experience" onClick={() => setOpen(false)} className="block text-lg font-medium text-white/90 py-3 px-2 rounded-md hover:bg-[#0D1326]/60">Experience</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block text-lg font-medium text-white/90 py-3 px-2 rounded-md hover:bg-[#0D1326]/60">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-lg font-medium text-white/90 py-3 px-2 rounded-md hover:bg-[#0D1326]/60">Contact</a>
          </nav>

          <div className="p-4 border-t border-cyan-400/10 bg-[#050B1A]/95">
            <a href="#" className="inline-flex items-center gap-3 rounded-md bg-cyan-400 px-4 py-2 text-slate-950 font-semibold">Get in touch</a>
          </div>
        </div>
      )}
    </div>
  );
}
