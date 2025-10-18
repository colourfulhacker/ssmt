import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import WorkWithUsForm from '../components/WorkWithUsForm';
import CompanyFactsSlider from '../components/CompanyFactsSlider';
import { 
  FaUsers, FaRocket, FaLaptop, FaGraduationCap, 
  FaMoneyBillWave, FaHeartbeat, FaTrophy, FaGlobe 
} from 'react-icons/fa';

const benefits = [
  {
    title: 'Competitive Pay',
    description: 'Industry-leading compensation packages',
    icon: FaMoneyBillWave,
  },
  {
    title: 'Growth & Learning',
    description: 'Continuous upskilling programs',
    icon: FaGraduationCap,
  },
  {
    title: 'Flexible Work',
    description: 'Remote and hybrid options available',
    icon: FaLaptop,
  },
  {
    title: 'Health Benefits',
    description: 'Comprehensive health coverage',
    icon: FaHeartbeat,
  },
  {
    title: 'Team Culture',
    description: 'Collaborative and supportive environment',
    icon: FaUsers,
  },
  {
    title: 'Performance Rewards',
    description: 'Recognition and bonus programs',
    icon: FaTrophy,
  },
  {
    title: 'Career Growth',
    description: 'Clear advancement pathways',
    icon: FaRocket,
  },
  {
    title: 'Global Projects',
    description: 'Work on international assignments',
    icon: FaGlobe,
  },
];

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    title: 'Data Engineer',
    department: 'Data & Analytics',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    experience: '4+ years',
  },
  {
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '2+ years',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    experience: '2-4 years',
  },
  {
    title: 'Content Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    title: 'SEO Specialist',
    department: 'Marketing',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    experience: '2-3 years',
  },
  {
    title: 'Social Media Marketing',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time / Part-time',
    experience: '1-3 years',
  },
  {
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Bengaluru',
    type: 'Internship',
  },
  {
    title: 'Technical Trainer',
    department: 'Training',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    experience: '3+ years',
  },
  {
    title: 'Freelance Developers',
    department: 'Multiple',
    location: 'Remote',
    type: 'Contract / Hourly',
    experience: 'All levels',
  },
];

export default function Careers() {
  const scrollToForm = () => {
    const element = document.getElementById('work-with-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEO
        title="Careers - Join Our Team"
        description="Explore career opportunities at SSMT Solutions. Full-time, part-time, contract, and hourly positions available. Competitive compensation and flexible work arrangements."
        keywords="careers SSMT Solutions, jobs Bengaluru, software developer jobs, data engineer careers, DevOps positions, freelance developer, remote jobs India"
      />

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join a team that values innovation, growth, and work-life balance
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
              <button
                onClick={scrollToForm}
                className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 hover:border-green-500 rounded-xl text-center transition-all duration-300 hover:shadow-xl group"
              >
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Freelancer</h3>
                <p className="text-sm text-gray-600 mb-4">Hourly/Contract work with flexible schedules</p>
                <div className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold group-hover:bg-green-700 transition-colors">
                  Apply as Freelancer
                </div>
              </button>

              <Link
                href="/apply?type=job"
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 hover:border-blue-500 rounded-xl text-center transition-all duration-300 hover:shadow-xl group"
              >
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full-time Job</h3>
                <p className="text-sm text-gray-600 mb-4">Permanent positions with full benefits</p>
                <div className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold group-hover:bg-blue-700 transition-colors">
                  Apply for Job
                </div>
              </Link>

              <Link
                href="/apply?type=intern"
                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 hover:border-purple-500 rounded-xl text-center transition-all duration-300 hover:shadow-xl group"
              >
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Internship</h3>
                <p className="text-sm text-gray-600 mb-4">Learn and grow with hands-on experience</p>
                <div className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold group-hover:bg-purple-700 transition-colors">
                  Apply for Internship
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SSMT Solutions by the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven track record of excellence and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <CompanyFactsSlider />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SSMT Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with purpose
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <benefit.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect role for your skills and aspirations
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                        {position.type}
                      </span>
                      {position.experience && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                          {position.experience}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={scrollToForm}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-300"
                    >
                      Freelancer
                    </button>
                    <Link
                      href="/apply?type=job"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-300 text-center"
                    >
                      Full-time
                    </Link>
                    <Link
                      href="/apply?type=intern"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all duration-300 text-center"
                    >
                      Internship
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">Don't see your role? We're always looking for talented people!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
              >
                Freelancer
              </button>
              <Link
                href="/apply?type=job"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Full-time Job
              </Link>
              <Link
                href="/apply?type=intern"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300"
              >
                Internship
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work-with-us" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Freelancer Application
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                For hourly/contract work - Share your hourly rate expectations and availability
              </p>
              <div className="flex gap-4 justify-center text-sm">
                <Link
                  href="/apply?type=job"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  Apply for full-time job →
                </Link>
                <Link
                  href="/apply?type=intern"
                  className="text-purple-600 hover:text-purple-700 font-semibold underline"
                >
                  Apply for internship →
                </Link>
              </div>
            </div>
            <WorkWithUsForm />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Hiring Process
            </h2>
            <p className="text-lg mb-12 opacity-90">
              Simple, transparent, and efficient
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-sm opacity-90">Submit via WhatsApp</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Review</h3>
                <p className="text-sm opacity-90">Initial screening</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Interview</h3>
                <p className="text-sm opacity-90">Technical assessment</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Onboard</h3>
                <p className="text-sm opacity-90">Welcome to team!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
