type ExperienceCardProps = {
  role: string;
  company: string;
  highlights: string[];
};

export function ExperienceCard({ role, company, highlights }: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-cyan-400/20 bg-[#0D1326]/90 p-6 shadow-[0_0_25px_rgba(0,191,255,0.08)] hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,191,255,0.15)] transition">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white hover:text-cyan-400 transition">{role}</h3>
          <p className="text-sm text-cyan-300">{company}</p>
        </div>
        {/* period removed per request */}
      </div>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
