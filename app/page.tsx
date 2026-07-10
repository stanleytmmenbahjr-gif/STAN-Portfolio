'use client';

import { useState } from 'react';
import { 
  SiHtml5, SiTailwindcss, SiJavascript, SiVuedotjs, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiGit, SiGithub, SiFigma
} from 'react-icons/si';
import { 
  MdEmail, MdPhone, MdCheckCircle, MdMailOutline, MdPalette, MdOutlinePhotoCamera, MdBroadcastOnPersonal
} from 'react-icons/md';
import { 
  FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaXTwitter
} from 'react-icons/fa6';
import { 
  BiSolidMicrophone, BiUserCheck, BiListCheck, BiSpeaker
} from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';
import { Sidebar } from '@/components/sidebar';
import { SkillWithIcon } from '@/components/skill-with-icon';
import { ContactForm } from '@/components/contact-form';
import { ContactLink } from '@/components/contact-link';
import { ExperienceCard } from '@/components/experience-card';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { SkillBar } from '@/components/skill-bar';
import { HeroEnhanced } from '@/components/hero-enhanced';
import { MobileNav } from '@/components/mobile-nav';

const programmingSkills = [
  { label: 'HTML5', level: 95, icon: <SiHtml5 size={18} /> },
  { label: 'Tailwind CSS', level: 93, icon: <SiTailwindcss size={18} /> },
  { label: 'JavaScript', level: 90, icon: <SiJavascript size={18} /> },
  { label: 'Vue.js', level: 88, icon: <SiVuedotjs size={18} /> },
  { label: 'React.js', level: 90, icon: <SiReact size={18} /> },
  { label: 'Next.js', level: 92, icon: <SiNextdotjs size={18} /> },
  { label: 'Node.js', level: 87, icon: <SiNodedotjs size={18} /> },
  { label: 'Express.js', level: 85, icon: <SiExpress size={18} /> },
];

const toolSkills = [
  { label: 'Git', level: 92, icon: <SiGit size={18} /> },
  { label: 'GitHub', level: 91, icon: <SiGithub size={18} /> },
  { label: 'VS Code', level: 95, icon: <VscVscode size={18} /> },
  { label: 'Figma', level: 85, icon: <SiFigma size={18} /> },
];

const mediaSkills = [
  { label: 'Adobe Photoshop', level: 88, icon: <MdPalette size={18} /> },
  { label: 'Adobe Lightroom', level: 86, icon: <MdOutlinePhotoCamera size={18} /> },
  { label: 'OBS Studio', level: 84, icon: <MdBroadcastOnPersonal size={18} /> },
  { label: 'Photography', level: 82, icon: <MdOutlinePhotoCamera size={18} /> },
];

const leadershipSkills = [
  { label: 'Public Speaking', level: 89, icon: <BiSolidMicrophone size={18} /> },
  { label: 'Team Leadership', level: 87, icon: <BiUserCheck size={18} /> },
  { label: 'Project Coordination', level: 90, icon: <BiListCheck size={18} /> },
  { label: 'Youth Advocacy', level: 92, icon: <BiSpeaker size={18} /> },
];

const experience = [
  {
    role: 'Program Manager',
    company: 'Count Her In Liberia',
    period: '2023 - Present',
    highlights: [
      'Lead youth development programs',
      'Coordinate outreach initiatives',
      'Manage projects and partnerships',
      'Organize training workshops',
      'Monitor program impact',
    ],
  },
  {
    role: 'Media Director',
    company: 'Church of Pentecost Paynesville City Church',
    period: '2021 - Present',
    highlights: [
      'Lead media operations',
      'Manage church branding',
      'Coordinate livestreams',
      'Supervise content production',
    ],
  },
  {
    role: 'Tech Support Team Member',
    company: 'Liberia Research & Development Network',
    period: '2022 - 2023',
    highlights: [
      'Graphic design',
      'Photography',
      'Content management',
      'Technical support',
    ],
  },
  {
    role: 'Volunteer Tech Support',
    company: 'Smiling Faces Inc. (Academy of Young Leaders)',
    period: '2020 - 2021',
    highlights: [
      'Event technology support',
      'Media coverage',
      'Digital operations',
    ],
  },
];

const projects = [
  {
    title: 'ESP Dashboard',
    description: 'ERP dashboard built with Next.js, Tailwind CSS, and Node.js for inventory, shifts, and query management.',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'REST API'],
    link: 'https://erp-dashboard-7poo.vercel.app',
    image: '/esp-dashboard.png',
  },
  {
    title: 'Cornelia Wonkerleh Kruah Portfolio',
    description: 'Personal leadership portfolio website showcasing public service, initiatives, and contact links.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://kruah-portal.vercel.app',
    image: '/cornelia-portfolio.png',
  },
  {
    title: 'JYBK Professional Artist Website',
    description: 'Professional gospel artist website featuring music promotion, gallery, booking, and brand storytelling.',
    tags: ['React.js', 'Tailwind CSS', 'Netlify'],
    link: 'https://theworldjybk.netlify.app',
    image: '/JYBK.png',
  },
  {
    title: 'Pace Kreatyv',
    description: 'Branding and digital marketing site for Pace Kreatyv, focused on storytelling and growth for West African businesses.',
    tags: ['Netlify', 'Branding', 'Web Design'],
    link: 'https://pacekreative.netlify.app',
    image: '/pace.png',
  },
  {
    title: 'ODC',
    description: 'Digital skills landing page for Orange Digital Center Liberia, promoting technology training, innovation, and youth empowerment.',
    tags: ['Netlify', 'EdTech', 'Community'],
    link: 'https://stan-lib.netlify.app',
    image: '/ODC.png',
  },
  {
    title: 'Paynesville City Church',
    description: 'Church landing page for Paynesville City Church with worship, fellowship, and events information.',
    tags: ['Netlify', 'Church', 'Community'],
    link: 'https://pcc-web.netlify.app',
    image: '/paynesville-city-church.png',
  },
];

const graphicsDesigns = [
  {
    title: 'PCC Nursery & Primary Poster',
    image: '/image-1783474843562.png',
  },
  {
    title: 'PCC Anniversary Campaign',
    image: '/image-1783474865520.jpeg',
  },
  {
    title: 'Leadership Tribute Graphic',
    image: '/image-1783474883604.png',
  },
  {
    title: 'Event Promo Graphic',
    image: '/image-1783474907145.png',
  },
  {
    title: 'Church Service Feature',
    image: '/image-1783474939866.jpeg',
  },
  {
    title: 'Graphic Teaser Poster',
    image: '/image-1783475023403.png',
  },
  {
    title: 'Admission Flyer',
    image: '/Admission flyer.png',
  },
  {
    title: 'Area Week 2026',
    image: '/Area Week 2.jpg',
  },
];

const education = [
  {
    school: 'Starz University',
    program: 'Cybersecurity Studies',
    status: 'Current Student',
  },
];

const certifications = [
  {
    title: 'Full Stack Development',
    issuer: 'Orange Digital Center',
  },
  {
    title: 'IoT and Robotics',
    issuer: 'Orange Digital Center',
  },
  {
    title: 'YPLSA Cohort 12 Graduate',
    issuer: 'Young Political Leadership School of Africa',
  },
];

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:stanleytmmenbahjr@gmail.com',
    icon: <MdEmail size={32} />,
  },
  {
    label: 'Phone',
    href: 'tel:+231776548981',
    icon: <MdPhone size={32} />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/231776548981',
    icon: <FaWhatsapp size={32} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stanley-t-m-menbah-jr-a589b6327',
    icon: <FaLinkedin size={32} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/stanleytmmenbahjr-gif',
    icon: <SiGithub size={32} />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1GSjWSM8PB/?mibextid=wwXIfr',
    icon: <FaFacebook size={32} />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stanley_tm_menbah_jr?igsh=MW8xMWpweTQzdGR5bg%3D%3D&utm_source=qr',
    icon: <FaInstagram size={32} />,
  },
];

export default function Home() {
  const [activeGraphicsIndex, setActiveGraphicsIndex] = useState(0);

  const showPreviousGraphic = () => {
    setActiveGraphicsIndex((current) =>
      current === 0 ? graphicsDesigns.length - 1 : current - 1
    );
  };

  const showNextGraphic = () => {
    setActiveGraphicsIndex((current) =>
      current === graphicsDesigns.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-gradient-to-b from-[#050B1A] via-[#0D1326] to-[#050B1A] lg:ml-20">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-slate-950 focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-cyan-400/10 bg-[#050B1A]/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300">
              STAN
            </a>
            <div className="hidden gap-8 md:flex">
              <a href="#about" className="text-sm text-white/80 hover:text-cyan-400 transition">About</a>
              <a href="#skills" className="text-sm text-white/80 hover:text-cyan-400 transition">Skills</a>
              <a href="#experience" className="text-sm text-white/80 hover:text-cyan-400 transition">Experience</a>
              <a href="#projects" className="text-sm text-white/80 hover:text-cyan-400 transition">Projects</a>
              <a href="#contact" className="text-sm text-white/80 hover:text-cyan-400 transition">Contact</a>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      <HeroEnhanced />

      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-400/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="About Me"
            title="Technology & Purpose"
            description="Driven by passion for innovation and social impact"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="glass rounded-2xl p-8 space-y-4">
              <p className="text-white/80 leading-relaxed">
                I am a young Liberian technology enthusiast and peer educator passionate about using technology to solve difficult problems and create meaningful solutions.
              </p>
              <p className="text-white/80 leading-relaxed">
                My goal is to leverage technology to address complex challenges, empower young people, and contribute to national development through innovation and digital transformation.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 space-y-4">
              <p className="text-white/80 leading-relaxed">
                Beyond technology, I actively serve in leadership and media roles where I help manage digital communication, content creation, and youth engagement initiatives.
              </p>
              <p className="text-white/80 leading-relaxed">
                Whether it's building web applications, creating digital content, or leading youth programs, I'm committed to making a difference through technology and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Expertise"
            title="Skills & Tools"
            description="Comprehensive toolkit across development, design, and leadership"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Programming & Tools */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6">Programming</h3>
                <div className="space-y-4">
                  {programmingSkills.map((skill) => (
                    <SkillWithIcon key={skill.label} label={skill.label} level={skill.level} icon={skill.icon} />
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6">Tools & Platforms</h3>
                <div className="space-y-4">
                  {toolSkills.map((skill) => (
                    <SkillWithIcon key={skill.label} label={skill.label} level={skill.level} icon={skill.icon} />
                  ))}
                </div>
              </div>
            </div>

            {/* Media & Leadership Skills */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6">Media & Design</h3>
                <div className="space-y-4">
                  {mediaSkills.map((skill) => (
                    <SkillWithIcon key={skill.label} label={skill.label} level={skill.level} icon={skill.icon} />
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6">Leadership</h3>
                <div className="space-y-4">
                  {leadershipSkills.map((skill) => (
                    <SkillWithIcon key={skill.label} label={skill.label} level={skill.level} icon={skill.icon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-600/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Career"
            title="Professional Experience"
            description="Diverse roles across technology, media, and youth development"
          />

          <div className="mt-12 space-y-6">
            {experience.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of projects showcasing diverse technical and creative skills"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Graphics Design Section */}
      <section id="graphics" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-950/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Graphics"
            title="Design Showcase"
            description="Here are some of my posters, event creatives, and visual branding pieces that reflect my style and purpose."
          />

          <div className="mt-16 relative flex flex-col items-center">
            <div className="relative h-[420px] sm:h-[560px] w-full max-w-[980px] overflow-visible rounded-[40px] border border-white/10 bg-slate-950/70 shadow-[0_0_40px_rgba(15,23,42,0.2)]">
              {graphicsDesigns.map((item, index) => {
                const delta = (index - activeGraphicsIndex + graphicsDesigns.length) % graphicsDesigns.length;
                const isActive = delta === 0;
                const isNext = delta === 1;
                const isPrev = delta === graphicsDesigns.length - 1;
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
                    key={index}
                    className="absolute left-1/2 top-1/2 h-[320px] sm:h-[470px] w-full max-w-[760px] sm:w-[calc(100%-96px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/20 shadow-[0_30px_70px_rgba(0,0,0,0.28)] transition-all duration-700"
                    style={style}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={showPreviousGraphic}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:px-5 sm:py-3 sm:text-sm"
              >
                Previous
              </button>
              <div className="flex gap-2">
                {graphicsDesigns.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveGraphicsIndex(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      activeGraphicsIndex === index ? 'bg-cyan-400' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={showNextGraphic}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:px-5 sm:py-3 sm:text-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-400/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Education */}
            <div>
              <SectionHeading
                eyebrow="Education"
                title="Academic Journey"
                description="Pursuing excellence in technology and cybersecurity"
              />
              <div className="mt-8 space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="glass rounded-xl p-6 hover:border-cyan-400/50 transition">
                    <h3 className="text-lg font-semibold text-cyan-400">{item.school}</h3>
                    <p className="text-white/80 mt-1">{item.program}</p>
                    <p className="text-sm text-white/60 mt-2">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionHeading
                eyebrow="Credentials"
                title="Certifications"
                description="Professional credentials and achievements"
              />
              <div className="mt-8 space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass rounded-xl p-6 hover:border-cyan-400/50 transition">
                    <h3 className="text-lg font-semibold text-cyan-400">{cert.title}</h3>
                    <p className="text-white/80 mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's Connect"
            description="Reach out through any of these channels or send me a direct message"
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Contact Links */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-cyan-400">Quick Links</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactLinks.map((link) => (
                  <ContactLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              <h3 className="mb-6 text-lg font-semibold text-cyan-400">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/10 bg-[#050B1A]/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-white/60 md:text-left">
              © 2024 Stanley T. M. Menbah Jr. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition text-sm">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
