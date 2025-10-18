import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import FactsSlider from '../components/FactsSlider';
import { FaCloud, FaShieldAlt, FaChartLine, FaRocket, FaCode, FaDatabase, FaBrain, FaServer, FaNetworkWired, FaCubes, FaLock, FaCogs } from 'react-icons/fa';

const abcdeModel = [
  {
    letter: 'A',
    title: 'AI & ML Solutions',
    description: 'Artificial Intelligence and Machine Learning',
    icon: FaBrain,
    color: 'from-blue-500 to-blue-600',
    details: ['Generative AI', 'NLP & LLMs', 'Deep Learning', 'Computer Vision'],
  },
  {
    letter: 'B',
    title: 'Blockchain & Networking',
    description: 'Decentralized Solutions and Network Architecture',
    icon: FaNetworkWired,
    color: 'from-purple-500 to-purple-600',
    details: ['Smart Contracts', 'DApps', 'Network Security', 'Infrastructure'],
  },
  {
    letter: 'C',
    title: 'Cloud & Cybersecurity',
    description: 'Cloud Computing and Security Solutions',
    icon: FaLock,
    color: 'from-pink-500 to-pink-600',
    details: ['AWS, Azure, GCP', 'Cloud Migration', 'Security Audit', 'Compliance'],
  },
  {
    letter: 'D',
    title: 'Data Engineering & DevOps',
    description: 'Data Pipelines, DevOps & DevSecOps',
    icon: FaDatabase,
    color: 'from-indigo-500 to-indigo-600',
    details: ['ETL Pipelines', 'CI/CD', 'Container Orchestration', 'Infrastructure as Code'],
  },
  {
    letter: 'E',
    title: 'Enterprise Management',
    description: 'Business Solutions and Digital Transformation',
    icon: FaCogs,
    color: 'from-cyan-500 to-cyan-600',
    details: ['ERP Systems', 'CRM Solutions', 'Process Automation', 'Digital Strategy'],
  },
];

const technologies = [
  {
    title: 'Software Development',
    icon: FaCode,
    skills: ['Full-Stack', 'Java', 'Spring Boot', 'Python', 'Django', '.NET', 'Angular', 'MERN', 'MEAN'],
  },
  {
    title: 'Data Engineering & Analytics',
    icon: FaDatabase,
    skills: ['Python', 'SQL', 'Databricks', 'Snowflake', 'Apache Spark', 'Azure Data Factory', 'Power BI', 'Tableau', 'DBT'],
  },
  {
    title: 'Data Science & AI',
    icon: FaBrain,
    skills: ['Generative AI', 'NLP', 'LLMs', 'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI', 'Scikit-learn'],
  },
  {
    title: 'DevOps & Cloud',
    icon: FaServer,
    skills: ['AWS', 'Azure', 'GCP', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
];

const values = [
  { title: 'Excellence', description: 'Delivering superior quality in every project', icon: FaRocket },
  { title: 'Agility', description: 'Adapting quickly to changing needs', icon: FaChartLine },
  { title: 'Integrity', description: 'Maintaining ethical standards always', icon: FaShieldAlt },
  { title: 'Innovation', description: 'Driving creative solutions forward', icon: FaCloud },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % abcdeModel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="SSMT Solutions - Driving Growth with ABCDE Model: AI & ML, Blockchain & Networking, Cloud & Cybersecurity, Data Engineering & DevOps, Enterprise Management. Leading tech solutions provider in Bengaluru."
        keywords="SSMT Solutions, ABCDE model, AI ML solutions, blockchain, cloud computing, cybersecurity, data engineering, DevOps, DevSecOps, enterprise management, Bengaluru, Karnataka"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData 
        type="breadcrumb" 
        breadcrumbs={[
          { name: 'Home', url: 'https://ssmtsolutions.com/' }
        ]} 
      />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Driving Growth with
              <br />
              <span className="gradient-text">ABCDE Model</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
              Your Complete Technology Partner for Digital Transformation
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="relative h-80 md:h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className={`bg-gradient-to-br ${abcdeModel[currentIndex].color} rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full transform hover:scale-105 transition-transform`}>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {abcdeModel[currentIndex].letter}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 text-white text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-3">
                          {abcdeModel[currentIndex].title}
                        </h2>
                        <p className="text-lg md:text-xl mb-6 opacity-90">
                          {abcdeModel[currentIndex].description}
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                          {abcdeModel[currentIndex].details.map((detail, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {abcdeModel.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-12 h-12 rounded-full font-bold text-lg transition-all ${
                    idx === currentIndex
                      ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white scale-110 shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.letter}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/get-quote" className="btn-primary">
              Get Started
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <FactsSlider />
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by principles that drive measurable outcomes and lasting partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technologies & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building smarter, data-driven solutions with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-200 border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Business?</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Let&apos;s collaborate to bring your digital vision to life with innovative solutions
            </p>
            <Link href="/get-quote" className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 text-lg">
              Get Started →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
