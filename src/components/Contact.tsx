import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Clock, Mail, MessageSquare, CheckCircle, Instagram, Twitter, Palette, Globe } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'jp';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      title: "Let's Connect!",
      subtitle: "Ready to Start Your Art Adventure?",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        success: "Thank you! Your message has been sent successfully!"
      },
      info: {
        location: "Grand Line, New World",
        hours: "Available 24/7 for adventures",
        email: "luffy@artstudio.com",
        response: "Usually responds within 2-4 hours"
      },
      social: {
        title: "Follow My Adventures",
        instagram: "@luffyartstudio",
        twitter: "@luffyart",
        pixiv: "LuffyArtist",
        artstation: "luffy-manga-art"
      }
    },
    jp: {
      title: "つながろう！",
      subtitle: "アートの冒険を始める準備はできましたか？",
      form: {
        name: "お名前",
        email: "メールアドレス",
        subject: "件名",
        message: "メッセージ",
        send: "メッセージを送信",
        success: "ありがとうございます！メッセージが正常に送信されました！"
      },
      info: {
        location: "グランドライン、新世界",
        hours: "冒険のため24時間365日利用可能",
        email: "luffy@artstudio.com",
        response: "通常2-4時間以内に返信します"
      },
      social: {
        title: "私の冒険をフォロー",
        instagram: "@luffyartstudio",
        twitter: "@luffyart",
        pixiv: "LuffyArtist",
        artstation: "luffy-manga-art"
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: content[language].social.instagram, color: 'from-pink-400 to-purple-600' },
    { icon: Twitter, name: 'Twitter', handle: content[language].social.twitter, color: 'from-blue-400 to-blue-600' },
    { icon: Palette, name: 'Pixiv', handle: content[language].social.pixiv, color: 'from-blue-500 to-teal-500' },
    { icon: Globe, name: 'ArtStation', handle: content[language].social.artstation, color: 'from-gray-600 to-gray-800' }
  ];

  return (
    <section id="contact" className="py-20 bg-[#f7f3ec]">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 border-4 border-[#1a1a1a] shadow-2xl"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                      {content[language].form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam']"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                      {content[language].form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam']"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                    {content[language].form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam']"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                    {content[language].form.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam'] resize-none"
                    placeholder={language === 'en' 
                      ? 'Tell me about your project, questions, or just say hello!' 
                      : 'あなたのプロジェクト、質問について教えてください、または単にこんにちは！'}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-[#ff3131] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-['Kalam'] border-4 border-[#1a1a1a]"
                >
                  <Send className="w-5 h-5" />
                  {content[language].form.send}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold font-['Kalam'] text-[#1a1a1a] mb-4">
                  {content[language].form.success}
                </h3>
                <p className="text-[#1a1a1a] font-['Kalam']">
                  {language === 'en' 
                    ? "I'll get back to you as soon as possible!" 
                    : "できるだけ早くご連絡いたします！"}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 border-4 border-[#1a1a1a] shadow-2xl">
              <h3 className="text-2xl font-bold font-['Kalam'] text-[#1a1a1a] mb-6">
                {language === 'en' ? 'Get in Touch' : 'お問い合わせ'}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff3131] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold font-['Kalam'] text-[#1a1a1a]">
                      {language === 'en' ? 'Location' : '場所'}
                    </h4>
                    <p className="text-[#1a1a1a] font-['Kalam']">
                      {content[language].info.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff3131] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold font-['Kalam'] text-[#1a1a1a]">
                      {language === 'en' ? 'Availability' : '利用可能時間'}
                    </h4>
                    <p className="text-[#1a1a1a] font-['Kalam']">
                      {content[language].info.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff3131] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold font-['Kalam'] text-[#1a1a1a]">
                      {language === 'en' ? 'Email' : 'メール'}
                    </h4>
                    <p className="text-[#1a1a1a] font-['Kalam']">
                      {content[language].info.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff3131] rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold font-['Kalam'] text-[#1a1a1a]">
                      {language === 'en' ? 'Response Time' : '返信時間'}
                    </h4>
                    <p className="text-[#1a1a1a] font-['Kalam']">
                      {content[language].info.response}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 border-4 border-[#1a1a1a] shadow-2xl">
              <h3 className="text-2xl font-bold font-['Kalam'] text-[#1a1a1a] mb-6">
                {content[language].social.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative bg-gradient-to-r ${social.color} rounded-2xl p-4 text-white overflow-hidden border-4 border-[#1a1a1a] shadow-lg`}
                  >
                    <div className="relative z-10">
                      <social.icon className="w-8 h-8 mb-2" />
                      <p className="font-bold font-['Kalam'] text-sm">
                        {social.name}
                      </p>
                      <p className="text-xs opacity-90">
                        {social.handle}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;