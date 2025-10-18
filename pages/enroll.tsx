import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import WhatsAppForm from '../components/WhatsAppForm';
import { FaArrowLeft } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919432588119';

const trainingPrograms = [
  'Cybersecurity',
  'Data Engineering',
  'Data Science',
  'DevOps',
];

const formFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text' as const,
    required: true,
    placeholder: 'Enter your full name',
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email' as const,
    required: true,
    placeholder: 'your.email@example.com',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel' as const,
    required: true,
    placeholder: '+91 XXXXX XXXXX',
  },
  {
    name: 'program',
    label: 'Training Program',
    type: 'select' as const,
    required: true,
    options: trainingPrograms,
  },
  {
    name: 'qualification',
    label: 'Highest Qualification',
    type: 'text' as const,
    required: true,
    placeholder: 'e.g., B.Tech, MCA, BCA',
  },
  {
    name: 'experience',
    label: 'Work Experience',
    type: 'select' as const,
    required: true,
    options: ['Fresher', '0-1 years', '1-3 years', '3-5 years', '5+ years'],
  },
  {
    name: 'preferredMode',
    label: 'Preferred Learning Mode',
    type: 'select' as const,
    required: true,
    options: ['Online', 'Offline', 'Hybrid'],
  },
  {
    name: 'message',
    label: 'Additional Information',
    type: 'textarea' as const,
    required: false,
    placeholder: 'Tell us about your goals, background, or any questions you have...',
  },
];

const messageTemplate = (data: Record<string, string>) => {
  return `*New Training Enrollment Request*

👤 *Student Details:*
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

📚 *Program Information:*
Program: ${data.program}
Qualification: ${data.qualification}
Experience: ${data.experience}
Learning Mode: ${data.preferredMode}

${data.message ? `💬 *Additional Information:*\n${data.message}` : ''}

---
This inquiry was submitted via SSMT Solutions website.`;
};

export default function Enroll() {
  const router = useRouter();
  const { program } = router.query;

  const customFields = formFields;
  const defaultValues = program ? { program: String(program) } : {};

  return (
    <>
      <SEO
        title="Enroll in Training Program"
        description="Enroll in SSMT Solutions training programs for Cybersecurity, Data Engineering, Data Science, and DevOps. Get expert training and industry certifications."
        keywords="enroll training, cybersecurity course enrollment, data engineering registration, data science training, DevOps course"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: 'https://ssmtsolutions.com/' },
          { name: 'Training', url: 'https://ssmtsolutions.com/training' },
          { name: 'Enroll', url: 'https://ssmtsolutions.com/enroll' },
        ]}
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <Link
            href="/training"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Training Programs
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Enroll Now</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Take the first step towards transforming your career
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <WhatsAppForm
            title="Start Your Learning Journey"
            description="Fill out the form below and we'll connect with you on WhatsApp to discuss the program details, schedule, and enrollment process."
            fields={customFields}
            messageTemplate={messageTemplate}
            phoneNumber={WHATSAPP_NUMBER}
            submitButtonText="Submit Enrollment Request"
            defaultValues={defaultValues}
          />

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What Happens Next?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      WhatsApp Connection
                    </h4>
                    <p className="text-gray-600">
                      Your details will be sent to our enrollment team via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Counseling Session
                    </h4>
                    <p className="text-gray-600">
                      Our team will reach out within 24 hours for a detailed discussion
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Enrollment & Onboarding
                    </h4>
                    <p className="text-gray-600">
                      Complete the enrollment process and get access to learning materials
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Start Learning</h4>
                    <p className="text-gray-600">
                      Begin your journey with expert instructors and hands-on projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
