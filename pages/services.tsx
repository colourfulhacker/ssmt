import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../components/SEO';
import WhatsAppForm from '../components/WhatsAppForm';
import { 
  FaUsers, FaShieldAlt, FaBrain, FaGraduationCap, FaCloud, FaLock,
  FaCode, FaDatabase, FaNetworkWired, FaCertificate, FaCheckCircle,
  FaRocket, FaHandshake, FaChartLine, FaWhatsapp, FaUserTie,
  FaCogs, FaServer, FaSearch
} from 'react-icons/fa';

const coreServices = [
  {
    id: 'staffing',
    icon: FaUsers,
    title: 'IT Staffing & Resource Augmentation',
    tagline: 'Scale Faster with Pre-Vetted IT Talent',
    description: 'We help organizations scale faster with pre-vetted, highly skilled IT professionals available for contract, full-time, or project-based engagements.',
    gradient: 'from-blue-600 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    specializedAreas: [
      { icon: FaLock, name: 'Cybersecurity & Network Security Engineers', desc: 'Protect your infrastructure' },
      { icon: FaCloud, name: 'Cloud, DevOps & SRE Experts', desc: 'AWS, Azure, GCP specialists' },
      { icon: FaCode, name: 'Software Developers', desc: 'Full Stack, Java, Python, .NET' },
      { icon: FaBrain, name: 'AI, ML & Data Analytics Professionals', desc: 'Data-driven solutions' },
      { icon: FaCogs, name: 'ERP & Enterprise Software Experts', desc: 'SAP, Oracle, Microsoft' },
      { icon: FaServer, name: 'Database Administrators', desc: 'SQL, NoSQL, Data Management' }
    ],
    engagementModels: [
      'Contract & Permanent Staffing',
      'Remote / Onsite Resource Deployment',
      'Managed Team Services',
      'Executive Hiring',
      'Project-Based Staffing',
      'Staff Augmentation'
    ],
    benefits: [
      'Pre-screened and vetted professionals',
      'Quick turnaround time (24-48 hours)',
      'Flexible engagement models',
      'Replacement guarantee',
      'Dedicated account manager',
      'Competitive pricing'
    ]
  },
  {
    id: 'training',
    icon: FaShieldAlt,
    title: 'Cybersecurity Training & Career Enablement',
    tagline: 'Build Real-World Cybersecurity Professionals',
    description: 'Advanced, practical, and certification-aligned training programs designed to create real-world cybersecurity professionals — not just certificate holders.',
    gradient: 'from-purple-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    trainingTracks: [
      { icon: FaLock, name: 'Penetration Testing & Ethical Hacking', desc: 'Offensive security skills' },
      { icon: FaShieldAlt, name: 'SOC (Security Operations Center) Analyst', desc: 'Threat detection & response' },
      { icon: FaCogs, name: 'DevSecOps & MLOps Security', desc: 'Secure development practices' },
      { icon: FaChartLine, name: 'Governance, Risk & Compliance (GRC)', desc: 'Policy & compliance' },
      { icon: FaCloud, name: 'Cloud Security (AWS, Azure)', desc: 'Cloud-native security' },
      { icon: FaSearch, name: 'Incident Response & Threat Intelligence', desc: 'Security operations' }
    ],
    trainingApproach: [
      'Hands-on Labs & Real Case Scenarios',
      'Mentorship by Industry Experts',
      'Corporate & College Training Partnerships',
      'Internship + Placement Support',
      'Live Projects & Simulations',
      'Industry-Recognized Certifications'
    ],
    whoCanJoin: [
      'College students & fresh graduates',
      'Working professionals seeking career transition',
      'IT professionals upskilling in cybersecurity',
      'Corporate teams requiring security training',
      'Career changers entering cybersecurity'
    ]
  },
  {
    id: 'consulting',
    icon: FaBrain,
    title: 'Consulting & IT Advisory Services',
    tagline: 'Strengthen Your Security Posture',
    description: 'We assist organizations in improving their security posture, technology strategy, and compliance readiness with deep expertise in Cybersecurity Architecture, DevSecOps Integration, and Cloud Governance.',
    gradient: 'from-indigo-600 to-purple-600',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    consultingAreas: [
      { icon: FaSearch, name: 'Security Risk Assessments', desc: 'Identify vulnerabilities' },
      { icon: FaCloud, name: 'Cloud & Infrastructure Security', desc: 'Secure cloud architecture' },
      { icon: FaShieldAlt, name: 'SOC Setup & Automation', desc: 'Build security operations' },
      { icon: FaCertificate, name: 'GRC & ISO 27001 Compliance', desc: 'Compliance frameworks' },
      { icon: FaLock, name: 'Vulnerability Management', desc: 'Continuous security testing' },
      { icon: FaNetworkWired, name: 'Network Security Architecture', desc: 'Zero-trust design' }
    ],
    serviceDeliverables: [
      'Comprehensive security assessments',
      'Remediation roadmap & prioritization',
      'Architecture design & review',
      'Compliance gap analysis',
      'Security policy development',
      'Ongoing advisory & support'
    ],
    clientTypes: [
      'Banking & Financial Services',
      'Healthcare & Pharma',
      'IT & Software Companies',
      'E-commerce & Retail',
      'Manufacturing & Logistics',
      'Government & Public Sector'
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState('staffing');
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [selectedFormService, setSelectedFormService] = useState('');

  const currentService = coreServices.find(s => s.id === selectedService) || coreServices[0];

  const openWhatsAppForm = (serviceId: string) => {
    setSelectedFormService(serviceId);
    setShowWhatsAppForm(true);
  };

  const whatsAppFormFields = [
    { name: 'name', label: 'Your Name', type: 'text' as const, required: true, placeholder: 'John Doe' },
    { name: 'email', label: 'Email Address', type: 'email' as const, required: true, placeholder: 'john@company.com' },
    { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: true, placeholder: '+91 98765 43210' },
    { name: 'company', label: 'Company Name', type: 'text' as const, placeholder: 'Your Company' },
    { 
      name: 'service', 
      label: 'Service Interested In', 
      type: 'select' as const, 
      required: true,
      options: [
        'IT Staffing & Resource Augmentation',
        'Cybersecurity Training & Career Enablement',
        'Consulting & IT Advisory Services'
      ]
    },
    { name: 'message', label: 'Your Requirements', type: 'textarea' as const, required: true, placeholder: 'Tell us about your needs...' }
  ];

  const messageTemplate = (data: Record<string, string>) => {
    return `Hello SSMT Solutions! 👋

I'm interested in your services.

*Contact Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || 'N/A'}

*Service Interested:* ${data.service}

*Requirements:*
${data.message}

Looking forward to hearing from you!`;
  };

  return (
    <>
      <SEO
        title="Our Services - IT Staffing, Cybersecurity Training & Consulting"
        description="SSMT Solutions offers IT Staffing & Resource Augmentation, Cybersecurity Training & Career Enablement, and Consulting & IT Advisory Services. Expert solutions for your technology needs."
        keywords="IT staffing, cybersecurity training, IT consulting, security staffing, SOC training, penetration testing, cloud security, DevSecOps, compliance consulting"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="text-sm font-semibold">🎯 Complete Technology Solutions</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
              From IT Staffing to Cybersecurity Training to Strategic Consulting — 
              <span className="font-bold"> End-to-End Expertise</span> for Your Success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {coreServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedService === service.id
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ServiceIcon className="w-5 h-5" />
                  <span className="hidden md:inline">{service.title}</span>
                  <span className="md:hidden">{service.title.split('&')[0]}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {(() => {
              const ServiceIcon = currentService.icon;
              return (
                <>
                  {/* Service Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${currentService.gradient} rounded-2xl mb-6 shadow-lg`}>
                        <ServiceIcon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{currentService.title}</h2>
                      <p className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${currentService.gradient} bg-clip-text text-transparent`}>
                        {currentService.tagline}
                      </p>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{currentService.description}</p>
                      <button
                        onClick={() => openWhatsAppForm(currentService.id)}
                        className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                      >
                        <FaWhatsapp className="w-6 h-6" />
                        <span>Get Started via WhatsApp</span>
                      </button>
                    </div>
                    <div className="relative">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={currentService.image} 
                          alt={currentService.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br ${currentService.gradient} rounded-2xl opacity-20 blur-2xl`}></div>
                    </div>
                  </div>

                  {/* Service-Specific Content */}
                  {currentService.id === 'staffing' && (
                    <>
                      <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Staffing Areas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {currentService.specializedAreas.map((area, index) => {
                            const AreaIcon = area.icon;
                            return (
                              <motion.div
                                key={area.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                              >
                                <AreaIcon className="w-8 h-8 text-blue-600 mb-4" />
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{area.name}</h4>
                                <p className="text-sm text-gray-600">{area.desc}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FaHandshake className="text-blue-600" />
                            Engagement Models
                          </h3>
                          <ul className="space-y-3">
                            {currentService.engagementModels.map((model, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <FaCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">{model}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FaRocket className="text-purple-600" />
                            Why Choose Our Staffing?
                          </h3>
                          <ul className="space-y-3">
                            {currentService.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <FaCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}

                  {currentService.id === 'training' && (
                    <>
                      <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training Tracks</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {currentService.trainingTracks.map((track, index) => {
                            const TrackIcon = track.icon;
                            return (
                              <motion.div
                                key={track.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600"
                              >
                                <TrackIcon className="w-8 h-8 text-purple-600 mb-4" />
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{track.name}</h4>
                                <p className="text-sm text-gray-600">{track.desc}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FaGraduationCap className="text-purple-600" />
                            Our Training Approach
                          </h3>
                          <ul className="space-y-3">
                            {currentService.trainingApproach.map((approach, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <FaCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">{approach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl shadow-lg text-white">
                          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <FaUserTie />
                            Who Can Join?
                          </h3>
                          <ul className="space-y-3">
                            {currentService.whoCanJoin.map((who, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                                <span>{who}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}

                  {currentService.id === 'consulting' && (
                    <>
                      <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Consulting Areas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {currentService.consultingAreas.map((area, index) => {
                            const AreaIcon = area.icon;
                            return (
                              <motion.div
                                key={area.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600"
                              >
                                <AreaIcon className="w-8 h-8 text-indigo-600 mb-4" />
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{area.name}</h4>
                                <p className="text-sm text-gray-600">{area.desc}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FaChartLine className="text-indigo-600" />
                            Service Deliverables
                          </h3>
                          <ul className="space-y-3">
                            {currentService.serviceDeliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <FaCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FaUsers className="text-blue-600" />
                            Industries We Serve
                          </h3>
                          <ul className="space-y-3">
                            {currentService.clientTypes.map((client, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <FaCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">{client}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}

                  {/* CTA Section for Current Service */}
                  <div className={`bg-gradient-to-r ${currentService.gradient} rounded-3xl p-12 text-white text-center shadow-2xl`}>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-xl mb-8 opacity-95">
                      Connect with our experts via WhatsApp for instant consultation
                    </p>
                    <button
                      onClick={() => openWhatsAppForm(currentService.id)}
                      className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <FaWhatsapp className="w-7 h-7 text-green-600" />
                      <span>Contact Us on WhatsApp</span>
                    </button>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Form Modal */}
      {showWhatsAppForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-2xl w-full my-8"
          >
            <button
              onClick={() => setShowWhatsAppForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10 shadow-lg"
            >
              ✕
            </button>
            <WhatsAppForm
              title="Get in Touch via WhatsApp"
              description="Fill in your details and we'll connect with you instantly on WhatsApp"
              fields={whatsAppFormFields}
              messageTemplate={messageTemplate}
              phoneNumber="919876543210"
              submitButtonText="Send via WhatsApp"
              defaultValues={{ service: selectedFormService }}
            />
          </motion.div>
        </div>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Whether you need skilled IT professionals, want to upskill your team, or require strategic IT consulting — we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Schedule a Consultation
              </Link>
              <Link href="/training" className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Explore Training Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
