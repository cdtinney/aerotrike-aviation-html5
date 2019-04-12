module.exports = {
  siteMetadata: {
    siteUrl: 'https://aerotrikeaviation.com',
    title: 'Aerotrike Aviation',
    description: 'Ultralight flight training at its best.',
  },
  plugins: [
    'gatsby-plugin-sitemap', {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://aerotrikeaviation.com',
        sitemap: 'https://aerotrikeaviation.com/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/',
        }],
      },
    }, 'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
