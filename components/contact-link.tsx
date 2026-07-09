import React from 'react';

type ContactLinkProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export function ContactLink({ label, href, icon }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full flex flex-col items-center justify-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#0D1326]/90 p-4 sm:p-6 shadow-[0_0_20px_rgba(0,191,255,0.06)] hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(0,191,255,0.12)] hover:bg-cyan-400/5 transition"
    >
      <span className="text-2xl sm:text-3xl group-hover:scale-110 transition">{icon}</span>
      <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400 transition text-center">{label}</h3>
    </a>
  );
}
