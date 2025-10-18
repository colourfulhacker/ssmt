import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import FactsSlider from '../components/FactsSlider';
import { FaCloud, FaShieldAlt, FaChartLine, FaRocket, FaCode, FaDatabase, FaBrain, FaServer } from 'react-icons/fa';

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
  return (
    <>
      <SEO
        title="Home"
        description="SSMT Solutions - Empowering Digital Transformation with AI-Driven Cloud and Cybersecurity Solutions. Leading provider of digital marketing and tech solutions in Bengaluru, Karnataka."
        keywords="SSMT Solutions, digital transformation, AI solutions, cloud computing, cybersecurity, data engineering, software development, Bengaluru, Karnataka"
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
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Empowering Digital Transformation
              <br />
              <span className="gradient-text">with AI-Driven Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
              Leading the Way in Digital Marketing Solutions for Your Business Success
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              SSMT Solutions stands as a leading provider of tech-driven digital marketing solutions, driven by a commitment to excellence, agility, and creativity in an ever-evolving landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
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
            <Link href="/contact" className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 text-lg">
              Start Your Journey →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
