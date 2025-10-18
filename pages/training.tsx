import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { FaShieldAlt, FaDatabase, FaBrain, FaServer, FaClock, FaCertificate, FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa';

const trainings = [
  {
    title: 'Cybersecurity',
    status: 'On Going',
    description: 'Comprehensive training in penetration testing, SOC analysis, and security tools like Kali Linux, Wireshark, and Burp Suite.',
    icon: FaShieldAlt,
    color: 'from-red-500 to-pink-500',
    image: '/images/Cybersecurity_training_classroom_environment_e55a7f88.png',
    duration: '12 Weeks',
    level: 'Intermediate to Advanced',
    syllabus: [
      {
        module: 'Module 1: Introduction to Cybersecurity',
        topics: ['Cybersecurity Fundamentals', 'Threat Landscape', 'Security Frameworks & Compliance', 'Risk Assessment'],
      },
      {
        module: 'Module 2: Network Security',
        topics: ['TCP/IP & Network Protocols', 'Firewalls & IDS/IPS', 'VPN & Encryption', 'Network Monitoring with Wireshark'],
      },
      {
        module: 'Module 3: Penetration Testing',
        topics: ['Ethical Hacking Principles', 'Reconnaissance & Scanning', 'Exploitation Techniques', 'Kali Linux Tools'],
      },
      {
        module: 'Module 4: Web Application Security',
        topics: ['OWASP Top 10 Vulnerabilities', 'SQL Injection & XSS', 'Burp Suite Mastery', 'Secure Coding Practices'],
      },
      {
        module: 'Module 5: SOC Operations',
        topics: ['Security Operations Center Workflow', 'SIEM Tools & Log Analysis', 'Incident Response', 'Threat Hunting'],
      },
      {
        module: 'Module 6: Capstone Project',
        topics: ['Real-world Penetration Testing Lab', 'Security Audit Report', 'Presentation & Defense'],
      },
    ],
  },
  {
    title: 'Data Engineering',
    status: 'Available',
    description: 'Master data pipelines, ETL processes, and tools like Databricks, Snowflake, Apache Spark, and Azure Data Factory.',
    icon: FaDatabase,
    color: 'from-blue-500 to-cyan-500',
    image: '/images/Data_engineering_training_lab_ebfa82e0.png',
    duration: '10 Weeks',
    level: 'Beginner to Intermediate',
    syllabus: [
      {
        module: 'Module 1: Data Engineering Foundations',
        topics: ['Data Engineering Lifecycle', 'Database Fundamentals', 'SQL Mastery', 'Data Modeling'],
      },
      {
        module: 'Module 2: ETL & Data Pipelines',
        topics: ['ETL vs ELT Concepts', 'Azure Data Factory', 'Data Integration Patterns', 'Pipeline Orchestration'],
      },
      {
        module: 'Module 3: Big Data Processing',
        topics: ['Apache Spark Architecture', 'PySpark Programming', 'Distributed Computing', 'Data Transformations'],
      },
      {
        module: 'Module 4: Cloud Data Platforms',
        topics: ['Databricks Platform', 'Snowflake Data Warehouse', 'Delta Lake', 'Data Lakehouse Architecture'],
      },
      {
        module: 'Module 5: Data Quality & Governance',
        topics: ['Data Quality Framework', 'DBT for Transformations', 'Data Cataloging', 'Monitoring & Alerting'],
      },
      {
        module: 'Module 6: Analytics & Visualization',
        topics: ['Power BI Dashboards', 'Tableau Reporting', 'Data Analytics Best Practices', 'Final Project'],
      },
    ],
  },
  {
    title: 'Data Science',
    status: 'Available',
    description: 'Learn machine learning, AI, NLP, and work with TensorFlow, PyTorch, and modern data science frameworks.',
    icon: FaBrain,
    color: 'from-purple-500 to-indigo-500',
    image: '/images/Data_science_machine_learning_training_b72a02cd.png',
    duration: '14 Weeks',
    level: 'Intermediate to Advanced',
    syllabus: [
      {
        module: 'Module 1: Python for Data Science',
        topics: ['Python Fundamentals', 'NumPy & Pandas', 'Data Manipulation', 'Exploratory Data Analysis'],
      },
      {
        module: 'Module 2: Statistics & Probability',
        topics: ['Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'Probability Distributions'],
      },
      {
        module: 'Module 3: Machine Learning Fundamentals',
        topics: ['Supervised vs Unsupervised Learning', 'Scikit-learn Library', 'Model Evaluation', 'Cross-validation'],
      },
      {
        module: 'Module 4: Deep Learning',
        topics: ['Neural Networks', 'TensorFlow & Keras', 'PyTorch Framework', 'CNN & RNN Architectures'],
      },
      {
        module: 'Module 5: Natural Language Processing',
        topics: ['Text Preprocessing', 'NLP with Transformers', 'Hugging Face Library', 'Sentiment Analysis'],
      },
      {
        module: 'Module 6: Generative AI & LLMs',
        topics: ['Large Language Models', 'OpenAI API Integration', 'Prompt Engineering', 'Fine-tuning Models'],
      },
      {
        module: 'Module 7: ML Operations & Deployment',
        topics: ['Model Deployment', 'MLOps Best Practices', 'Model Monitoring', 'End-to-end ML Project'],
      },
    ],
  },
  {
    title: 'DevOps',
    status: 'Available',
    description: 'Master CI/CD, containerization, orchestration with Docker, Kubernetes, AWS, Azure, and automation tools.',
    icon: FaServer,
    color: 'from-green-500 to-teal-500',
    image: '/images/DevOps_and_cloud_training_112e9c21.png',
    duration: '10 Weeks',
    level: 'Intermediate',
    syllabus: [
      {
        module: 'Module 1: DevOps Fundamentals',
        topics: ['DevOps Culture & Principles', 'Version Control with Git', 'GitHub/GitLab Workflows', 'Agile Methodologies'],
      },
      {
        module: 'Module 2: CI/CD Pipelines',
        topics: ['Continuous Integration', 'Jenkins Automation', 'GitHub Actions', 'Pipeline as Code'],
      },
      {
        module: 'Module 3: Containerization',
        topics: ['Docker Fundamentals', 'Container Images & Registries', 'Docker Compose', 'Multi-stage Builds'],
      },
      {
        module: 'Module 4: Container Orchestration',
        topics: ['Kubernetes Architecture', 'Pods, Services & Deployments', 'Helm Charts', 'K8s Best Practices'],
      },
      {
        module: 'Module 5: Cloud Infrastructure',
        topics: ['AWS Services', 'Azure DevOps', 'GCP Fundamentals', 'Terraform IaC', 'Cloud Security'],
      },
      {
        module: 'Module 6: Monitoring & Final Project',
        topics: ['Monitoring & Logging', 'Prometheus & Grafana', 'DevOps Project Implementation', 'Presentation'],
      },
    ],
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

function TrainingCard({ training, index }: { training: typeof trainings[0]; index: number }) {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {training.status === 'On Going' && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full">
            {training.status}
          </span>
        </div>
      )}
      
      <div className="relative h-56 overflow-hidden">
        <Image
          src={training.image}
          alt={`${training.title} Training`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="p-8">
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

        <button
          onClick={() => setShowSyllabus(!showSyllabus)}
          className="w-full mb-4 py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
        >
          <span>View Detailed Syllabus</span>
          {showSyllabus ? (
            <FaChevronUp className="ml-2 w-4 h-4" />
          ) : (
            <FaChevronDown className="ml-2 w-4 h-4" />
          )}
        </button>

        <AnimatePresence>
          {showSyllabus && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl space-y-4">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Course Curriculum</h4>
                {training.syllabus.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h5 className="font-semibold text-gray-900 mb-2">{item.module}</h5>
                    <ul className="space-y-1">
                      {item.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-start text-sm text-gray-700">
                          <FaCheck className="w-3 h-3 mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Link href={`/enroll?program=${encodeURIComponent(training.title)}`}>
          <button className={`w-full py-3 px-6 bg-gradient-to-r ${training.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
            Enroll Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Training() {
  return (
    <>
      <SEO
        title="Training & Internship | SSMT Solutions"
        description="Join SSMT Solutions training programs in Cybersecurity, Data Engineering, Data Science, and DevOps. Expert-led courses with hands-on experience and industry-recognized certifications. Comprehensive syllabus with real-world projects."
        keywords="cybersecurity training, data engineering courses, data science training, DevOps certification, IT training Bengaluru, internship programs, machine learning courses, cloud computing training"
      />
      <StructuredData type="organization" />
      <StructuredData 
        type="breadcrumb" 
        breadcrumbs={[
          { name: 'Home', url: 'https://ssmtsolutions.com/' },
          { name: 'Training & Internship', url: 'https://ssmtsolutions.com/training' }
        ]} 
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
              <TrainingCard key={training.title} training={training} index={index} />
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
            <Link href="/enroll" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
