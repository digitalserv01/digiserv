'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto h-full flex justify-between items-center px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
              <span className="text-white font-medium text-2xl">AMADIGI</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex gap-10 text-sm font-light"
          >
            <Link href="/" className="hover:opacity-60 transition-opacity">Accueil,</Link>
            <Link href="/works" className="hover:opacity-60 transition-opacity">Projets,</Link>
            <Link href="/#about" className="hover:opacity-60 transition-opacity">À propos,</Link>
            <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-4 right-4 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl z-50 md:hidden overflow-hidden"
            >
              <nav className="flex flex-col p-6 space-y-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-white text-lg font-light hover:opacity-60 transition-opacity py-2"
                >
                  Accueil
                </Link>
                <Link
                  href="/works"
                  onClick={closeMenu}
                  className="text-white text-lg font-light hover:opacity-60 transition-opacity py-2"
                >
                  Projets
                </Link>
                <Link
                  href="/#about"
                  onClick={closeMenu}
                  className="text-white text-lg font-light hover:opacity-60 transition-opacity py-2"
                >
                  À propos
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="text-white text-lg font-light hover:opacity-60 transition-opacity py-2"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
