'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
      ]
    },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled
        ? 'bg-black/60 backdrop-blur-md border-b border-[#FFA016]/30 py-3 shadow-2xl'
        : 'bg-black/30 backdrop-blur-[2px] py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105 duration-300">
              <img src="/Logo2.png" alt="IEEE CS Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm md:text-base tracking-tight leading-none group-hover:text-[#FFA016] transition-colors uppercase">
              IEEE Computer Society
            </span>
            <span className="text-[#FFA016] text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
              UCP Student Chapter
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.dropdown && link.dropdown.some(d => pathname === d.path));

            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group/dropdown">
                  <button className="relative px-4 py-2 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1 group">
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-[#FFA016]' : 'group-hover:text-[#FFA016]'}`}>
                      {link.name}
                    </span>
                    <motion.div
                      className={`h-0.5 bg-[#FFA016] absolute bottom-0 left-4 right-4 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:visible transition-all duration-300 z-50">
                    <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl min-w-[200px]">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className={`block px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#FFA016] hover:text-white transition-colors ${pathname === subItem.path ? 'text-[#FFA016]' : 'text-white'}`}
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
                className="relative px-4 py-2 text-sm font-bold uppercase tracking-wider group text-white overflow-hidden"
              >
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-[#FFA016]' : 'group-hover:text-[#FFA016]'}`}>
                  {link.name}
                </span>
                {/* Hover/Active Underline */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#FFA016] w-full transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </Link>
            );
          })}

          <Link href="/register" className="ml-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#FFA016] to-[#ff8c00] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all"
            >
              Join Us
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-[#FFA016] transition-colors p-2 rounded-lg bg-white/5"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-[#FFA016]/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-4">
                  {!link.dropdown ? (
                    <Link
                      href={link.path}
                      className={`text-2xl font-black uppercase tracking-tighter ${pathname === link.path ? 'text-[#FFA016]' : 'text-white'}`}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{link.name}</span>
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className={`text-xl font-black uppercase tracking-tighter ${pathname === subItem.path ? 'text-[#FFA016]' : 'text-white/80'}`}
                          onClick={toggleMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              ))}
              <Link href="/register" onClick={toggleMenu} className="pt-4">
                <button className="w-full py-4 bg-[#FFA016] text-white font-black uppercase text-lg rounded-xl">
                  Register Now
                </button>
              </Link>

              {/* Social Links for Mobile */}
              <div className="flex justify-center space-x-6 pt-8 border-t border-white/10">
                <span className="text-[#FFA016] text-xs font-bold uppercase tracking-widest">Connect with us</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
