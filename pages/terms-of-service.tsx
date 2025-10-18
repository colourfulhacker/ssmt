import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service - SSMT Solutions"
        description="Read SSMT Solutions' terms of service to understand the rules and regulations for using our website and services."
        keywords="terms of service, terms and conditions, SSMT Solutions terms, service agreement"
      />

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using SSMT Solutions' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Offered</h2>
                <p>SSMT Solutions provides the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IT Staffing and Recruitment Services</li>
                  <li>Cybersecurity Training and Certification</li>
                  <li>IT Consulting and Digital Transformation Services</li>
                  <li>Software Development and Technology Solutions</li>
                  <li>Research and Development Services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Account Security</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Accurate Information</h3>
                <p>
                  You agree to provide accurate, current, and complete information when registering for our services or submitting applications.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Prohibited Activities</h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services for any illegal purpose</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect information about other users without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Training and Certification</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Course Enrollment</h3>
                <p>
                  Enrollment in training courses is subject to availability and payment of applicable fees. Course content and schedules may be modified at our discretion.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Certification</h3>
                <p>
                  Certificates are issued upon successful completion of course requirements. Certificates are non-transferable and may be verified through our certificate verification system.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Attendance and Participation</h3>
                <p>
                  Students must maintain minimum attendance requirements and actively participate in course activities to receive certification.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Staffing and Recruitment Services</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Job Applications</h3>
                <p>
                  By submitting a job application, you authorize us to share your information with potential employers and verify your credentials.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Employment Terms</h3>
                <p>
                  Employment terms, including compensation and benefits, will be outlined in separate employment agreements. We do not guarantee job placement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Payment Terms</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Fees and Charges</h3>
                <p>
                  All fees for services are listed on our website and are subject to change. Prices are in Indian Rupees (INR) unless otherwise stated.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Payment Methods</h3>
                <p>
                  We accept various payment methods as indicated during checkout. Payment processing is handled securely through third-party providers.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Late Payments</h3>
                <p>
                  Late or failed payments may result in suspension of services until payment is received.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
                <p>
                  All content, trademarks, logos, and intellectual property on our website and in our services are owned by SSMT Solutions or our licensors. You may not use, reproduce, or distribute our content without explicit permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, SSMT Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Disclaimer of Warranties</h2>
                <p>
                  Our services are provided "as is" without any warranties, express or implied. We do not guarantee uninterrupted or error-free service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Indemnification</h2>
                <p>
                  You agree to indemnify and hold SSMT Solutions harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p><strong>SSMT Solutions</strong></p>
                  <p>Email: info@ssmtsolutions.com</p>
                  <p>Phone: +91 9432588119</p>
                  <p>Address: Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
