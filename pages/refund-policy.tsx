import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="Refund Policy - SSMT Solutions"
        description="Learn about SSMT Solutions' refund and cancellation policy for our training programs and services."
        keywords="refund policy, cancellation policy, SSMT Solutions refunds, money back guarantee"
      />

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Refund Policy
            </h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Overview</h2>
                <p>
                  At SSMT Solutions, we strive to provide high-quality services and ensure customer satisfaction. This Refund Policy outlines the terms and conditions for refunds and cancellations of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Training Programs and Courses</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Cancellation Before Course Start</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>More than 15 days before start:</strong> Full refund (100%)</li>
                  <li><strong>8-15 days before start:</strong> 75% refund</li>
                  <li><strong>3-7 days before start:</strong> 50% refund</li>
                  <li><strong>Less than 3 days before start:</strong> No refund</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Cancellation After Course Start</h3>
                <p>
                  Once a training program has commenced, no refunds will be issued. However, you may:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transfer your enrollment to another session (subject to availability)</li>
                  <li>Transfer your enrollment to another participant (one-time only)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Course Cancellation by SSMT Solutions</h3>
                <p>
                  If we cancel a scheduled training program, you will receive a full refund or the option to transfer to another session at no additional cost.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Consulting Services</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Project-Based Services</h3>
                <p>
                  Refunds for project-based consulting services are handled on a case-by-case basis. If you are unsatisfied with our services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Notify us within 7 days of project milestone delivery</li>
                  <li>We will work with you to address concerns and make necessary revisions</li>
                  <li>Partial refunds may be considered based on work completed</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Retainer Services</h3>
                <p>
                  For monthly retainer arrangements:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellation requires 30 days written notice</li>
                  <li>Unused hours in the current billing period are non-refundable</li>
                  <li>No refunds for partial month usage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Staffing and Recruitment Services</h2>
                <p>
                  Placement fees for staffing services are non-refundable. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We offer a replacement guarantee period (terms specified in service agreement)</li>
                  <li>If a placed candidate leaves within the guarantee period, we will provide a replacement at no additional cost</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Certification Exams</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Exam Fees</h3>
                <p>
                  Certification exam fees are non-refundable. However, you may:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reschedule your exam (subject to rescheduling fees)</li>
                  <li>Transfer to another exam date (one-time only, at least 48 hours before scheduled exam)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Failed Exams</h3>
                <p>
                  If you fail a certification exam, you may retake it at a discounted rate (50% of original exam fee).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Refund Processing</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Refund Method</h3>
                <p>
                  Refunds will be processed using the same payment method used for the original transaction.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Processing Time</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refund requests are processed within 5-7 business days</li>
                  <li>Bank/credit card refunds may take an additional 5-10 business days to appear</li>
                  <li>Payment gateway charges (if any) are non-refundable</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Refund Deductions</h3>
                <p>
                  The following may be deducted from refunds:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment processing fees (typically 2-3%)</li>
                  <li>Administrative charges for cancellations</li>
                  <li>Cost of materials already provided</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. How to Request a Refund</h2>
                <p>
                  To request a refund:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Email us at info@ssmtsolutions.com with "Refund Request" in the subject line</li>
                  <li>Include your order/enrollment number and reason for refund</li>
                  <li>Provide supporting documentation if applicable</li>
                  <li>Our team will review your request and respond within 3 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Non-Refundable Items</h2>
                <p>
                  The following are non-refundable:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Digital downloads and course materials already accessed</li>
                  <li>Custom development work or research services</li>
                  <li>Third-party fees (e.g., certification body fees)</li>
                  <li>Discounted or promotional offerings (unless otherwise stated)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Force Majeure</h2>
                <p>
                  In cases of events beyond our control (natural disasters, pandemics, government actions), we will work with you to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reschedule services to a mutually agreed date</li>
                  <li>Provide alternative delivery methods (e.g., online instead of in-person)</li>
                  <li>Issue credits for future services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Disputes</h2>
                <p>
                  If you are unsatisfied with our refund decision, you may:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request escalation to management within 7 days</li>
                  <li>Provide additional information or documentation supporting your case</li>
                  <li>Our management team will provide a final decision within 10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to This Policy</h2>
                <p>
                  We reserve the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated date. The policy in effect at the time of purchase applies to that transaction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
                <p>
                  For refund-related questions or requests, contact us:
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
