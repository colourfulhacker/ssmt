import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaRocket, FaBrain, FaChartLine, FaLightbulb, FaTrophy, FaHeart, FaUsers, FaStar, FaFire, FaGem } from 'react-icons/fa';

const motivationalFacts = [
  {
    fact: 'Companies that invest in digital transformation are 26% more profitable than their competitors',
    category: 'Digital Growth',
    icon: FaChartLine,
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
  {
    fact: '85% of jobs that will exist in 2030 haven\'t been invented yet - continuous learning is the key',
    category: 'Future Skills',
    icon: FaBrain,
    gradient: 'from-purple-500 via-pink-500 to-red-500',
  },
  {
    fact: 'Data scientists and AI specialists see a 344% increase in demand over the past 4 years',
    category: 'Career Opportunity',
    icon: FaRocket,
    gradient: 'from-green-500 via-teal-500 to-blue-500',
  },
  {
    fact: 'Cybersecurity professionals are among the top 5 most sought-after tech roles globally',
    category: 'Industry Demand',
    icon: FaTrophy,
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
  },
  {
    fact: 'Organizations with strong data culture are 3x more likely to report significant business improvements',
    category: 'Data-Driven Success',
    icon: FaGem,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    fact: '70% of successful tech professionals attribute their growth to hands-on project experience',
    category: 'Practical Learning',
    icon: FaLightbulb,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
  },
  {
    fact: 'The global AI market is expected to reach $1.8 trillion by 2030, creating millions of opportunities',
    category: 'AI Revolution',
    icon: FaFire,
    gradient: 'from-red-500 via-pink-500 to-purple-500',
  },
  {
    fact: 'Cloud computing skills can boost your salary by up to 40% in the tech industry',
    category: 'Cloud Expertise',
    icon: FaStar,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
  },
  {
    fact: '92% of companies say they need more employees with digital skills to stay competitive',
    category: 'Market Need',
    icon: FaUsers,
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
  },
  {
    fact: 'DevOps practices can reduce deployment failures by 60% and recovery time by 168x',
    category: 'DevOps Impact',
    icon: FaRocket,
    gradient: 'from-orange-500 via-red-500 to-pink-500',
  },
  {
    fact: 'Learning new tech skills can increase job satisfaction by 58% and career fulfillment',
    category: 'Personal Growth',
    icon: FaHeart,
    gradient: 'from-pink-500 via-rose-500 to-red-500',
  },
  {
    fact: 'Professionals with multiple certifications earn 25% more than their non-certified peers',
    category: 'Certification Value',
    icon: FaTrophy,
    gradient: 'from-yellow-400 via-amber-500 to-orange-500',
  },
];

export default function FactsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % motivationalFacts.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const currentFact = motivationalFacts[currentIndex];
  const Icon = currentFact.icon;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % motivationalFacts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? motivationalFacts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className="relative py-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tech Industry Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover inspiring facts that drive innovation and career growth
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`relative p-12 bg-gradient-to-br ${currentFact.gradient} rounded-3xl shadow-2xl`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Icon className="w-12 h-12 md:w-14 md:h-14 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
                    {currentFact.category}
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                    {currentFact.fact}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="flex gap-1">
                  {motivationalFacts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous fact"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Next fact"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {currentIndex + 1} / {motivationalFacts.length}
          </p>
        </div>
      </div>
    </div>
  );
}
