import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Palette, Anchor, Star } from 'lucide-react';
import Wave from 'react-wavify';
// Import language files
import locales, { Locale } from '../locales';

interface FooterProps {
  language: 'en' | 'jp';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const [localeData, setLocaleData] = useState<Locale>(locales[language]);
  
  useEffect(() => {
    // Update locale data when language changes
    setLocaleData(locales[language]);
  }, [language]);
  
  const { footer } = localeData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Wave Animation on top of footer */}
      <div className="relative w-full" style={{ marginBottom: "-1px", zIndex: 5 }}>
        <Wave 
          fill="var(--crow-dark)"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.15,
            points: 4
          }}
        />
      </div>
      <footer className="bg-[var(--crow-dark)] text-[var(--crow-white)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-20 -right-20 w-40 h-40 text-[var(--crow-gray-dark)] opacity-10"
        >
          <Anchor className="w-full h-full" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-10 left-10 w-16 h-16 text-[var(--crow-gray-medium)] opacity-20"
        >
          <Star className="w-full h-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-8 h-8 text-[var(--crow-gray-light)]" />
              <h3 className="text-2xl font-bold font-['Rock_Salt'] text-[var(--crow-white)]">
                Luffy's Art Studio
              </h3>
            </div>
            <p className="text-[var(--crow-silver)] font-['Kalam'] leading-relaxed mb-4">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-[var(--crow-gray-light)]">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-['Kalam'] text-sm">
                {footer.quote}
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold font-['Kalam'] text-white mb-4">
              {footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {Object.entries(footer.links).map(([key, label]) => (
                <li key={key}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(key)}
                    className="text-[var(--crow-silver)] hover:text-[var(--crow-white)] transition-colors duration-200 font-['Kalam']"
                  >
                    {label as string}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold font-['Kalam'] text-white mb-4">
              {footer.social.title}
            </h4>
            <div className="space-y-2">
              {Object.entries(footer.social).slice(1).map(([key, label]) => (
                <motion.a
                  key={key}
                  href="#"
                  whileHover={{ x: 5 }}
                  className="block text-[var(--crow-silver)] hover:text-[var(--crow-white)] transition-colors duration-200 font-['Kalam']"
                >
                  {label as string}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold font-['Kalam'] text-white mb-4">
              {footer.stayUpdated}
            </h4>
            <p className="text-[var(--crow-silver)] font-['Kalam'] text-sm mb-4">
              {footer.notificationInfo}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-[var(--crow-gray-dark)] text-[var(--crow-white)] rounded-lg font-bold text-sm hover:bg-[var(--crow-black)] transition-colors duration-300 font-['Kalam'] border-2 border-[var(--crow-gray-dark)]"
            >
              {footer.subscribe}
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[var(--crow-gray-dark)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-30"
        >
          <p className="text-[var(--crow-gray-light)] font-['Kalam'] text-sm text-center md:text-left">
            {footer.copyright}
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[var(--crow-gray-light)] hover:text-[var(--crow-white)] transition-colors duration-200 font-['Kalam'] text-sm"
          >
            <div className="w-8 h-8 bg-[var(--crow-gray-dark)] rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-[var(--crow-white)]" />
            </div>
            {footer.backToAdventure}
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--crow-black)] via-[var(--crow-gray-medium)] to-[var(--crow-black)]" style={{ zIndex: 2 }}></div>
    </footer>
    </>
  );
};

export default Footer;