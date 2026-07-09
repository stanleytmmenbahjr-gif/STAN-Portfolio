import React from 'react';
import { FiHome, FiUser, FiZap, FiBriefcase, FiEdit3, FiMail } from 'react-icons/fi';

export function Sidebar() {
  const navItems = [
    { icon: FiHome, label: 'Home', href: '#' },
    { icon: FiUser, label: 'About', href: '#about' },
    { icon: FiZap, label: 'Skills', href: '#skills' },
    { icon: FiBriefcase, label: 'Experience', href: '#experience' },
    { icon: FiEdit3, label: 'Projects', href: '#projects' },
    { icon: FiMail, label: 'Contact', href: '#contact' },
  ];

  return (
    <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-20 lg:flex-col lg:items-center lg:justify-center lg:border-r lg:border-cyan-400/10 lg:bg-[#050B1A]/50 lg:backdrop-blur-md lg:z-50">
      <div className="space-y-8">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-xl transition hover:border-cyan-400/50 hover:bg-cyan-400/20 hover:text-cyan-400"
              title={item.label}
            >
              <IconComponent size={24} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
