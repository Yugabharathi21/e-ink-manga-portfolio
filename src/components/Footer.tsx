import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Palette, Anchor, Star } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'jp';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      tagline: "Made with passion for manga and art",
      copyright: "© 2024 Luffy's Art Studio. All rights reserved.",
      links: {
        home: "Home",
        gallery: "Gallery",
        about: "About",
        commissions: "Commissions",
        contact: "Contact"
      },
      social: {
        title: "Follow the Adventure",
        instagram: "Instagram",
        twitter: "Twitter",
        pixiv: "Pixiv",
        artstation: "ArtStation"
      },
      quote: "The adventure never ends, and neither does the art!"
    },
    jp: {
      tagline: "マンガとアートへの情熱で作られました",
      copyright: "© 2024 ルフィのアートスタジオ。全著作権所有。",
      links: {
        home: "ホーム",
        gallery: "ギャラリー",
        about: "自己紹介",
        commissions: "依頼",
        contact: "お問い合わせ"
      },
      social: {
        title: "冒険をフォロー",
        instagram: "Instagram",
        twitter: "Twitter",
        pixiv: "Pixiv",
        artstation: "ArtStation"
      },
      quote: "冒険は決して終わらない、アートも同じように！"
    }
  };

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
    <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute -top-20 -right-20 w-40 h-40 text-[#ff3131] opacity-10"
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
          className="absolute bottom-10 left-10 w-16 h-16 text-yellow-400 opacity-20"
        >
          <Star className="w-full h-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-8 h-8 text-[#ff3131]" />
              <h3 className="text-2xl font-bold font-['Rock_Salt'] text-white">
                Luffy's Art Studio
              </h3>
            </div>
            <p className="text-gray-300 font-['Kalam'] leading-relaxed mb-4">
              {content[language].tagline}
            </p>
            <div className="flex items-center gap-2 text-[#ff3131]">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-['Kalam'] text-sm">
                {content[language].quote}
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
              {language === 'en' ? 'Quick Links' : 'クイックリンク'}
            </h4>
            <ul className="space-y-2">
              {Object.entries(content[language].links).map(([key, label]) => (
                <li key={key}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(key)}
                    className="text-gray-300 hover:text-[#ff3131] transition-colors duration-200 font-['Kalam']"
                  >
                    {label}
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
              {content[language].social.title}
            </h4>
            <div className="space-y-2">
              {Object.entries(content[language].social).slice(1).map(([key, label]) => (
                <motion.a
                  key={key}
                  href="#"
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-[#ff3131] transition-colors duration-200 font-['Kalam']"
                >
                  {label}
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
              {language === 'en' ? 'Stay Updated' : '最新情報を受け取る'}
            </h4>
            <p className="text-gray-300 font-['Kalam'] text-sm mb-4">
              {language === 'en' 
                ? 'Get notified about new artwork and commissions!' 
                : '新しいアートワークや依頼について通知を受け取る！'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-[#ff3131] text-white rounded-lg font-bold text-sm hover:bg-[#ff4444] transition-colors duration-300 font-['Kalam'] border-2 border-[#ff3131]"
            >
              {language === 'en' ? 'Subscribe' : '購読する'}
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 font-['Kalam'] text-sm text-center md:text-left">
            {content[language].copyright}
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#ff3131] transition-colors duration-200 font-['Kalam'] text-sm"
          >
            <div className="w-8 h-8 bg-[#ff3131] rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            {language === 'en' ? 'Back to Adventure' : '冒険に戻る'}
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff3131] via-[#ff9f1c] to-[#ff3131]"></div>
    </footer>
  );
};

export default Footer;