import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import WhatsAppForm from '../components/WhatsAppForm';
import { FaArrowLeft } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919432588119';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

const jobPositions = [
  'Software Developer (Full-Stack)',
  'Java Developer',
  'Python Developer',
  'Data Engineer',
  'Data Scientist / ML Engineer',
  'DevOps Engineer',
  'Cloud Architect',
  'Cybersecurity Analyst',
  'Digital Marketing Specialist',
  'Content Marketing Manager',
  'SEO Specialist',
  'Social Media Marketing',
  'Marketing Intern',
  'Business Analyst',
  'UI/UX Designer',
  'Product Manager',
  'Other',
];

const experienceLevels = [
  'Fresher (0 years)',
  'Junior (0-2 years)',
  'Mid-Level (2-5 years)',
  'Senior (5-8 years)',
  'Lead/Expert (8+ years)',
];

const getFormFields = (isInternship: boolean): FormField[] => {
  const baseFields: FormField[] = [
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
      name: 'position',
      label: 'Position Applying For',
      type: 'select' as const,
      required: true,
      options: jobPositions,
    },
    {
      name: 'experience',
      label: 'Experience Level',
      type: 'select' as const,
      required: true,
      options: experienceLevels,
    },
    {
      name: 'currentLocation',
      label: 'Current Location',
      type: 'text' as const,
      required: true,
      placeholder: 'City, State',
    },
  ];

  if (!isInternship) {
    baseFields.push({
      name: 'noticePeriod',
      label: 'Notice Period',
      type: 'select' as const,
      required: true,
      options: ['Immediate', '15 days', '30 days', '60 days', '90 days'],
    });
  }

  baseFields.push(
    {
      name: 'currentCTC',
      label: isInternship ? 'Expected Stipend (Monthly)' : 'Current CTC (Annual)',
      type: 'text' as const,
      required: false,
      placeholder: isInternship ? 'e.g., ₹10,000 per month (Optional)' : 'e.g., 5 LPA (Optional)',
    },
    {
      name: 'expectedCTC',
      label: isInternship ? 'Preferred Stipend (Monthly)' : 'Expected CTC (Annual)',
      type: 'text' as const,
      required: false,
      placeholder: isInternship ? 'e.g., ₹15,000 per month (Optional)' : 'e.g., 7 LPA (Optional)',
    },
    {
      name: 'skills',
      label: 'Key Skills',
      type: 'textarea',
      required: true,
      placeholder: 'List your key technical skills, tools, and technologies...',
    },
    {
      name: 'additionalInfo',
      label: isInternship ? 'Why do you want this internship?' : 'Why do you want to join SSMT Solutions?',
      type: 'textarea',
      required: false,
      placeholder: isInternship 
        ? 'Tell us about your learning goals and what you hope to gain from this internship...'
        : 'Tell us about your career goals and why you are interested in this position...',
    }
  );

  return baseFields;
};

const messageTemplate = (data: Record<string, string>, isInternship: boolean) => {
  return `*New ${isInternship ? 'Internship' : 'Job'} Application*

👤 *Candidate Details:*
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.currentLocation}

💼 *Position Information:*
Position: ${data.position}
Experience: ${data.experience}
${isInternship ? 'Application Type: Internship' : `Notice Period: ${data.noticePeriod}`}

${isInternship ? '💰 *Stipend Expectations:*' : '💰 *Compensation Details:*'}
${isInternship && data.currentCTC ? `Expected Stipend: ${data.currentCTC}` : ''}
${isInternship && data.expectedCTC ? `Preferred Stipend: ${data.expectedCTC}` : ''}
${!isInternship && data.currentCTC ? `Current CTC: ${data.currentCTC}` : ''}
${!isInternship && data.expectedCTC ? `Expected CTC: ${data.expectedCTC}` : ''}

🎯 *Key Skills:*
${data.skills}

${data.additionalInfo ? `💬 *Additional Information:*\n${data.additionalInfo}` : ''}

---
This ${isInternship ? 'internship' : 'job'} application was submitted via SSMT Solutions website.`;
};

export default function Apply() {
  const router = useRouter();
  const applicationType = (router.query.type as string) || 'job';
  const isInternship = applicationType === 'intern';
  
  const pageTitle = isInternship ? 'Apply for Internship' : 'Apply for Job';
  const pageDescription = isInternship 
    ? 'Apply for internship opportunities at SSMT Solutions. Gain hands-on experience in software development, data science, cloud computing, and more.'
    : 'Apply for career opportunities at SSMT Solutions. Join our team of experts in software development, data science, cloud computing, and digital marketing.';
  
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={isInternship ? "internship SSMT, student internship, tech internship Bengaluru, software internship" : "jobs at SSMT, career opportunities, software developer jobs, data engineer jobs, DevOps careers, Bengaluru jobs"}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: 'https://ssmtsolutions.com/' },
          { name: 'Careers', url: 'https://ssmtsolutions.com/careers' },
          { name: 'Apply', url: 'https://ssmtsolutions.com/apply' },
        ]}
      />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <Link
            href="/careers"
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Careers
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isInternship ? 'Apply for Internship' : 'Join Our Team'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {isInternship 
                ? 'Start your learning journey with hands-on experience' 
                : 'Start your career journey with SSMT Solutions'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <WhatsAppForm
            title={isInternship ? "Submit Your Internship Application" : "Submit Your Job Application"}
            description={isInternship 
              ? "Fill out the application form below and we'll connect with you on WhatsApp to discuss the internship opportunity."
              : "Fill out the application form below and we'll connect with you on WhatsApp to discuss the opportunity and next steps in the hiring process."}
            fields={getFormFields(isInternship)}
            messageTemplate={(data) => messageTemplate(data, isInternship)}
            phoneNumber={WHATSAPP_NUMBER}
            submitButtonText={`Submit ${isInternship ? 'Internship' : 'Job'} Application via WhatsApp`}
          />

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Hiring Process
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Application Review
                    </h4>
                    <p className="text-gray-600">
                      Our HR team reviews your application and reaches out via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Initial Screening
                    </h4>
                    <p className="text-gray-600">
                      Phone/video screening to understand your background and goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Technical Assessment
                    </h4>
                    <p className="text-gray-600">
                      Skills evaluation through coding tests or technical interviews
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Final Interview & Offer
                    </h4>
                    <p className="text-gray-600">
                      Meet the team, discuss role expectations, and receive your offer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">
                💡 Tips for Your Application
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Highlight relevant technical skills and projects</li>
                <li>✓ Be specific about your experience and achievements</li>
                <li>✓ Ensure your contact information is accurate</li>
                <li>✓ Have your resume ready to share on WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
