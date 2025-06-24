import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Brush, Feather, Palette } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'jp';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      title: "Welcome to My Ink Universe!",
      subtitle: "Where Dreams Meet Digital Canvas",
      description: "Step into a world where every stroke tells a story, every shade whispers emotion, and every character comes alive through the magic of digital ink.",
      cta1: "Explore Gallery",
      cta2: "Commission Art",
      bubble: "Let's create something amazing together!"
    },
    jp: {
      title: "インクの世界へようこそ！",
      subtitle: "夢がデジタルキャンバスと出会う場所",
      description: "すべてのストロークが物語を語り、すべての色合いが感情をささやき、すべてのキャラクターがデジタルインクの魔法を通して生き生きとする世界に足を踏み入れてください。",
      cta1: "ギャラリーを見る",
      cta2: "アートを依頼",
      bubble: "一緒に素晴らしいものを作りましょう！"
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 paper-texture">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating ink blots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gray-700 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Brush stroke patterns */}
        <svg className="absolute top-20 left-10 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <motion.path
            d="M10,50 Q30,10 50,50 T90,50"
            stroke="#1a1a1a"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
        </svg>

        <svg className="absolute bottom-20 right-10 w-40 h-40 opacity-10" viewBox="0 0 100 100">
          <motion.path
            d="M20,80 Q50,20 80,80"
            stroke="#1a1a1a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-['Fredericka_the_Great'] text-gray-800 leading-tight mb-4">
              {content[language].title.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </h1>
            
            <motion.div
              className="h-1 bg-gradient-to-r from-gray-600 via-gray-400 to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 1, duration: 1.5 }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-gray-600 font-['Kalam'] italic"
          >
            {content[language].subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl text-gray-700 font-['Kalam'] leading-relaxed max-w-2xl"
          >
            {content[language].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('gallery')}
              className="group px-8 py-4 bg-gray-800 text-white rounded-full font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 font-['Kalam'] paper-fold relative overflow-hidden"
            >
              <span className="relative z-10">{content[language].cta1}</span>
              <motion.div
                whileHover={{ x: 5 }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('commissions')}
              className="group px-8 py-4 bg-white text-gray-800 rounded-full font-bold text-lg shadow-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-3 font-['Kalam'] paper-fold relative overflow-hidden"
            >
              <span className="relative z-10">{content[language].cta2}</span>
              <motion.div
                whileHover={{ rotate: 180 }}
                className="relative z-10"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Character Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          {/* Main artwork container */}
          <div className="relative manga-panel p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100">
            {/* Character illustration area */}
            <motion.div
              className="w-full h-96 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-gray-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Artistic character representation */}
              <div className="text-center relative z-10">
                <motion.div
                  className="text-8xl mb-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🎨
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold font-['Fredericka_the_Great'] text-gray-800">
                    Digital Luffy
                  </div>
                  <div className="text-lg font-['Kalam'] text-gray-600">
                    Manga Artist
                  </div>
                </motion.div>
              </div>
              
              {/* Floating art tools */}
              <motion.div
                className="absolute top-6 right-6 text-gray-600"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brush className="w-8 h-8" />
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 text-gray-600"
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Palette className="w-8 h-8" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-4 text-gray-500"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Feather className="w-6 h-6" />
              </motion.div>

              {/* Ink splatter effects */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gray-400 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 2, duration: 0.6, type: "spring" }}
            className="absolute -top-8 -right-8 bg-white rounded-3xl p-6 border-3 border-gray-800 shadow-xl max-w-xs paper-fold"
          >
            <div className="text-lg font-bold font-['Kalam'] text-gray-800 text-center">
              {content[language].bubble}
            </div>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-8 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-800 transform translate-y-full"></div>
            <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white transform translate-y-3"></div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gray-400"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Star className="w-8 h-8 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;