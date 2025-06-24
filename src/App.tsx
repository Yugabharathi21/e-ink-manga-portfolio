import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Commissions from './components/Commissions';
import FanWall from './components/FanWall';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<'en' | 'jp'>('en');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f7f3ec] text-[#1a1a1a] overflow-x-hidden"
    >
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Gallery language={language} />
        <About language={language} />
        <Commissions language={language} />
        <FanWall language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </motion.div>
  );
}

export default App;