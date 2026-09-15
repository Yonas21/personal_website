/* eslint-env node */
module.exports = {
  siteUrl: 'https://yonasalem.vercel.app',
  exclude: ['/404*', '/500*'],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : config.changefreq,
      priority: path === '/' ? 1 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500'],
      },
    ],
  },
};
