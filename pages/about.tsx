import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import { FaRocket, FaLightbulb, FaHandshake, FaTrophy } from 'react-icons/fa';

const coreValues = [
  {
    title: 'Excellence',
    description: 'We deliver superior quality and strive for perfection in every project we undertake.',
    icon: FaTrophy,
  },
  {
    title: 'Agility',
    description: 'We adapt quickly to changing market demands and client needs with flexible solutions.',
    icon: FaRocket,
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest ethical standards and transparency in all our dealings.',
    icon: FaHandshake,
  },
  {
    title: 'Creativity',
    description: 'We foster innovation and creative thinking to solve complex business challenges.',
    icon: FaLightbulb,
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about SSMT Solutions - a leading tech-digital marketing provider based in Bengaluru, Karnataka, offering innovative solutions in cloud, AI, and digital transformation."
        keywords="about SSMT Solutions, digital marketing Bengaluru, tech solutions Karnataka, company values, mission vision"
      />

      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">About SSMT Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed">
              Driving Innovation Through Technology and Excellence
            </p>
          </motion.div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                SSMT Solutions is a leading tech-digital marketing provider dedicated to quality, speed, and innovation. Based in Bengaluru, Karnataka, we stand at the forefront of innovation, offering result-driven services in Support & Consultancy, Training & Research, Product Design & Development, Digital Marketing, and Enterprise Management.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, combined with our agile approach, has established us as a trusted partner for businesses seeking digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To empower businesses with innovative, technology-driven solutions that drive growth, efficiency, and sustainable success in the digital age.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in digital transformation, recognized for our cutting-edge solutions, exceptional client service, and unwavering commitment to innovation.
              </p>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                SSMT Solutions began with a mission to help businesses grow through smart, technology-driven solutions. Starting with a small team of passionate professionals, we focused on delivering real value through expert guidance and innovative thinking.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Over the years, we've expanded our capabilities — offering strategic support to organizations, fostering talent through hands-on training programs, and bringing impactful digital products to life. Our creative approach to digital growth has helped clients stay ahead in an evolving marketplace.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Collaboration, curiosity, and a drive to solve real business challenges shape every step of our journey. Today, we stand as a respected name in the industry, known for our ability to craft impactful digital strategies that help clients achieve stronger engagement and improved conversion rates.
              </p>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with us to transform your digital presence and achieve measurable success
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
