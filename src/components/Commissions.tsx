import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Star, Zap, Crown, Send, CheckCircle } from 'lucide-react';

interface CommissionsProps {
  language: 'en' | 'jp';
}

const Commissions: React.FC<CommissionsProps> = ({ language }) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    description: '',
    deadline: '',
    reference: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      title: "Commission Your Dream Art",
      subtitle: "Bring Your Ideas to Life",
      packages: [
        {
          id: 'sketch',
          name: 'Sketch Package',
          price: '$25',
          icon: Palette,
          features: [
            'Black & white sketch',
            'Character design',
            'Basic background',
            '2-3 revisions',
            '3-5 days delivery'
          ],
          color: 'from-gray-400 to-gray-600'
        },
        {
          id: 'colored',
          name: 'Full Color',
          price: '$75',
          icon: Star,
          features: [
            'Full color illustration',
            'Detailed character design',
            'Complex background',
            '5 revisions',
            '7-10 days delivery'
          ],
          color: 'from-blue-400 to-blue-600',
          popular: true
        },
        {
          id: 'digital',
          name: 'Digital Master',
          price: '$150',
          icon: Zap,
          features: [
            'High-res digital art',
            'Multiple poses/expressions',
            'Detailed background',
            'Unlimited revisions',
            '14-21 days delivery'
          ],
          color: 'from-purple-400 to-purple-600'
        },
        {
          id: 'premium',
          name: 'Premium Package',
          price: '$300',
          icon: Crown,
          features: [
            'Complete character sheet',
            'Multiple illustrations',
            'Commercial license',
            'Priority support',
            '21-30 days delivery'
          ],
          color: 'from-yellow-400 to-yellow-600'
        }
      ],
      form: {
        title: 'Commission Request Form',
        name: 'Your Name',
        email: 'Email Address',
        package: 'Select Package',
        description: 'Describe Your Vision',
        deadline: 'Preferred Deadline',
        reference: 'Reference Images (Optional)',
        submit: 'Send Request',
        success: 'Thank you! Your commission request has been sent!'
      }
    },
    jp: {
      title: "夢のアートを依頼する",
      subtitle: "あなたのアイデアを実現させる",
      packages: [
        {
          id: 'sketch',
          name: 'スケッチパッケージ',
          price: '¥2,500',
          icon: Palette,
          features: [
            '白黒スケッチ',
            'キャラクターデザイン',
            '基本背景',
            '2-3回修正',
            '3-5日納期'
          ],
          color: 'from-gray-400 to-gray-600'
        },
        {
          id: 'colored',
          name: 'フルカラー',
          price: '¥7,500',
          icon: Star,
          features: [
            'フルカラーイラスト',
            '詳細キャラクターデザイン',
            '複雑な背景',
            '5回修正',
            '7-10日納期'
          ],
          color: 'from-blue-400 to-blue-600',
          popular: true
        },
        {
          id: 'digital',
          name: 'デジタルマスター',
          price: '¥15,000',
          icon: Zap,
          features: [
            '高解像度デジタルアート',
            '複数ポーズ/表情',
            '詳細背景',
            '無制限修正',
            '14-21日納期'
          ],
          color: 'from-purple-400 to-purple-600'
        },
        {
          id: 'premium',
          name: 'プレミアムパッケージ',
          price: '¥30,000',
          icon: Crown,
          features: [
            '完全キャラクターシート',
            '複数イラスト',
            '商用ライセンス',
            '優先サポート',
            '21-30日納期'
          ],
          color: 'from-yellow-400 to-yellow-600'
        }
      ],
      form: {
        title: '依頼リクエストフォーム',
        name: 'お名前',
        email: 'メールアドレス',
        package: 'パッケージを選択',
        description: 'ご希望の内容を記述',
        deadline: '希望納期',
        reference: '参考画像（任意）',
        submit: 'リクエストを送信',
        success: 'ありがとうございます！依頼リクエストが送信されました！'
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="commissions" className="py-20 bg-[#f7f3ec]">
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

        {/* Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {content[language].packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-3xl p-6 border-4 border-[#1a1a1a] shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-[#ff3131]' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff3131] text-white px-4 py-1 rounded-full text-sm font-bold">
                  {language === 'en' ? 'POPULAR' : '人気'}
                </div>
              )}

              {/* Package Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center shadow-lg`}>
                <pkg.icon className="w-8 h-8 text-white" />
              </div>

              {/* Package Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold font-['Rock_Salt'] text-[#ff3131] mb-4">
                  {pkg.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm font-['Kalam'] text-[#1a1a1a]">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Select Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedPackage(pkg.id);
                  setFormData({ ...formData, package: pkg.name });
                }}
                className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 border-4 border-[#1a1a1a] ${
                  selectedPackage === pkg.id
                    ? 'bg-[#ff3131] text-white'
                    : 'bg-white text-[#1a1a1a] hover:bg-[#ff3131] hover:text-white'
                }`}
              >
                {language === 'en' ? 'Select' : '選択'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Commission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 border-4 border-[#1a1a1a] shadow-2xl">
            <h3 className="text-2xl font-bold font-['Kalam'] text-[#1a1a1a] mb-8 text-center">
              {content[language].form.title}
            </h3>

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
                    {content[language].form.package}
                  </label>
                  <select
                    name="package"
                    required
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam']"
                  >
                    <option value="">
                      {language === 'en' ? 'Choose a package...' : 'パッケージを選択...'}
                    </option>
                    {content[language].packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} - {pkg.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                    {content[language].form.description}
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam'] resize-none"
                    placeholder={language === 'en' 
                      ? 'Tell me about your vision, character details, preferred style, etc...' 
                      : 'あなたのビジョン、キャラクターの詳細、好みのスタイルなどを教えてください...'}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                      {content[language].form.deadline}
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam']"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                      {content[language].form.reference}
                    </label>
                    <input
                      type="url"
                      name="reference"
                      value={formData.reference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-4 border-[#c4bcb3] focus:border-[#ff3131] outline-none transition-colors duration-300 font-['Kalam']"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-[#ff3131] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-['Kalam'] border-4 border-[#1a1a1a]"
                >
                  <Send className="w-5 h-5" />
                  {content[language].form.submit}
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
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold font-['Kalam'] text-[#1a1a1a] mb-2">
                  {content[language].form.success}
                </h3>
                <p className="text-[#1a1a1a] font-['Kalam']">
                  {language === 'en' 
                    ? "I'll get back to you within 24 hours!" 
                    : "24時間以内にご連絡いたします！"}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commissions;