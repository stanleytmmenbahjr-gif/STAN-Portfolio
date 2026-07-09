import React from 'react';

type SkillWithIconProps = {
  label: string;
  level: number;
  icon: React.ReactNode;
};

export function SkillWithIcon({ label, level, icon }: SkillWithIconProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-lg flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="mb-1 flex items-center justify-between text-sm">
          <span className="text-white/90 font-medium">{label}</span>
        </div>
        <div className="h-2 rounded-full bg-slate-800/50 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
}
