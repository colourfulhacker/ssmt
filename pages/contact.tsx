import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../components/SEO';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with SSMT Solutions. Contact our offices in Bengaluru and Jharkhand. Call us at +91 9432588119 or email info@ssmtsolutions.com"
        keywords="contact SSMT Solutions, Bengaluru office, Jharkhand office, email, phone, address"
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We&apos;re here to help. Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Center</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Unit 101, Oxford Towers, 139,<br />
                      HAL Old Airport Rd, Kodihalli,<br />
                      Bengaluru, Karnataka 560008
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaPhone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919432588119" className="hover:text-blue-600 transition-colors">+91 9432588119</a><br />
                      <a href="tel:+919182607068" className="hover:text-blue-600 transition-colors">+91 9182607068</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ssmtsolutions.com" className="hover:text-blue-600 transition-colors">
                        info@ssmtsolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-md">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-md">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-md">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Center</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Shyam Nagar Colony,<br />
                      Pakur, Jharkhand,<br />
                      816107
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <FaPhone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919432588119" className="hover:text-purple-600 transition-colors">+91 9432588119</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ssmtsolutions.com" className="hover:text-purple-600 transition-colors">
                        info@ssmtsolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
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
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Business Hours</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ready to transform your business? Reach out to us and let&apos;s start building something amazing together.
            </p>
            <a
              href="mailto:info@ssmtsolutions.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Send us an Email
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
