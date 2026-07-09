import type { ReactNode } from 'react';
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import {
  MdEmail,
  MdPhone,
  MdPalette,
  MdOutlinePhotoCamera,
  MdBroadcastOnPersonal,
} from 'react-icons/md';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { BiSolidMicrophone, BiUserCheck, BiListCheck, BiSpeaker } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';

export type SkillItem = {
  label: string;
  level: number;
  icon: ReactNode;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

export type GraphicsItem = {
  title: string;
  image: string;
};

export type EducationItem = {
  school: string;
  program: string;
  status: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
};

export type ContactLinkItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const programmingSkills: SkillItem[] = [
  { label: 'HTML5', level: 95, icon: <SiHtml5 size={18} /> },
  { label: 'Tailwind CSS', level: 93, icon: <SiTailwindcss size={18} /> },
  { label: 'JavaScript', level: 90, icon: <SiJavascript size={18} /> },
  { label: 'Vue.js', level: 88, icon: <SiVuedotjs size={18} /> },
  { label: 'React.js', level: 90, icon: <SiReact size={18} /> },
  { label: 'Next.js', level: 92, icon: <SiNextdotjs size={18} /> },
  { label: 'Node.js', level: 87, icon: <SiNodedotjs size={18} /> },
  { label: 'Express.js', level: 85, icon: <SiExpress size={18} /> },
];

export const toolSkills: SkillItem[] = [
  { label: 'Git', level: 92, icon: <SiGit size={18} /> },
  { label: 'GitHub', level: 91, icon: <SiGithub size={18} /> },
  { label: 'VS Code', level: 95, icon: <VscVscode size={18} /> },
  { label: 'Figma', level: 85, icon: <SiFigma size={18} /> },
];

export const mediaSkills: SkillItem[] = [
  { label: 'Adobe Photoshop', level: 88, icon: <MdPalette size={18} /> },
  { label: 'Adobe Lightroom', level: 86, icon: <MdOutlinePhotoCamera size={18} /> },
  { label: 'OBS Studio', level: 84, icon: <MdBroadcastOnPersonal size={18} /> },
  { label: 'Photography', level: 82, icon: <MdOutlinePhotoCamera size={18} /> },
];

export const leadershipSkills: SkillItem[] = [
  { label: 'Public Speaking', level: 89, icon: <BiSolidMicrophone size={18} /> },
  { label: 'Team Leadership', level: 87, icon: <BiUserCheck size={18} /> },
  { label: 'Project Coordination', level: 90, icon: <BiListCheck size={18} /> },
  { label: 'Youth Advocacy', level: 92, icon: <BiSpeaker size={18} /> },
];

export const experience: ExperienceItem[] = [
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
    highlights: ['Graphic design', 'Photography', 'Content management', 'Technical support'],
  },
  {
    role: 'Volunteer Tech Support',
    company: 'Smiling Faces Inc. (Academy of Young Leaders)',
    period: '2020 - 2021',
    highlights: ['Event technology support', 'Media coverage', 'Digital operations'],
  },
];

export const projects: ProjectItem[] = [
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
  {
    title: 'Stanley’s Chatbot',
    description: 'Interactive chatbot experience built to showcase conversational AI and user engagement.',
    tags: ['AI', 'Chatbot', 'UX'],
    link: 'https://stanleys-chatbot.netlify.app',
    image: '/stanleys-chatbot.svg',
  },
  {
    title: 'Graphics Design Area',
    description: 'A dedicated graphics project section highlighting logos, banners, posters, and visual identity work.',
    tags: ['Graphic Design', 'Branding', 'Visuals'],
    link: '#graphics',
    image: '/pace.png',
  },
];

export const graphicsDesigns: GraphicsItem[] = [
  { title: 'PCC Nursery & Primary Poster', image: '/image-1783474843562.png' },
  { title: 'PCC Anniversary Campaign', image: '/image-1783474865520.jpeg' },
  { title: 'Leadership Tribute Graphic', image: '/image-1783474883604.png' },
  { title: 'Event Promo Graphic', image: '/image-1783474907145.png' },
  { title: 'Church Service Feature', image: '/image-1783474939866.jpeg' },
  { title: 'Graphic Teaser Poster', image: '/image-1783475023403.png' },
];

export const education: EducationItem[] = [
  {
    school: 'Starz University',
    program: 'Cybersecurity Studies',
    status: 'Current Student',
  },
];

export const certifications: CertificationItem[] = [
  { title: 'Full Stack Development', issuer: 'Orange Digital Center' },
  { title: 'IoT and Robotics', issuer: 'Orange Digital Center' },
  { title: 'YPLSA Cohort 12 Graduate', issuer: 'Young Political Leadership School of Africa' },
];

export const contactLinks: ContactLinkItem[] = [
  { label: 'Email', href: 'mailto:stanleytmmenbahjr@gmail.com', icon: <MdEmail size={32} /> },
  { label: 'Phone', href: 'tel:+231776548981', icon: <MdPhone size={32} /> },
  { label: 'WhatsApp', href: 'https://wa.me/231776548981', icon: <FaWhatsapp size={32} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stanley-t-m-menbah-jr-a589b6327', icon: <FaLinkedin size={32} /> },
  { label: 'GitHub', href: 'https://github.com/stanleytmmenbahjr-gif', icon: <SiGithub size={32} /> },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1GSjWSM8PB/?mibextid=wwXIfr', icon: <FaFacebook size={32} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/stanley_tm_menbah_jr?igsh=MW8xMWpweTQzdGR5bg%3D%3D&utm_source=qr', icon: <FaInstagram size={32} /> },
];
