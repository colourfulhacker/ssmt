import Head from 'next/head';

interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
}

interface WebsiteData {
  name: string;
  url: string;
  description: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type: 'organization' | 'website' | 'breadcrumb' | 'course';
  data?: any;
  breadcrumbs?: BreadcrumbItem[];
}

export default function StructuredData({ type, data, breadcrumbs }: StructuredDataProps) {
  const getOrganizationSchema = (): OrganizationData => ({
    name: 'SSMT Solutions',
    url: 'https://ssmtsolutions.com',
    logo: 'https://ssmtsolutions.com/generated-icon.png',
    description: 'Leading provider of tech-driven digital marketing solutions, cloud services, cybersecurity, data engineering, and digital transformation services.',
    address: {
      streetAddress: 'Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560008',
      addressCountry: 'IN',
    },
    contactPoint: {
      telephone: '+91-9432588119',
      contactType: 'Customer Service',
      email: 'info@ssmtsolutions.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/ssmtsolutions',
      'https://twitter.com/ssmtsolutions',
    ],
  });

  const getWebsiteSchema = (): WebsiteData => ({
    name: 'SSMT Solutions',
    url: 'https://ssmtsolutions.com',
    description: 'Empowering Digital Transformation with AI-Driven Cloud and Cybersecurity Solutions',
  });

  const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

  const renderSchema = () => {
    let schema: any = {};

    switch (type) {
      case 'organization':
        const orgData = getOrganizationSchema();
        schema = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          ...orgData,
        };
        break;

      case 'website':
        const websiteData = getWebsiteSchema();
        schema = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          ...websiteData,
        };
        break;

      case 'breadcrumb':
        if (breadcrumbs && breadcrumbs.length > 0) {
          schema = getBreadcrumbSchema(breadcrumbs);
        }
        break;

      case 'course':
        if (data) {
          schema = {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: data.name,
            description: data.description,
            provider: {
              '@type': 'Organization',
              name: 'SSMT Solutions',
              sameAs: 'https://ssmtsolutions.com',
            },
            ...data,
          };
        }
        break;

      default:
        return null;
    }

    return (
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
    );
  };

  return renderSchema();
}
