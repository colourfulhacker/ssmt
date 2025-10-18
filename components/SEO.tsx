import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEO = ({
  title = 'SSMT Solutions - AI-Driven Cloud & Cybersecurity Solutions',
  description = 'Leading provider of tech-driven digital marketing solutions, cloud services, cybersecurity, data engineering, and digital transformation services in Bengaluru, Karnataka.',
  keywords = 'SSMT Solutions, digital marketing, cloud services, cybersecurity, data engineering, AI solutions, DevOps, Bengaluru, Karnataka, software development, data science',
  ogImage = '/generated-icon.png',
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOProps) => {
  const router = useRouter();
  const siteName = 'SSMT Solutions';
  const siteUrl = 'https://ssmtsolutions.com';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonicalUrl = canonical || `${siteUrl}${router.asPath}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content="@ssmtsolutions" />
      <meta name="twitter:creator" content="@ssmtsolutions" />
      
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/generated-icon.png" />
      
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="SSMT Solutions" />
      <meta name="theme-color" content="#3b82f6" />
      
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
    </Head>
  );
};

export default SEO;
