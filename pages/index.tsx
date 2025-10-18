import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import CostCalculator from '../components/CostCalculator';
import WhatsAppLeadForm from '../components/WhatsAppLeadForm';
import { 
  FaBrain, FaNetworkWired, FaLock, FaDatabase, FaCogs,
  FaUsers, FaShieldAlt, FaGraduationCap, FaCode, FaChalkboardTeacher,
  FaHandshake, FaRocket, FaCheckCircle, FaAward, FaStar, FaUserTie,
  FaCloud, FaChartLine
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

const coreServices = [
  {
    icon: FaUsers,
    title: 'IT Staffing & Resource Augmentation',
    description: 'Scale faster with pre-vetted, highly skilled IT professionals for contract, full-time, or project-based engagements.',
    gradient: 'from-blue-600 to-cyan-600',
    features: [
      'Cybersecurity & Network Security Engineers',
      'Cloud, DevOps & SRE Experts',
      'Software Developers (Full Stack, Java, Python, .NET)',
      'AI, ML & Data Analytics Professionals'
    ]
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity Training & Career Enablement',
    description: 'Advanced, practical training programs to create real-world cybersecurity professionals - not just certificate holders.',
    gradient: 'from-purple-600 to-pink-600',
    features: [
      'Penetration Testing & Ethical Hacking',
      'SOC (Security Operations Center) Analyst',
      'DevSecOps & MLOps Security',
      'Cloud Security (AWS, Azure)'
    ]
  },
  {
    icon: FaBrain,
    title: 'IT Consulting & Advisory Services',
    description: 'Deep expertise in Cybersecurity Architecture, DevSecOps Integration, and Cloud Governance.',
    gradient: 'from-indigo-600 to-purple-600',
    features: [
      'Security Risk Assessments',
      'Cloud & Infrastructure Security',
      'SOC Setup & Automation',
      'GRC & ISO 27001 Compliance'
    ]
  }
];

const stats = [
  { icon: FaUserTie, number: '500+', label: 'IT Professionals Placed', color: 'text-blue-600' },
  { icon: FaGraduationCap, number: '1000+', label: 'Students Trained', color: 'text-purple-600' },
  { icon: FaAward, number: '50+', label: 'Corporate Clients', color: 'text-pink-600' },
  { icon: FaStar, number: '98%', label: 'Success Rate', color: 'text-indigo-600' },
];

const whyChooseUs = [
  { icon: FaCheckCircle, title: 'End-to-End Expertise', desc: 'Complete IT solutions' },
  { icon: FaShieldAlt, title: 'Cybersecurity Focus', desc: 'Security specialists' },
  { icon: FaRocket, title: 'Fast Delivery', desc: 'Quick turnaround' },
  { icon: FaAward, title: 'Proven Results', desc: '98% success rate' },
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
        title="IT Staffing, Cybersecurity Training & Consulting | SSMT Solutions"
        description="SSMT Solutions: IT Staffing, Cybersecurity Training & Consulting Services. Bridging the skill gap with expert talent, hands-on training, and strategic IT advisory. ABCDE technology solutions."
        keywords="IT staffing, cybersecurity training, IT consulting, security talent, SOC training, penetration testing, cloud security, DevSecOps, ABCDE model, AI ML solutions"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />

      {/* Hero Section with ABCDE Model */}
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
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                  Digital Transformation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bridging the skill gap with <strong>IT Staffing</strong>, <strong>Cybersecurity Training</strong>, and <strong>IT Consulting</strong>. Comprehensive ABCDE technology solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Our Services
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <StatIcon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                {(() => {
                  const CurrentIcon = abcdeModel[currentIndex].icon;
                  return (
                    <>
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
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end expertise in IT Staffing, Cybersecurity Training, and Technology Consulting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                    <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                    <div className="p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <ServiceIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            {whyChooseUs.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <ItemIcon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Cost Calculator & WhatsApp Form */}
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

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
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
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
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
