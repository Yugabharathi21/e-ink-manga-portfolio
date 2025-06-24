import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Brush, Palette } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'jp';
  setLanguage: (lang: 'en' | 'jp') => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: ['Home', 'Gallery', 'About', 'Commissions', 'Contact'],
    jp: ['ホーム', 'ギャラリー', '自己紹介', '依頼', 'お問い合わせ']
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group"
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Brush className="w-8 h-8 text-gray-700" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-gray-600 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold font-['Fredericka_the_Great'] text-gray-800 handwrite">
                Luffy's Ink Studio
              </h1>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-gray-600 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(index === 0 ? 'home' : item)}
                className="relative text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300 font-['Kalam'] text-lg group"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gray-700"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                {/* Ink drop effect */}
                <motion.div
                  className="absolute -top-2 left-1/2 w-1 h-1 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.button>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-300 shadow-sm">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-gray-800 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                EN
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('jp')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'jp' 
                    ? 'bg-gray-800 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                JP
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm shadow-sm"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="mt-4 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg manga-panel">
            {navItems[language].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(index === 0 ? 'home' : item)}
                className="block w-full text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-200 font-['Kalam'] text-lg text-gray-700 hover:text-gray-900"
              >
                <div className="flex items-center gap-3">
                  <Palette className="w-4 h-4" />
                  {item}
                </div>
              </motion.button>
            ))}
            
            <div className="flex justify-center mt-6 space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('en')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-gray-800 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                English
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage('jp')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'jp' 
                    ? 'bg-gray-800 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                日本語
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Decorative ink drops */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
    </motion.header>
  );
};

export default Header;