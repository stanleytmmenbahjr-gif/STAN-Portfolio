import { MdFolderOpen } from 'react-icons/md';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

export function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  const isExternalLink = /^https?:\/\//i.test(link);

  return (
    <a
      href={link}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      className="group block"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0D1326]/90 shadow-[0_0_25px_rgba(0,191,255,0.08)] hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,191,255,0.15)] transition">
        <div className="relative h-40 w-full overflow-hidden bg-slate-900/70">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur-sm">
            Live Demo
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-16 transition-all" />
          <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-400 transition">{title}</h3>
          <p className="mt-2 flex-1 text-sm md:text-sm leading-6 text-slate-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((item) => (
              <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/20 transition">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
}
