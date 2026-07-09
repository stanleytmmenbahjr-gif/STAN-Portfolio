import { SectionHeading } from '@/components/section-heading';
import { SkillWithIcon } from '@/components/skill-with-icon';
import { ContactForm } from '@/components/contact-form';
import { ContactLink } from '@/components/contact-link';
import { ExperienceCard } from '@/components/experience-card';
import { ProjectCard } from '@/components/project-card';
import type {
  CertificationItem,
  ContactLinkItem,
  EducationItem,
  ExperienceItem,
  GraphicsItem,
  ProjectItem,
  SkillItem,
} from '@/data/site-content';

type SkillsSectionProps = {
  title: string;
  items: SkillItem[];
};

export function SkillGroupSection({ title, items }: SkillsSectionProps) {
  return (
    <div className="glass rounded-2xl p-8">
      <h3 className="mb-6 text-xl font-semibold text-cyan-400">{title}</h3>
      <div className="space-y-4">
        {items.map((skill) => (
          <SkillWithIcon key={skill.label} label={skill.label} level={skill.level} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <div className="mt-12 space-y-6">
      {items.map((item, index) => (
        <ExperienceCard key={`${item.company}-${index}`} {...item} />
      ))}
    </div>
  );
}

type ProjectsSectionProps = {
  items: ProjectItem[];
};

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} {...project} />
      ))}
    </div>
  );
}

type GraphicsShowcaseProps = {
  items: GraphicsItem[];
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

export function GraphicsShowcase({ items, activeIndex, onPrevious, onNext, onSelect }: GraphicsShowcaseProps) {
  return (
    <div className="mt-16 relative flex flex-col items-center">
      <div className="relative h-[420px] sm:h-[560px] w-full max-w-[980px] overflow-visible rounded-[40px] border border-white/10 bg-slate-950/70 shadow-[0_0_40px_rgba(15,23,42,0.2)]">
        {items.map((item, index) => {
          const delta = (index - activeIndex + items.length) % items.length;
          const isActive = delta === 0;
          const isNext = delta === 1;
          const isPrev = delta === items.length - 1;
          const style = {
            zIndex: isActive ? 30 : isNext ? 20 : isPrev ? 20 : 10,
            opacity: delta <= 2 ? 1 : 0,
            transform: isActive
              ? 'translate(-50%, -50%) scale(1.02) rotate(0deg)'
              : isNext
              ? 'translate(calc(-50% + 110px), -44%) scale(0.96) rotate(4deg)'
              : isPrev
              ? 'translate(calc(-50% - 110px), -44%) scale(0.96) rotate(-4deg)'
              : 'translate(-50%, -50%) scale(0.82) rotate(0deg)',
          };

          return (
            <div
              key={`${item.title}-${index}`}
              className="absolute left-1/2 top-1/2 h-[320px] sm:h-[470px] w-full max-w-[760px] sm:w-[calc(100%-96px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/20 shadow-[0_30px_70px_rgba(0,0,0,0.28)] transition-all duration-700"
              style={style}
            >
              <img src={item.image} alt={`${item.title} preview`} className="h-full w-full object-cover" />
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:px-5 sm:py-3 sm:text-sm"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={`${index}-indicator`}
              type="button"
              onClick={() => onSelect(index)}
              className={`h-3 w-3 rounded-full transition ${activeIndex === index ? 'bg-cyan-400' : 'bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:px-5 sm:py-3 sm:text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}

type EducationSectionProps = {
  items: EducationItem[];
};

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <div className="mt-8 space-y-4">
      {items.map((item, index) => (
        <div key={`${item.school}-${index}`} className="glass rounded-xl p-6 hover:border-cyan-400/50 transition">
          <h3 className="text-lg font-semibold text-cyan-400">{item.school}</h3>
          <p className="mt-1 text-white/80">{item.program}</p>
          <p className="mt-2 text-sm text-white/60">{item.status}</p>
        </div>
      ))}
    </div>
  );
}

type CertificationsSectionProps = {
  items: CertificationItem[];
};

export function CertificationsSection({ items }: CertificationsSectionProps) {
  return (
    <div className="mt-8 space-y-4">
      {items.map((cert, index) => (
        <div key={`${cert.title}-${index}`} className="glass rounded-xl p-6 hover:border-cyan-400/50 transition">
          <h3 className="text-lg font-semibold text-cyan-400">{cert.title}</h3>
          <p className="mt-1 text-white/80">{cert.issuer}</p>
        </div>
      ))}
    </div>
  );
}

type ContactLinksSectionProps = {
  items: ContactLinkItem[];
};

export function ContactLinksSection({ items }: ContactLinksSectionProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((link) => (
        <ContactLink key={link.label} {...link} />
      ))}
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2">
      <div className="glass rounded-2xl p-8 space-y-4">
        <p className="leading-relaxed text-white/80">
          I am a young Liberian technology enthusiast and peer educator passionate about using technology to solve difficult problems and create meaningful solutions.
        </p>
        <p className="leading-relaxed text-white/80">
          My goal is to leverage technology to address complex challenges, empower young people, and contribute to national development through innovation and digital transformation.
        </p>
      </div>
      <div className="glass rounded-2xl p-8 space-y-4">
        <p className="leading-relaxed text-white/80">
          Beyond technology, I actively serve in leadership and media roles where I help manage digital communication, content creation, and youth engagement initiatives.
        </p>
        <p className="leading-relaxed text-white/80">
          Whether it&apos;s building web applications, creating digital content, or leading youth programs, I&apos;m committed to making a difference through technology and service.
        </p>
      </div>
    </div>
  );
}

export function ContactFormSection() {
  return (
    <div className="glass rounded-2xl p-8">
      <h3 className="mb-6 text-lg font-semibold text-cyan-400">Send Me a Message</h3>
      <ContactForm />
    </div>
  );
}

export function ContentSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </section>
  );
}
