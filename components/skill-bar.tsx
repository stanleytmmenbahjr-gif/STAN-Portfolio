type SkillBarProps = {
  label: string;
  level: number;
};

export function SkillBar({ label, level }: SkillBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
        <span>{label}</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-800">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
