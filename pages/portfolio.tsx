import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import { FaGlobe, FaMobile, FaCloud, FaChartLine } from 'react-icons/fa';

const projects = [
  {
    title: 'Enterprise Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Successfully migrated a large enterprise infrastructure to AWS, reducing operational costs by 40%.',
    icon: FaCloud,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Built a scalable e-commerce platform handling 100K+ daily transactions with seamless UX.',
    icon: FaGlobe,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Developed a secure mobile banking application with biometric authentication and real-time transactions.',
    icon: FaMobile,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Business Analytics Dashboard',
    category: 'Data Analytics',
    description: 'Created an interactive dashboard providing real-time insights and predictive analytics for decision making.',
    icon: FaChartLine,
    color: 'from-orange-500 to-red-500',
  },
];

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore SSMT Solutions portfolio of successful projects in cloud solutions, web development, mobile apps, and data analytics."
        keywords="SSMT portfolio, case studies, project showcase, cloud migration, web development, mobile apps"
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Showcasing our success stories and innovative solutions
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across diverse industries and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl mb-6`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-transparent bg-clip-text bg-gradient-to-r ${project.color} text-sm font-semibold rounded-full`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Delivering measurable results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-white rounded-2xl shadow-md"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">100+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Projects Delivered</h3>
              <p className="text-gray-600">Successfully completed across various domains</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-md"
            >
              <div className="text-5xl font-bold text-purple-600 mb-4">98%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">Clients satisfied with our deliverables</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-md"
            >
              <div className="text-5xl font-bold text-pink-600 mb-4">50+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Clients</h3>
              <p className="text-gray-600">Businesses transformed globally</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Your Success Story</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with us to create innovative solutions that drive results
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
