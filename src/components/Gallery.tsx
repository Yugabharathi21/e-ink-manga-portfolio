import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Filter, Eye, Brush, Palette, Sparkles } from 'lucide-react';

interface GalleryProps {
  language: 'en' | 'jp';
}

interface ArtworkData {
  id: number;
  title: string;
  titleJp: string;
  category: string;
  likes: number;
  image: string;
  description: string;
  descriptionJp: string;
  technique: string;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const content = {
    en: {
      title: "Digital Ink Gallery",
      subtitle: "A Collection of Dreams & Stories",
      filters: {
        all: "All Artwork",
        sketch: "Ink Sketches",
        colored: "Watercolor",
        digital: "Digital Art",
        commissioned: "Commissions"
      }
    },
    jp: {
      title: "デジタルインクギャラリー",
      subtitle: "夢と物語のコレクション",
      filters: {
        all: "すべてのアートワーク",
        sketch: "インクスケッチ",
        colored: "水彩画",
        digital: "デジタルアート",
        commissioned: "依頼作品"
      }
    }
  };

  const artworks: ArtworkData[] = [
    {
      id: 1,
      title: "Straw Hat Dreams",
      titleJp: "麦わらの夢",
      category: "digital",
      likes: 234,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Digital painting capturing the spirit of adventure",
      descriptionJp: "冒険の精神を捉えたデジタルペインティング",
      technique: "Digital Brush"
    },
    {
      id: 2,
      title: "Ink Flow Study",
      titleJp: "インクフロー研究",
      category: "sketch",
      likes: 189,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Traditional ink technique exploration",
      descriptionJp: "伝統的なインク技法の探求",
      technique: "Traditional Ink"
    },
    {
      id: 3,
      title: "Ocean Memories",
      titleJp: "海の記憶",
      category: "colored",
      likes: 312,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Watercolor blend of emotion and nature",
      descriptionJp: "感情と自然の水彩ブレンド",
      technique: "Watercolor"
    },
    {
      id: 4,
      title: "Custom Pirate Soul",
      titleJp: "カスタム海賊魂",
      category: "commissioned",
      likes: 156,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Personalized character design commission",
      descriptionJp: "パーソナライズされたキャラクターデザイン依頼",
      technique: "Mixed Media"
    },
    {
      id: 5,
      title: "Rubber Soul",
      titleJp: "ゴムの魂",
      category: "digital",
      likes: 278,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Digital exploration of unique abilities",
      descriptionJp: "ユニークな能力のデジタル探求",
      technique: "Digital Paint"
    },
    {
      id: 6,
      title: "Crew Harmony",
      titleJp: "クルーハーモニー",
      category: "colored",
      likes: 445,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Watercolor group portrait study",
      descriptionJp: "水彩グループポートレート研究",
      technique: "Watercolor & Ink"
    },
    {
      id: 7,
      title: "Wind Sketches",
      titleJp: "風のスケッチ",
      category: "sketch",
      likes: 167,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Quick gesture studies in motion",
      descriptionJp: "動きの中の素早いジェスチャー研究",
      technique: "Charcoal & Ink"
    },
    {
      id: 8,
      title: "Digital Awakening",
      titleJp: "デジタル覚醒",
      category: "digital",
      likes: 389,
      image: "https://images.pexels.com/photos/1070537/pexels-photo-1070537.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern interpretation of classic themes",
      descriptionJp: "古典的テーマの現代的解釈",
      technique: "Digital Composite"
    }
  ];

  const filteredArtworks = selectedFilter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedFilter);

  const toggleLike = (id: number) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getFilterIcon = (filter: string) => {
    switch (filter) {
      case 'sketch': return Brush;
      case 'colored': return Palette;
      case 'digital': return Sparkles;
      default: return Filter;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 paper-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold font-['Fredericka_the_Great'] text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content[language].title}
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-2xl text-gray-600 font-['Kalam'] italic">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.entries(content[language].filters).map(([key, label], index) => {
            const IconComponent = getFilterIcon(key);
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(key)}
                className={`group px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 border-2 font-['Kalam'] flex items-center gap-3 paper-fold relative overflow-hidden ${
                  selectedFilter === key
                    ? 'bg-gray-800 text-white border-gray-800 shadow-lg'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="relative z-10">{label}</span>
                {selectedFilter === key && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900"
                    layoutId="activeFilter"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                className="group relative manga-panel bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={artwork.image}
                    alt={language === 'en' ? artwork.title : artwork.titleJp}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-['Kalam'] mb-2">
                        {language === 'en' ? artwork.description : artwork.descriptionJp}
                      </p>
                      <div className="flex items-center gap-2">
                        <Brush className="w-4 h-4" />
                        <span className="text-xs">{artwork.technique}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* View Icon */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Eye className="w-5 h-5 text-gray-700" />
                  </motion.div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full border border-gray-200">
                      {artwork.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-['Kalam'] text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {language === 'en' ? artwork.title : artwork.titleJp}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Palette className="w-4 h-4" />
                      <span className="text-sm font-['Kalam']">{artwork.technique}</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(artwork.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors duration-200"
                    >
                      <motion.div
                        animate={likedItems.has(artwork.id) ? { 
                          scale: [1, 1.3, 1],
                          rotate: [0, 15, -15, 0]
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <Heart 
                          className={`w-5 h-5 ${
                            likedItems.has(artwork.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-600'
                          }`} 
                        />
                      </motion.div>
                      <span className="font-medium font-['Kalam']">
                        {artwork.likes + (likedItems.has(artwork.id) ? 1 : 0)}
                      </span>
                    </motion.button>
                  </div>
                </div>

                {/* Hover effect particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100"
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 font-['Kalam'] paper-fold"
          >
            {language === 'en' ? 'View More Artwork' : 'もっとアートワークを見る'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;