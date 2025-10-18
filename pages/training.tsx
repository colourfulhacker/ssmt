import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import { FaShieldAlt, FaDatabase, FaBrain, FaServer, FaClock, FaCertificate } from 'react-icons/fa';

const trainings = [
  {
    title: 'Cybersecurity',
    status: 'On Going',
    description: 'Comprehensive training in penetration testing, SOC analysis, and security tools like Kali Linux, Wireshark, and Burp Suite.',
    icon: FaShieldAlt,
    color: 'from-red-500 to-pink-500',
    duration: '12 Weeks',
    level: 'Intermediate to Advanced',
  },
  {
    title: 'Data Engineering',
    status: 'Available',
    description: 'Master data pipelines, ETL processes, and tools like Databricks, Snowflake, Apache Spark, and Azure Data Factory.',
    icon: FaDatabase,
    color: 'from-blue-500 to-cyan-500',
    duration: '10 Weeks',
    level: 'Beginner to Intermediate',
  },
  {
    title: 'Data Science',
    status: 'Available',
    description: 'Learn machine learning, AI, NLP, and work with TensorFlow, PyTorch, and modern data science frameworks.',
    icon: FaBrain,
    color: 'from-purple-500 to-indigo-500',
    duration: '14 Weeks',
    level: 'Intermediate to Advanced',
  },
  {
    title: 'DevOps',
    status: 'Available',
    description: 'Master CI/CD, containerization, orchestration with Docker, Kubernetes, AWS, Azure, and automation tools.',
    icon: FaServer,
    color: 'from-green-500 to-teal-500',
    duration: '10 Weeks',
    level: 'Intermediate',
  },
];

const benefits = [
  {
    title: 'Industry Expert Instructors',
    description: 'Learn from professionals with real-world experience',
  },
  {
    title: 'Hands-on Projects',
    description: 'Build your portfolio with practical applications',
  },
  {
    title: 'Certification',
    description: 'Receive industry-recognized certificates upon completion',
  },
  {
    title: 'Flexible Learning',
    description: 'Online and offline training options available',
  },
];

export default function Training() {
  return (
    <>
      <SEO
        title="Training & Internship"
        description="Join SSMT Solutions training programs in Cybersecurity, Data Engineering, Data Science, and DevOps. Expert-led courses with hands-on experience and certifications."
        keywords="cybersecurity training, data engineering courses, data science training, DevOps certification, IT training Bengaluru, internship programs"
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Training & Internship</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Advance your skills with expert-led programs and hands-on experience
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to prepare you for the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                {training.status === 'On Going' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full">
                      {training.status}
                    </span>
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${training.color} rounded-xl mb-6`}>
                  <training.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{training.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{training.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <FaClock className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="font-medium">Duration: {training.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaCertificate className="w-5 h-5 mr-3 text-purple-600" />
                    <span className="font-medium">Level: {training.level}</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <button className={`w-full py-3 px-6 bg-gradient-to-r ${training.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Enroll Now
                  </button>
                </Link>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the best learning experience with our comprehensive programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Internship Opportunities</h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SSMT Solutions offers comprehensive internship programs that combine theoretical knowledge with practical experience. Our internships provide:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Real-world project experience working on live client projects</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mentorship from industry professionals with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Certificate of completion and performance evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Potential for full-time employment based on performance</span>
                </li>
              </ul>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our training programs and take the next step in your career
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Contact Us to Enroll
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
