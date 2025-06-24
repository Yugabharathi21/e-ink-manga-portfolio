import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Palette, Award } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'jp';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    en: {
      title: "About the Artist",
      subtitle: "My Journey Through Art",
      intro: "Hey there! I'm a passionate manga artist who believes that every stroke tells a story. My journey started with simple doodles and grew into a full adventure of creating worlds and characters.",
      location: "Grand Line, New World",
      experience: "10+ Years Drawing",
      specialties: ["Character Design", "Action Scenes", "Emotional Storytelling", "Comic Panels"],
      timeline: [
        {
          year: "2014",
          title: "First Sketch",
          description: "Started drawing my favorite characters from manga and anime"
        },
        {
          year: "2016",
          title: "Art School",
          description: "Enrolled in formal art education to improve my techniques"
        },
        {
          year: "2018",
          title: "Digital Transition",
          description: "Began creating digital artwork and exploring new mediums"
        },
        {
          year: "2020",
          title: "First Commission",
          description: "Received my first paid commission for original character design"
        },
        {
          year: "2022",
          title: "Professional Artist",
          description: "Became a full-time manga artist with regular clients"
        },
        {
          year: "2024",
          title: "Current Adventures",
          description: "Continuing to create amazing art and inspire others"
        }
      ]
    },
    jp: {
      title: "アーティストについて",
      subtitle: "アートを通じた私の旅",
      intro: "こんにちは！私は一筆一筆にストーリーがあると信じている情熱的なマンガアーティストです。私の旅は単純な落書きから始まり、世界とキャラクターを創造する冒険へと成長しました。",
      location: "グランドライン、新世界",
      experience: "10年以上の描画経験",
      specialties: ["キャラクターデザイン", "アクションシーン", "感情的なストーリーテリング", "コミックパネル"],
      timeline: [
        {
          year: "2014",
          title: "最初のスケッチ",
          description: "マンガやアニメの好きなキャラクターを描き始めました"
        },
        {
          year: "2016",
          title: "美術学校",
          description: "技術向上のため正式な美術教育に入学しました"
        },
        {
          year: "2018",
          title: "デジタル移行",
          description: "デジタルアートワークの制作を開始し、新しいメディアを探求しました"
        },
        {
          year: "2020",
          title: "初の依頼",
          description: "オリジナルキャラクターデザインで初の有料依頼を受けました"
        },
        {
          year: "2022",
          title: "プロのアーティスト",
          description: "定期的なクライアントを持つフルタイムのマンガアーティストになりました"
        },
        {
          year: "2024",
          title: "現在の冒険",
          description: "素晴らしいアートを作り続け、他の人にインスピレーションを与えています"
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Fredericka_the_Great'] text-[#1a1a1a] mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-[#ff3131] font-['Rock_Salt']">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Artist Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Character Avatar */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#ff9f1c] to-[#ff3131] rounded-3xl p-8 border-4 border-[#1a1a1a] shadow-2xl">
                <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center text-8xl border-4 border-[#1a1a1a]">
                  🎨
                </div>
              </div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-2 border-4 border-[#1a1a1a]"
              >
                <Palette className="w-6 h-6 text-[#1a1a1a]" />
              </motion.div>
            </div>

            {/* Bio Text */}
            <div className="bg-[#f7f3ec] rounded-2xl p-6 border-4 border-[#1a1a1a] shadow-lg">
              <p className="text-lg font-['Kalam'] text-[#1a1a1a] leading-relaxed">
                {content[language].intro}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border-4 border-[#1a1a1a] shadow-lg text-center">
                <MapPin className="w-8 h-8 text-[#ff3131] mx-auto mb-2" />
                <p className="font-bold font-['Kalam'] text-[#1a1a1a]">
                  {content[language].location}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 border-4 border-[#1a1a1a] shadow-lg text-center">
                <Award className="w-8 h-8 text-[#ff3131] mx-auto mb-2" />
                <p className="font-bold font-['Kalam'] text-[#1a1a1a]">
                  {content[language].experience}
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-2xl p-6 border-4 border-[#1a1a1a] shadow-lg">
              <h3 className="text-xl font-bold font-['Kalam'] text-[#1a1a1a] mb-4">
                {language === 'en' ? 'Specialties' : '専門分野'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content[language].specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#ff3131] text-white rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-['Kalam'] text-[#1a1a1a] mb-8">
              {language === 'en' ? 'My Journey' : '私の旅'}
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#ff3131] rounded-full"></div>

              {content[language].timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6 mb-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-12 h-12 bg-[#ff3131] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 border-4 border-[#1a1a1a] shadow-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold font-['Rock_Salt'] text-[#ff3131]">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold font-['Kalam'] text-[#1a1a1a]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#1a1a1a] font-['Kalam']">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;