import React from 'react';
import { motion } from 'framer-motion';
import { Brush, Feather } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center z-50 paper-texture">
      <div className="text-center relative">
        {/* Floating ink particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-800 rounded-full ink-particle"
            style={{
              left: `${Math.random() * 200 - 100}px`,
              top: `${Math.random() * 200 - 100}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Main loading animation */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-24 h-24 mx-auto relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-4 border-gray-300 rounded-full"></div>
            <motion.div
              className="absolute inset-0 border-4 border-gray-800 rounded-full border-t-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-inner">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brush className="w-8 h-8 text-gray-700" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold text-gray-800 font-['Fredericka_the_Great'] handwrite">
            Preparing Canvas...
          </h1>
          
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Feather className="w-5 h-5" />
            <span className="font-['Kalam'] text-lg">Mixing digital ink</span>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-2 bg-gray-200 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Brush strokes decoration */}
        <svg className="absolute -top-10 -left-10 w-20 h-20 opacity-30" viewBox="0 0 100 100">
          <motion.path
            d="M10,90 Q50,10 90,50"
            stroke="#1a1a1a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>

        <svg className="absolute -bottom-10 -right-10 w-20 h-20 opacity-30" viewBox="0 0 100 100">
          <motion.path
            d="M90,10 Q50,90 10,50"
            stroke="#1a1a1a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;