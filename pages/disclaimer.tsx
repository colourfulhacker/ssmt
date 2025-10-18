import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer - SSMT Solutions"
        description="Read SSMT Solutions' disclaimer regarding the information and services provided on our website."
        keywords="disclaimer, legal disclaimer, SSMT Solutions disclaimer, website disclaimer"
      />

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. General Information</h2>
                <p>
                  The information contained on the SSMT Solutions website is for general information purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Professional Advice Disclaimer</h2>
                <p>
                  The website and its content are provided for informational purposes only and do not constitute professional advice. You should consult with appropriate professionals before making decisions based on information from our website. Specifically:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>IT Consulting:</strong> Our general recommendations should not replace professional IT consulting tailored to your specific needs</li>
                  <li><strong>Career Advice:</strong> Job market information and career guidance are general in nature and may not apply to your individual situation</li>
                  <li><strong>Training Information:</strong> Course descriptions and outcomes may vary; consult with our training advisors for detailed information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. No Warranties</h2>
                <p>
                  SSMT Solutions makes no warranties or representations about the accuracy or completeness of this website's content or the content of any websites linked to this website. We assume no liability or responsibility for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Errors or omissions in the content</li>
                  <li>Any loss or damage arising from the use of this website</li>
                  <li>Interruptions in service or availability</li>
                  <li>Technical issues or malfunctions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Employment and Staffing Disclaimer</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 No Guarantee of Employment</h3>
                <p>
                  While SSMT Solutions provides staffing and recruitment services, we do not guarantee employment or job placement. Employment decisions are made by hiring companies based on their own criteria.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Candidate Information</h3>
                <p>
                  We verify candidate credentials to the best of our ability, but employers should conduct their own due diligence. We are not liable for any misrepresentation by candidates.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Freelancer and Contract Work</h3>
                <p>
                  Rates, availability, and terms for freelance and contract positions are subject to change. We do not guarantee specific rates or continuous work assignments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Training and Certification Disclaimer</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Training Outcomes</h3>
                <p>
                  While we design our training programs to provide comprehensive education, we cannot guarantee specific outcomes, certifications, or career advancement. Success depends on individual effort, aptitude, and market conditions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Certification Bodies</h3>
                <p>
                  Some certifications are issued by third-party organizations. SSMT Solutions is not responsible for changes to certification requirements, exam formats, or policies set by these external bodies.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Course Content</h3>
                <p>
                  We reserve the right to modify course content, schedules, and instructors as needed. While we strive to maintain quality, individual training experiences may vary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Third-Party Links and Resources</h2>
                <p>
                  Our website may contain links to external websites or resources operated by third parties. SSMT Solutions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Has no control over the content or availability of these external sites</li>
                  <li>Does not endorse or assume responsibility for their content</li>
                  <li>Is not liable for any damage or loss caused by using third-party websites</li>
                  <li>Recommends reviewing the privacy policies and terms of third-party sites</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Technology and Cybersecurity</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.1 Security Measures</h3>
                <p>
                  While we implement industry-standard security practices, we cannot guarantee absolute security of data transmitted through our website or systems.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.2 Cybersecurity Training</h3>
                <p>
                  Our cybersecurity training provides education based on current best practices. However, the cybersecurity landscape constantly evolves, and past training may not address all future threats.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Testimonials and Case Studies</h2>
                <p>
                  Testimonials and case studies on our website reflect individual experiences and may not be representative of all clients' experiences. Results and outcomes may vary based on numerous factors including individual circumstances, effort, and market conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Pricing and Service Availability</h2>
                <p>
                  Prices, service offerings, and availability are subject to change without notice. While we strive to keep information current:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pricing errors may occur and will be corrected</li>
                  <li>Service availability may change based on demand and resources</li>
                  <li>Special offers and promotions have terms and conditions that apply</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, SSMT Solutions shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any direct, indirect, incidental, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages arising from use or inability to use our website or services</li>
                  <li>Damages resulting from reliance on information provided</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Intellectual Property</h2>
                <p>
                  Content on this website, including text, graphics, logos, and images, is the property of SSMT Solutions or licensed to us. Unauthorized use may violate copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Jurisdictional Issues</h2>
                <p>
                  Information on our website is intended for audiences in India. We make no representation that materials on this site are appropriate or available for use in other locations. If you access this website from outside India, you do so at your own risk and are responsible for compliance with local laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to This Disclaimer</h2>
                <p>
                  SSMT Solutions reserves the right to update this disclaimer at any time without notice. Please review this page periodically for changes. Your continued use of the website following any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Us</h2>
                <p>
                  If you have questions about this disclaimer, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p><strong>SSMT Solutions</strong></p>
                  <p>Email: info@ssmtsolutions.com</p>
                  <p>Phone: +91 9432588119</p>
                  <p>Address: Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008</p>
                </div>
              </section>

              <section className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <p className="font-semibold text-gray-900">Important Notice:</p>
                <p className="mt-2">
                  By using the SSMT Solutions website and services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please do not use our website or services.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
