import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import CostCalculator from '../components/CostCalculator';
import WhatsAppLeadForm from '../components/WhatsAppLeadForm';
import { 
  FaBrain, FaNetworkWired, FaLock, FaDatabase, FaCogs, 
  FaCode, FaChalkboardTeacher, FaHandshake, FaUsers, 
  FaClock, FaAward, FaRocket, FaCheckCircle 
} from 'react-icons/fa';

const abcdeModel = [
  {
    letter: 'A',
    title: 'AI & ML Solutions',
    description: 'Artificial Intelligence and Machine Learning',
    icon: FaBrain,
    color: 'from-blue-600 to-blue-700',
    details: ['Generative AI', 'NLP & LLMs', 'Deep Learning', 'Computer Vision'],
  },
  {
    letter: 'B',
    title: 'Blockchain & Networking',
    description: 'Decentralized Solutions and Network Architecture',
    icon: FaNetworkWired,
    color: 'from-purple-600 to-purple-700',
    details: ['Smart Contracts', 'DApps', 'Network Security', 'Infrastructure'],
  },
  {
    letter: 'C',
    title: 'Cloud & Cybersecurity',
    description: 'Cloud Computing and Security Solutions',
    icon: FaLock,
    color: 'from-indigo-600 to-indigo-700',
    details: ['AWS, Azure, GCP', 'Cloud Migration', 'Security Audit', 'Compliance'],
  },
  {
    letter: 'D',
    title: 'Data Engineering & DevOps',
    description: 'Data Pipelines, DevOps & DevSecOps',
    icon: FaDatabase,
    color: 'from-cyan-600 to-cyan-700',
    details: ['ETL Pipelines', 'CI/CD', 'Container Orchestration', 'Infrastructure as Code'],
  },
  {
    letter: 'E',
    title: 'Enterprise Management',
    description: 'Business Solutions and Digital Transformation',
    icon: FaCogs,
    color: 'from-teal-600 to-teal-700',
    details: ['ERP Systems', 'CRM Solutions', 'Process Automation', 'Digital Strategy'],
  },
];

const services = [
  {
    icon: FaCode,
    title: 'Job Support Services',
    description: 'Hourly development support for working professionals facing complex projects and tight deadlines. Get expert help to excel in your role.',
    features: ['Hourly/Daily/Monthly Plans', 'Instant Problem Resolution', 'Performance Improvement', 'Promotion Support']
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Corporate Training',
    description: 'Comprehensive training programs to upskill employees and help professionals switch to better positions with market-ready skills.',
    features: ['Customized Curriculum', 'Expert Instructors', 'Placement Support', 'Certification']
  },
  {
    icon: FaHandshake,
    title: 'White-Label Partnerships',
    description: 'Partner with us to train students under your brand. We ensure quality training and market-ready professionals.',
    features: ['Your Branding', 'Quality Assurance', 'Flexible Programs', 'Scalable Solutions']
  },
  {
    icon: FaUsers,
    title: 'Development Consultancy',
    description: 'End-to-end development services and technical consultancy for enterprises looking for reliable technology partners.',
    features: ['Custom Development', 'Architecture Review', 'Code Audit', 'Technology Strategy']
  },
];

const whyChooseUs = [
  { icon: FaClock, title: 'American Standards', desc: 'World-class quality work' },
  { icon: FaAward, title: 'Indian Pricing', desc: 'Affordable for all budgets' },
  { icon: FaRocket, title: 'Fast Delivery', desc: 'Meet tight deadlines' },
  { icon: FaCheckCircle, title: 'Proven Results', desc: '100+ success stories' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % abcdeModel.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Professional IT Training, Job Support & Development Services"
        description="SSMT Solutions offers corporate training, job support services, white-label training partnerships, and development consultancy. American standard quality at Indian prices."
        keywords="IT training, job support, corporate training, development services, white-label training, technical consultancy, ABCDE model, affordable IT services India"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />

      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Complete Technology Partner for
                <span className="block text-blue-600 mt-2">Digital Transformation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional training, job support, and development services that combine American standards with Indian affordability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-quote" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${abcdeModel[currentIndex].color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl font-bold text-white">
                      {abcdeModel[currentIndex].letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {abcdeModel[currentIndex].title}
                    </h3>
                    <p className="text-sm text-gray-600">{abcdeModel[currentIndex].description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {abcdeModel[currentIndex].details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-6">
                  {abcdeModel.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                        idx === currentIndex
                          ? 'bg-blue-600 text-white scale-110 shadow-lg'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {item.letter}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Services for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From job support to corporate training and white-label partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSMT Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class quality meets affordability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <CostCalculator />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <WhatsAppLeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Accelerate Your Career or Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Join hundreds of professionals and companies who trust SSMT Solutions for their technology needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-quote" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </Link>
              <Link href="/training" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Explore Training Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
