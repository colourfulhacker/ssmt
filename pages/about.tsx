import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { 
  FaRocket, FaUsers, FaHandshake, FaAward, FaShieldAlt, 
  FaGraduationCap, FaBrain, FaCheckCircle, FaStar, FaHeart,
  FaLightbulb, FaChartLine
} from 'react-icons/fa';

const coreValues = [
  {
    title: 'End-to-End Expertise',
    description: 'From staffing to skill development to consulting — we provide complete IT solutions under one roof.',
    icon: FaCheckCircle,
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Cybersecurity Focus',
    description: 'Specialized expertise in security talent, training programs, and enterprise security solutions.',
    icon: FaShieldAlt,
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Industry Partnerships',
    description: 'Collaborating with IT firms, colleges, universities, and enterprises for mutual growth.',
    icon: FaHandshake,
    color: 'from-indigo-600 to-purple-600'
  },
  {
    title: 'Placement Support',
    description: 'We don\'t just train — we help you get hired with dedicated career enablement support.',
    icon: FaRocket,
    color: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Customized Learning',
    description: 'Programs aligned with career goals and company needs, not one-size-fits-all solutions.',
    icon: FaLightbulb,
    color: 'from-orange-600 to-red-600'
  },
  {
    title: 'Quality Assurance',
    description: 'We create real-world professionals, not just certificate holders, through hands-on training.',
    icon: FaAward,
    color: 'from-pink-600 to-rose-600'
  },
];

const stats = [
  { icon: FaUsers, number: '500+', label: 'IT Professionals Placed', color: 'text-blue-600' },
  { icon: FaGraduationCap, number: '1000+', label: 'Students Trained', color: 'text-purple-600' },
  { icon: FaHandshake, number: '50+', label: 'Corporate Clients', color: 'text-indigo-600' },
  { icon: FaStar, number: '98%', label: 'Placement Success Rate', color: 'text-pink-600' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us - SSMT Solutions"
        description="SSMT Solutions is a trusted name in IT Staffing, Cybersecurity Training, and Consulting Services. Bridging the skill gap with expert talent and industry-driven programs."
        keywords="about SSMT Solutions, IT staffing company, cybersecurity training, IT consulting, tech talent solutions"
      />
      <StructuredData type="organization" />
      <StructuredData 
        type="breadcrumb" 
        breadcrumbs={[
          { name: 'Home', url: 'https://ssmtsolutions.com/' },
          { name: 'About Us', url: 'https://ssmtsolutions.com/about' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="text-sm font-semibold">🚀 Your Trusted Technology Partner</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">About SSMT Solutions</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
              Empowering individuals with future-ready skills and enabling businesses with the right talent and solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Are</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SSMT Solutions is a <strong>trusted name in IT Staffing, Cybersecurity Training, and Consulting Services</strong>. 
                We are dedicated to bridging the skill gap in the technology industry by connecting companies with skilled 
                professionals and preparing the next generation of cybersecurity experts through hands-on, industry-driven training programs.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is simple — <strong>Empower individuals with future-ready skills and enable businesses with 
                the right talent and solutions</strong>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">IT Staffing Excellence</h4>
                    <p className="text-gray-600">Pre-vetted professionals for contract, full-time, and project-based work</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Cybersecurity Training</h4>
                    <p className="text-gray-600">Creating real-world professionals with hands-on, practical programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <FaBrain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">IT Consulting</h4>
                    <p className="text-gray-600">Strategic guidance for security posture and technology excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" 
                  alt="SSMT Solutions Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <StatIcon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
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
              The values that drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <ValueIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted across diverse industries for technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '🏦', name: 'Banking & Finance' },
              { icon: '🏥', name: 'Healthcare' },
              { icon: '💻', name: 'IT & Software' },
              { icon: '🏫', name: 'Colleges & Universities' },
              { icon: '🚚', name: 'Logistics & Manufacturing' },
              { icon: '🧠', name: 'EdTech & Startups' },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Whether you need IT talent, want to upskill your team, or require strategic consulting — let's work together to achieve your goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Get in Touch
              </Link>
              <Link href="/services" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
