import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import { FaUsers, FaRocket, FaLaptop, FaGraduationCap } from 'react-icons/fa';

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries and performance bonuses',
    icon: FaRocket,
  },
  {
    title: 'Growth Opportunities',
    description: 'Continuous learning and career advancement programs',
    icon: FaGraduationCap,
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible work hours and remote work options',
    icon: FaLaptop,
  },
  {
    title: 'Collaborative Culture',
    description: 'Work with talented teams on cutting-edge projects',
    icon: FaUsers,
  },
];

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
  },
  {
    title: 'Data Engineer',
    department: 'Data & Analytics',
    location: 'Bengaluru',
    type: 'Full-time',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
  },
  {
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Bengaluru',
    type: 'Full-time',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
  },
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join SSMT Solutions team. Explore career opportunities in software development, data engineering, DevOps, cybersecurity, and digital marketing in Bengaluru."
        keywords="careers SSMT Solutions, jobs Bengaluru, software developer jobs, data engineer careers, DevOps positions, IT jobs Karnataka"
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Build your career with innovative projects and talented people
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career path filled with growth and opportunities
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
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and join our growing team
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full font-medium">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center">
                    Apply Now
                  </Link>
                </div>
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 mb-12">
              We believe in a transparent and efficient hiring process
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Apply</h3>
                <p className="text-sm text-gray-600">Submit your application</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Screen</h3>
                <p className="text-sm text-gray-600">Initial screening call</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Interview</h3>
                <p className="text-sm text-gray-600">Technical & cultural fit</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Offer</h3>
                <p className="text-sm text-gray-600">Welcome aboard!</p>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Don&apos;t see the right position? Send us your resume and we&apos;ll keep you in mind for future opportunities
            </p>
            <a
              href="mailto:info@ssmtsolutions.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
