import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { FaHeadset, FaChartLine, FaLightbulb, FaHandshake, FaRocket, FaCog } from 'react-icons/fa';

const services = [
  {
    title: 'Strategic IT Consulting',
    description: 'Expert guidance on technology strategy, digital transformation, and IT infrastructure optimization.',
    icon: FaLightbulb,
  },
  {
    title: 'Business Process Optimization',
    description: 'Streamline operations and improve efficiency with data-driven insights and best practices.',
    icon: FaCog,
  },
  {
    title: 'Technology Assessment',
    description: 'Comprehensive evaluation of your current technology stack and recommendations for improvement.',
    icon: FaChartLine,
  },
  {
    title: 'Implementation Support',
    description: 'End-to-end assistance in deploying new technologies and ensuring smooth transitions.',
    icon: FaRocket,
  },
  {
    title: '24/7 Technical Support',
    description: 'Round-the-clock technical assistance to keep your systems running smoothly.',
    icon: FaHeadset,
  },
  {
    title: 'Partnership & Collaboration',
    description: 'Long-term strategic partnerships focused on driving continuous improvement and growth.',
    icon: FaHandshake,
  },
];

const benefits = [
  'Reduce operational costs by 30-40%',
  'Improve system efficiency and performance',
  'Access to industry-leading experts',
  'Customized solutions for your business',
  'Scalable support as you grow',
  'Proven methodologies and best practices',
];

export default function Consultancy() {
  return (
    <>
      <SEO
        title="Support & Consultancy"
        description="Expert IT consulting and technical support services from SSMT Solutions. Get strategic guidance, implementation support, and 24/7 assistance for your business."
        keywords="IT consultancy, technical support, business consulting, technology strategy, digital transformation, Bengaluru consulting"
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Support & Consultancy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Expert guidance, efficient solutions, reliable assistance, strategic support to drive your success
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Consultancy Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs
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
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Consultancy?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SSMT Solutions, we bring years of experience and deep industry knowledge to help you navigate the complex technology landscape. Our consultants work as an extension of your team, providing strategic insights and hands-on support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on delivering measurable results, whether it's reducing costs, improving efficiency, or accelerating digital transformation. Our proven methodologies ensure successful implementation and long-term sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Assess</h3>
                <p className="text-sm text-gray-600">Understand your current state and challenges</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Plan</h3>
                <p className="text-sm text-gray-600">Develop strategic roadmap and solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Implement</h3>
                <p className="text-sm text-gray-600">Execute with precision and expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Optimize</h3>
                <p className="text-sm text-gray-600">Continuous improvement and support</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Expert Guidance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how our consultancy services can drive your business forward
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
