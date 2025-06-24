import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ThumbsUp, Star } from 'lucide-react';

interface FanWallProps {
  language: 'en' | 'jp';
}

interface Comment {
  id: number;
  name: string;
  avatar: string;
  message: string;
  messageJp: string;
  likes: number;
  time: string;
  replied?: boolean;
}

const FanWall: React.FC<FanWallProps> = ({ language }) => {
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());

  const content = {
    en: {
      title: "Fan Wall",
      subtitle: "Messages from Fellow Adventurers",
      likeButton: "Like",
      replyButton: "Reply"
    },
    jp: {
      title: "ファンウォール",
      subtitle: "仲間の冒険者からのメッセージ",
      likeButton: "いいね",
      replyButton: "返信"
    }
  };

  const comments: Comment[] = [
    {
      id: 1,
      name: "Nami Navigator",
      avatar: "🧡",
      message: "Your art style is absolutely amazing! The way you capture emotions in your characters is incredible. Keep up the fantastic work!",
      messageJp: "あなたのアートスタイルは本当に素晴らしいです！キャラクターの感情をとらえる方法が信じられません。素晴らしい仕事を続けてください！",
      likes: 23,
      time: "2 hours ago",
      replied: true
    },
    {
      id: 2,
      name: "Zoro Swordsman",
      avatar: "⚔️",
      message: "The action scenes you draw are so dynamic! I can feel the power behind every move. Your commission was perfect!",
      messageJp: "あなたが描くアクションシーンはとてもダイナミックです！すべての動きの背後にある力を感じることができます。あなたの委託は完璧でした！",
      likes: 18,
      time: "5 hours ago"
    },
    {
      id: 3,
      name: "Sanji Cook",
      avatar: "🍳",
      message: "Your artwork always makes me smile! The details you put into each piece are extraordinary. Thank you for sharing your talent!",
      messageJp: "あなたのアートワークはいつも私を笑顔にしてくれます！各作品に込めた詳細は並外れています。あなたの才能を共有してくれてありがとう！",
      likes: 31,
      time: "1 day ago"
    },
    {
      id: 4,
      name: "Usopp Sniper",
      avatar: "🎯",
      message: "I've been following your work for years and it just keeps getting better! Your latest pieces are your best yet!",
      messageJp: "何年もあなたの作品をフォローしていますが、それはどんどん良くなっています！あなたの最新作品は今までで最高です！",
      likes: 42,
      time: "2 days ago",
      replied: true
    },
    {
      id: 5,
      name: "Chopper Doctor",
      avatar: "🦌",
      message: "Your art inspires me to keep practicing! One day I hope to create something as beautiful as your work!",
      messageJp: "あなたのアートは私に練習を続けるよう促します！いつの日か、あなたの作品のように美しいものを作りたいと思います！",
      likes: 15,
      time: "3 days ago"
    },
    {
      id: 6,
      name: "Robin Archaeologist",
      avatar: "📚",
      message: "The storytelling in your artwork is phenomenal. Each piece tells a complete story without words. Truly masterful!",
      messageJp: "あなたのアートワークのストーリーテリングは驚異的です。各作品は言葉なしで完全な物語を語ります。本当に巧妙です！",
      likes: 37,
      time: "1 week ago"
    }
  ];

  const toggleLike = (commentId: number) => {
    setLikedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  return (
    <section id="fanwall" className="py-20 bg-white">
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

        {/* Comments */}
        <div className="max-w-4xl mx-auto space-y-6">
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
            >
              {/* Speech Bubble */}
              <div className={`relative bg-[#f7f3ec] rounded-3xl p-6 border-4 border-[#1a1a1a] shadow-lg ${
                index % 2 === 0 ? 'rounded-bl-none' : 'rounded-br-none'
              }`}>
                {/* Comment Content */}
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl border-4 border-[#1a1a1a] shadow-md">
                    {comment.avatar}
                  </div>

                  {/* Message */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold font-['Kalam'] text-[#1a1a1a]">
                        {comment.name}
                      </h4>
                      <span className="text-sm text-gray-500 font-['Kalam']">
                        {comment.time}
                      </span>
                      {comment.replied && (
                        <span className="bg-[#ff3131] text-white text-xs px-2 py-1 rounded-full font-bold">
                          {language === 'en' ? 'REPLIED' : '返信済み'}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-[#1a1a1a] font-['Kalam'] leading-relaxed mb-4">
                      {language === 'en' ? comment.message : comment.messageJp}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLike(comment.id)}
                        className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#ff3131] transition-colors duration-200"
                      >
                        <motion.div
                          animate={likedComments.has(comment.id) ? { scale: [1, 1.3, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          <Heart 
                            className={`w-5 h-5 ${
                              likedComments.has(comment.id) 
                                ? 'fill-[#ff3131] text-[#ff3131]' 
                                : 'text-[#1a1a1a]'
                            }`} 
                          />
                        </motion.div>
                        <span className="font-medium font-['Kalam']">
                          {comment.likes + (likedComments.has(comment.id) ? 1 : 0)}
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#ff3131] transition-colors duration-200"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium font-['Kalam']">
                          {content[language].replyButton}
                        </span>
                      </motion.button>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star 
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speech Bubble Tail */}
                <div className={`absolute bottom-0 w-0 h-0 ${
                  index % 2 === 0 
                    ? 'left-6 border-l-0 border-r-8 border-t-8 border-r-transparent border-t-[#1a1a1a] transform translate-y-full'
                    : 'right-6 border-r-0 border-l-8 border-t-8 border-l-transparent border-t-[#1a1a1a] transform translate-y-full'
                }`}></div>
                <div className={`absolute bottom-0 w-0 h-0 ${
                  index % 2 === 0 
                    ? 'left-6 border-l-0 border-r-6 border-t-6 border-r-transparent border-t-[#f7f3ec] transform translate-y-3'
                    : 'right-6 border-r-0 border-l-6 border-t-6 border-l-transparent border-t-[#f7f3ec] transform translate-y-3'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#ff3131] to-[#ff9f1c] rounded-3xl p-8 border-4 border-[#1a1a1a] shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-['Kalam'] text-white mb-4">
              {language === 'en' 
                ? "Want to share your thoughts?" 
                : "あなたの考えを共有したいですか？"}
            </h3>
            <p className="text-white font-['Kalam'] mb-6">
              {language === 'en' 
                ? "Follow me on social media and join our amazing community!" 
                : "ソーシャルメディアで私をフォローして、素晴らしいコミュニティに参加してください！"}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#ff3131] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-['Kalam'] border-4 border-[#1a1a1a]"
            >
              {language === 'en' ? "Join the Adventure!" : "冒険に参加しよう！"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FanWall;