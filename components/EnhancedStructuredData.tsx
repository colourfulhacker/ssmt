import Head from 'next/head';

interface Props {
  type: 'organization' | 'website' | 'breadcrumb' | 'service' | 'faq' | 'localbusiness' | 'course';
  data?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
  service?: {
    name: string;
    description: string;
    serviceType: string;
    provider: string;
    areaServed: string[];
  };
  faq?: Array<{ question: string; answer: string }>;
  location?: 'bangalore' | 'jharkhand';
}

export default function EnhancedStructuredData({ type, data, breadcrumbs, service, faq, location }: Props) {
  const siteUrl = 'https://ssmtsolutions.com';

  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization', 'ProfessionalService'],
    name: 'SSMT Solutions',
    legalName: 'SSMT Solutions Private Limited',
    url: siteUrl,
    logo: `${siteUrl}/generated-icon.png`,
    image: `${siteUrl}/generated-icon.png`,
    description: 'Leading IT services provider specializing in cybersecurity training, IT staffing, cloud solutions, AI/ML, data engineering, and digital transformation services in India. Expert technology partner for businesses across Bengaluru, Karnataka, Jharkhand, and pan-India.',
    founder: {
      '@type': 'Person',
      name: 'SSMT Solutions Leadership'
    },
    foundingDate: '2020',
    foundingLocation: {
      '@type': 'Place',
      name: 'Bengaluru, Karnataka, India'
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560008',
        addressCountry: 'IN'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Shyam Nagar Colony',
        addressLocality: 'Pakur',
        addressRegion: 'Jharkhand',
        postalCode: '816107',
        addressCountry: 'IN'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9432588119',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9182607068',
        contactType: 'Sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      }
    ],
    email: 'info@ssmtsolutions.com',
    sameAs: [
      'https://www.linkedin.com/company/ssmtsolutions',
      'https://twitter.com/ssmtsolutions'
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'India'
      },
      {
        '@type': 'State',
        name: 'Karnataka'
      },
      {
        '@type': 'State',
        name: 'Jharkhand'
      },
      {
        '@type': 'City',
        name: 'Bengaluru'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'IT Staffing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'IT Staff Augmentation',
                description: 'Pre-vetted IT professionals for contract, full-time, or project-based engagements'
              }
            }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cybersecurity Training',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'Cybersecurity Certification Programs',
                description: 'Industry-aligned cybersecurity training with placement support'
              }
            }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'IT Consulting Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud & Digital Transformation',
                description: 'Enterprise cloud migration and digital transformation consulting'
              }
            }
          ]
        }
      ]
    },
    knowsAbout: [
      'Cybersecurity',
      'Cloud Computing',
      'Artificial Intelligence',
      'Machine Learning',
      'Data Engineering',
      'DevOps',
      'IT Staffing',
      'Digital Transformation',
      'Blockchain',
      'Network Security'
    ],
    slogan: 'Bridging the skill gap with IT Staffing, Cybersecurity Training, and IT Consulting'
  });

  const getLocalBusinessSchema = (loc: 'bangalore' | 'jharkhand') => {
    const locations = {
      bangalore: {
        name: 'SSMT Solutions - Bengaluru Contact Center',
        address: {
          streetAddress: 'Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560008',
          addressCountry: 'IN'
        },
        telephone: ['+91-9432588119', '+91-9182607068'],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.9716,
          longitude: 77.5946
        }
      },
      jharkhand: {
        name: 'SSMT Solutions - Jharkhand Development Center',
        address: {
          streetAddress: 'Shyam Nagar Colony',
          addressLocality: 'Pakur',
          addressRegion: 'Jharkhand',
          postalCode: '816107',
          addressCountry: 'IN'
        },
        telephone: ['+91-9432588119'],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 24.6340,
          longitude: 87.8503
        }
      }
    };

    const locationData = locations[loc];

    return {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService', 'EducationalOrganization'],
      '@id': `${siteUrl}/#${loc}`,
      name: locationData.name,
      image: `${siteUrl}/generated-icon.png`,
      url: siteUrl,
      telephone: locationData.telephone[0],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        ...locationData.address
      },
      geo: locationData.geo,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      email: 'info@ssmtsolutions.com',
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      sameAs: [
        'https://www.linkedin.com/company/ssmtsolutions',
        'https://twitter.com/ssmtsolutions'
      ]
    };
  };

  const getServiceSchema = () => {
    if (!service) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.serviceType,
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'SSMT Solutions',
        url: siteUrl
      },
      areaServed: service.areaServed.map(area => ({
        '@type': 'Country',
        name: area
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: service.name,
        itemListElement: [{
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description
          }
        }]
      }
    };
  };

  const getFAQSchema = () => {
    if (!faq || faq.length === 0) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    };
  };

  const getBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  };

  const getWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SSMT Solutions',
    alternateName: 'SSMT - IT Staffing & Cybersecurity Training',
    url: siteUrl,
    description: 'Leading IT services provider in India offering cybersecurity training, IT staffing, and consulting services',
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  });

  const getCourseSchema = () => {
    if (!data) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: data.name,
      description: data.description,
      provider: {
        '@type': 'Organization',
        name: 'SSMT Solutions',
        sameAs: siteUrl
      },
      educationalLevel: 'Professional',
      inLanguage: 'en-IN',
      availableLanguage: ['English', 'Hindi'],
      isAccessibleForFree: false,
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['onsite', 'online'],
        courseWorkload: data.duration || 'PT40H'
      }
    };
  };

  let schema;
  switch (type) {
    case 'organization':
      schema = getOrganizationSchema();
      break;
    case 'localbusiness':
      schema = location ? getLocalBusinessSchema(location) : null;
      break;
    case 'service':
      schema = getServiceSchema();
      break;
    case 'faq':
      schema = getFAQSchema();
      break;
    case 'breadcrumb':
      schema = getBreadcrumbSchema();
      break;
    case 'website':
      schema = getWebsiteSchema();
      break;
    case 'course':
      schema = getCourseSchema();
      break;
    default:
      return null;
  }

  if (!schema) return null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
