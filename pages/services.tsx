import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import { FaHeadset, FaGraduationCap, FaLaptopCode, FaBullhorn, FaChartBar } from 'react-icons/fa';

const services = [
  {
    title: 'Support & Consultancy',
    description: 'Get expert guidance: efficient solutions, reliable assistance, strategic support to drive your success.',
    icon: FaHeadset,
    link: '/services/consultancy',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Training & Research',
    description: 'Advance your skills and knowledge with expert-led programs and in-depth insights.',
    icon: FaGraduationCap,
    link: '/services/training-research',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Product Design & Development',
    description: 'Bring your vision to life: crafting innovative, user-centric solutions from concept to completion.',
    icon: FaLaptopCode,
    link: '/services',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your brand\'s online presence with strategic campaigns, targeted reach and measurable results.',
    icon: FaBullhorn,
    link: '/services',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Enterprise Management',
    description: 'Drive business growth with tailored strategies, data-driven insights and impactful brand positioning.',
    icon: FaChartBar,
    link: '/services',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore SSMT Solutions comprehensive services: Support & Consultancy, Training & Research, Product Development, Digital Marketing, and Enterprise Management."
        keywords="digital marketing services, IT consultancy, training programs, product development, enterprise management, Bengaluru services"
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Comprehensive solutions tailored to your business needs
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
              End-to-end solutions designed to accelerate your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <span className={`inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-semibold`}>
                      Learn More →
                    </span>
                  </div>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We deliver measurable results through innovative solutions and dedicated support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">100+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Projects Delivered</h3>
              <p className="text-gray-600">Successfully completed projects across various industries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-bold text-purple-600 mb-4">50+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Clients</h3>
              <p className="text-gray-600">Trusted by businesses worldwide for digital excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-5xl font-bold text-pink-600 mb-4">5+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">Proven track record of delivering innovative solutions</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how our services can help transform your business
            </p>
            <Link href="/get-quote" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
