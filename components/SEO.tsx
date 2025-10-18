import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({
  title = 'SSMT Solutions - AI-Driven Cloud & Cybersecurity Solutions',
  description = 'Leading provider of tech-driven digital marketing solutions, cloud services, cybersecurity, data engineering, and digital transformation services in Bengaluru, Karnataka.',
  keywords = 'SSMT Solutions, digital marketing, cloud services, cybersecurity, data engineering, AI solutions, DevOps, Bengaluru, Karnataka, software development, data science',
  ogImage = 'https://assets.zyrosite.com/dOqbv9lxjqcgzaab/logo-1a5478-YleMKeBbKPtZ382E.svg',
  canonical
}: SEOProps) => {
  const siteName = 'SSMT Solutions';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="icon" href="/favicon.ico" />
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta name="robots" content="index, follow" />
      <meta name="author" content="SSMT Solutions" />
    </Head>
  );
};

export default SEO;
