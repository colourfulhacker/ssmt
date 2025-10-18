module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ssmtsolutions.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://ssmtsolutions.com'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/services': 0.9,
      '/training': 0.9,
      '/contact': 0.8,
      '/portfolio': 0.8,
      '/verify-certificate': 0.7,
      '/careers': 0.7,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
