import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import WhatsAppLeadForm from '../components/WhatsAppLeadForm';
import { 
  FaUsers, FaShieldAlt, FaBrain, FaGraduationCap, FaCertificate, 
  FaLaptopCode, FaRocket, FaCheckCircle, FaAward, FaHandshake,
  FaCloud, FaLock, FaCode, FaChartLine, FaUserTie, FaStar
} from 'react-icons/fa';

const coreServices = [
  {
    icon: FaUsers,
    title: 'IT Staffing & Resource Augmentation',
    description: 'Scale faster with pre-vetted, highly skilled IT professionals available for contract, full-time, or project-based engagements.',
    gradient: 'from-blue-600 to-cyan-600',
    features: [
      'Cybersecurity & Network Security Engineers',
      'Cloud, DevOps & SRE Experts',
      'Software Developers (Full Stack, Java, Python, .NET)',
      'AI, ML & Data Analytics Professionals'
    ],
    link: '/services'
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity Training & Career Enablement',
    description: 'Advanced, practical, and certification-aligned training programs designed to create real-world cybersecurity professionals.',
    gradient: 'from-purple-600 to-pink-600',
    features: [
      'Penetration Testing & Ethical Hacking',
      'SOC (Security Operations Center) Analyst',
      'DevSecOps & MLOps Security',
      'Cloud Security (AWS, Azure)'
    ],
    link: '/training'
  },
  {
    icon: FaBrain,
    title: 'Consulting & IT Advisory Services',
    description: 'Deep expertise in Cybersecurity Architecture, DevSecOps Integration, and Cloud Governance to improve your security posture.',
    gradient: 'from-indigo-600 to-purple-600',
    features: [
      'Security Risk Assessments',
      'Cloud & Infrastructure Security',
      'SOC Setup & Automation',
      'GRC & ISO 27001 Compliance'
    ],
    link: '/services'
  }
];

const stats = [
  { icon: FaUserTie, number: '500+', label: 'IT Professionals Placed', color: 'text-blue-600' },
  { icon: FaGraduationCap, number: '1000+', label: 'Students Trained', color: 'text-purple-600' },
  { icon: FaAward, number: '50+', label: 'Corporate Clients', color: 'text-pink-600' },
  { icon: FaStar, number: '98%', label: 'Success Rate', color: 'text-indigo-600' },
];

const industries = [
  { icon: FaLock, name: 'Banking & Finance', desc: 'Secure financial solutions' },
  { icon: FaShieldAlt, name: 'Healthcare', desc: 'HIPAA-compliant systems' },
  { icon: FaCode, name: 'IT & Software', desc: 'Tech talent solutions' },
  { icon: FaGraduationCap, name: 'Education', desc: 'University partnerships' },
  { icon: FaCloud, name: 'Logistics', desc: 'Cloud infrastructure' },
  { icon: FaRocket, name: 'Startups', desc: 'Rapid scaling support' },
];

const whyChooseUs = [
  {
    icon: FaCheckCircle,
    title: 'End-to-End Expertise',
    description: 'From Staffing to Skill Development to Consulting - complete IT solutions.',
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity Focus',
    description: 'Specialized in security talent, training, and enterprise security solutions.',
  },
  {
    icon: FaHandshake,
    title: 'Industry Partnerships',
    description: 'Working with IT firms, colleges, and enterprises for mutual growth.',
  },
  {
    icon: FaRocket,
    title: 'Placement Support',
    description: 'We don\'t just train - we help you get hired with dedicated career support.',
  },
];

export default function Home() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % coreServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="IT Staffing, Cybersecurity Training & Consulting Services"
        description="SSMT Solutions: Trusted IT Staffing, Cybersecurity Training & Consulting Services. Bridging the skill gap with expert talent, hands-on training, and strategic IT advisory."
        keywords="IT staffing, cybersecurity training, IT consulting, security talent, SOC training, penetration testing, cloud security, DevSecOps, IT placement, career enablement"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90"></div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <span className="text-sm font-semibold">🚀 Empowering Tech Careers & Businesses</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Your Complete
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Partner
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Bridging the skill gap with <span className="font-bold text-white">IT Staffing</span>, 
                <span className="font-bold text-white"> Cybersecurity Training</span>, and 
                <span className="font-bold text-white"> IT Consulting</span>.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">
                  Our Services
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {(() => {
                    const ServiceIcon = coreServices[currentService].icon;
                    return (
                      <>
                        <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${coreServices[currentService].gradient} rounded-2xl mb-6 shadow-lg`}>
                          <ServiceIcon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{coreServices[currentService].title}</h3>
                        <p className="text-lg text-gray-200 mb-6">{coreServices[currentService].description}</p>
                        <ul className="space-y-3 mb-6">
                          {coreServices[currentService].features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-200">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link 
                          href={coreServices[currentService].link}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                          Learn More <FaRocket className="w-4 h-4" />
                        </Link>
                      </>
                    );
                  })()}
                </motion.div>

                <div className="flex gap-2 mt-8 justify-center">
                  {coreServices.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentService(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentService ? 'w-12 bg-cyan-400' : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
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
              Our Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offerings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end expertise in IT Staffing, Cybersecurity Training, and Technology Consulting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.link}
                      className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                    >
                      Explore Service <FaRocket className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SSMT Solutions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for complete technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Industries We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{industry.name}</h4>
                  <p className="text-xs text-gray-600">{industry.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with WhatsApp Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span> Your Career or Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join hundreds of professionals and companies who trust SSMT Solutions for their technology needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Instant Response</h4>
                    <p className="text-gray-600">Connect with our experts via WhatsApp for quick answers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <FaHandshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Personalized Solutions</h4>
                    <p className="text-gray-600">Customized staffing, training, and consulting services</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <FaRocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fast Delivery</h4>
                    <p className="text-gray-600">Quick turnaround for all your IT needs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <WhatsAppLeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empower Individuals. Enable Businesses.
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Our mission is to bridge the skill gap and connect companies with the right talent and solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/training" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Explore Training Programs
              </Link>
              <Link href="/contact" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Request IT Staffing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
