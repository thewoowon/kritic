/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://kritic.news",
  changefreq: "daily",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  priority: 1,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*"],
      },
    ],
  },
};
