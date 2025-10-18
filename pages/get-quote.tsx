import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import WhatsAppForm from '../components/WhatsAppForm';
import { FaArrowLeft } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919432588119';

const serviceTypes = [
  'Support & Consultancy',
  'Training & Research',
  'Product Design & Development',
  'Digital Marketing',
  'Enterprise Management',
  'Cybersecurity Services',
  'Cloud Migration',
  'Data Engineering & Analytics',
  'AI & Machine Learning Solutions',
  'Custom Software Development',
];

const budgetRanges = [
  'Less than ₹1 Lakh',
  '₹1-5 Lakhs',
  '₹5-10 Lakhs',
  '₹10-25 Lakhs',
  '₹25 Lakhs+',
  'Not Sure Yet',
];

const formFields = [
  {
    name: 'companyName',
    label: 'Company/Organization Name',
    type: 'text' as const,
    required: true,
    placeholder: 'Your company name',
  },
  {
    name: 'contactPerson',
    label: 'Contact Person Name',
    type: 'text' as const,
    required: true,
    placeholder: 'Your full name',
  },
  {
    name: 'email',
    label: 'Business Email',
    type: 'email' as const,
    required: true,
    placeholder: 'contact@company.com',
  },
  {
    name: 'phone',
    label: 'Contact Number',
    type: 'tel' as const,
    required: true,
    placeholder: '+91 XXXXX XXXXX',
  },
  {
    name: 'serviceType',
    label: 'Service Required',
    type: 'select' as const,
    required: true,
    options: serviceTypes,
  },
  {
    name: 'projectTimeline',
    label: 'Project Timeline',
    type: 'select' as const,
    required: true,
    options: ['Urgent (Within 1 month)', '1-3 months', '3-6 months', '6+ months', 'Ongoing Support'],
  },
  {
    name: 'budget',
    label: 'Estimated Budget',
    type: 'select' as const,
    required: false,
    options: budgetRanges,
  },
  {
    name: 'projectDetails',
    label: 'Project Details',
    type: 'textarea' as const,
    required: true,
    placeholder: 'Please describe your project requirements, goals, and any specific needs...',
  },
];

const messageTemplate = (data: Record<string, string>) => {
  return `*New Client Inquiry - Service Request*

🏢 *Company Details:*
Company: ${data.companyName}
Contact Person: ${data.contactPerson}
Email: ${data.email}
Phone: ${data.phone}

💼 *Project Information:*
Service Type: ${data.serviceType}
Timeline: ${data.projectTimeline}
${data.budget ? `Budget: ${data.budget}` : ''}

📋 *Project Details:*
${data.projectDetails}

---
This inquiry was submitted via SSMT Solutions website.`;
};

export default function GetQuote() {
  return (
    <>
      <SEO
        title="Get a Quote"
        description="Request a quote for SSMT Solutions services. Contact us for digital marketing, software development, cloud services, data engineering, and consulting services."
        keywords="get quote, request proposal, SSMT services, consulting services, software development quote, digital marketing services"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: 'https://ssmtsolutions.com/' },
          { name: 'Services', url: 'https://ssmtsolutions.com/services' },
          { name: 'Get Quote', url: 'https://ssmtsolutions.com/get-quote' },
        ]}
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <Link
            href="/services"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get a Quote</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Let&apos;s discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <WhatsAppForm
            title="Request a Consultation"
            description="Share your project details with us and we'll connect with you on WhatsApp to discuss your requirements, timeline, and provide a customized solution."
            fields={formFields}
            messageTemplate={messageTemplate}
            phoneNumber={WHATSAPP_NUMBER}
            submitButtonText="Request Quote via WhatsApp"
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                24h
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Get a response within 24 hours on WhatsApp
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                100%
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                No cost for initial discussion and proposal
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored services to meet your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
