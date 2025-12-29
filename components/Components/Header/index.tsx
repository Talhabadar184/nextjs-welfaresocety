'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Hierarchy',
      path: '#',
      dropdown: [
        { name: 'Session 24-25', path: '/hierarchy-24-25' },
        { name: 'Session 25-26', path: '/hierarchy-25-26' },
      ],
    },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-[100] transition-all duration-300
        ${scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-colors duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-20 h-20 transition-transform duration-300 group-hover:scale-105">
            <img src="/logo3.png" alt="UCP Welfare Society" className="w-full h-full object-contain" />
          </div>
          <span className="text-sm md:text-base font-bold uppercase tracking-widest transition-colors">
            UCP Welfare Society
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.dropdown && link.dropdown.some((d) => pathname === d.path));

            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group/dropdown">
                  <button className="px-4 py-2 text-sm font-bold uppercase tracking-wider">
                    <span
                      className={`transition-colors duration-300
                      ${isActive ? 'text-black' : 'group-hover:text-black'}`}
                    >
                      {link.name}
                    </span>
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-2
                    group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0
                    transition-all duration-300 z-50"
                  >
                    <div className="bg-black/90 backdrop-blur-xl rounded-xl overflow-hidden min-w-[200px]">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className={`block px-6 py-4 text-xs font-bold uppercase tracking-widest
                          hover:bg-green-600 hover:text-white transition-colors
                          ${pathname === subItem.path ? 'text-green-600' : 'text-white'}`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.path}
                className="px-4 py-2 text-md font-bold uppercase tracking-wider"
              >
                <span
                  className={`transition-colors duration-300
                  ${isActive ? 'text-green-600' : 'group-hover:text-black'}`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}

          <Link href="/register" className="ml-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-green-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg"
            >
              Register
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-white/10 text-white group-hover:text-black transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-black/95 backdrop-blur-2xl"
          >
            <div className="p-8 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {!link.dropdown ? (
                    <Link
                      href={link.path}
                      onClick={toggleMenu}
                      className={`block text-2xl font-black uppercase
                      ${pathname === link.path ? 'text-green-600' : 'text-white'}`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <span className="block text-white/50 text-xs font-bold uppercase mb-2">
                        {link.name}
                      </span>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          onClick={toggleMenu}
                          className={`block text-xl font-black uppercase
                          ${pathname === sub.path ? 'text-green-600' : 'text-white/80'}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              ))}

              <Link href="/register" onClick={toggleMenu}>
                <button className="w-full py-4 bg-green-600 text-white font-black uppercase rounded-xl">
                  Register
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
