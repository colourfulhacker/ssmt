import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { FaGraduationCap, FaSearch, FaBook, FaLaptopCode, FaCertificate, FaUsers } from 'react-icons/fa';

const offerings = [
  {
    title: 'Hands-On Training Programs',
    description: 'Expert-led courses with practical, real-world applications in emerging technologies.',
    icon: FaLaptopCode,
  },
  {
    title: 'Research & Development',
    description: 'Cutting-edge research in AI, cloud computing, and digital transformation.',
    icon: FaSearch,
  },
  {
    title: 'Industry Certifications',
    description: 'Prepare for and achieve industry-recognized certifications with our guidance.',
    icon: FaCertificate,
  },
  {
    title: 'Customized Workshops',
    description: 'Tailored training sessions designed for your team\'s specific needs.',
    icon: FaUsers,
  },
  {
    title: 'Learning Resources',
    description: 'Access to comprehensive study materials, documentation, and best practices.',
    icon: FaBook,
  },
  {
    title: 'Mentorship Programs',
    description: 'One-on-one guidance from industry experts to accelerate your learning.',
    icon: FaGraduationCap,
  },
];

const researchAreas = [
  'Artificial Intelligence & Machine Learning',
  'Cloud Computing & Infrastructure',
  'Cybersecurity & Data Protection',
  'Data Engineering & Analytics',
  'Digital Marketing Strategies',
  'Enterprise Digital Transformation',
];

export default function TrainingResearch() {
  return (
    <>
      <SEO
        title="Training & Research"
        description="Advance your skills with SSMT Solutions training and research programs. Expert-led courses in AI, cloud, cybersecurity, data engineering, and more."
        keywords="IT training, research programs, professional development, technology courses, certification training, Bengaluru training"
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Training & Research</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Advance your skills and knowledge with expert-led programs and in-depth insights
            </p>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training and research solutions to keep you ahead of the curve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4">
                  <offering.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offering.description}</p>
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
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our research teams focus on cutting-edge technologies and emerging trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-md text-center"
              >
                <p className="text-gray-800 font-semibold">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Programs?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our training and research programs are designed by industry experts who understand the skills and knowledge required to succeed in today&apos;s fast-paced technology landscape.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We combine theoretical foundations with hands-on practical experience, ensuring you can immediately apply what you learn to real-world scenarios.
              </p>
              <Link href="/training">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  View Training Programs
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Industry-aligned curriculum updated regularly</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Live projects and case studies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Expert mentorship and guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible learning schedules</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Job placement assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lifetime access to learning resources</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Learning Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our programs and gain the skills you need to excel in your career
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
