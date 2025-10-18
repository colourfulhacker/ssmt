import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBuilding, FaUsers, FaProjectDiagram, FaAward, 
  FaChartLine, FaGlobe, FaCertificate, FaHandshake 
} from 'react-icons/fa';

const facts = [
  {
    icon: FaBuilding,
    stat: '10+',
    label: 'Years of Excellence',
    description: 'Delivering innovative technology solutions',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    icon: FaProjectDiagram,
    stat: '500+',
    label: 'Projects Delivered',
    description: 'Successfully completed across various industries',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: FaUsers,
    stat: '50+',
    label: 'Expert Team Members',
    description: 'Certified professionals and skilled developers',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    icon: FaHandshake,
    stat: '200+',
    label: 'Satisfied Clients',
    description: 'Long-term partnerships and repeat business',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    icon: FaChartLine,
    stat: '95%',
    label: 'Client Retention Rate',
    description: 'Building lasting relationships through quality',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    icon: FaGlobe,
    stat: '15+',
    label: 'Countries Served',
    description: 'Global reach with local expertise',
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    icon: FaCertificate,
    stat: '100+',
    label: 'Certifications',
    description: 'Industry-recognized credentials and expertise',
    gradient: 'from-pink-600 to-rose-600'
  },
  {
    icon: FaAward,
    stat: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance for critical needs',
    gradient: 'from-teal-600 to-green-600'
  },
];

export default function CompanyFactsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % facts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentFact = facts[currentIndex];
  const Icon = currentFact.icon;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      <div className="relative px-8 py-12 md:px-12 md:py-16">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${currentFact.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-3"
            >
              {currentFact.stat}
            </motion.h3>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-blue-200 mb-3"
            >
              {currentFact.label}
            </motion.p>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base text-gray-300 max-w-md"
            >
              {currentFact.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {facts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-white' 
                  : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to fact ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
