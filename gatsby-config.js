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
    'gatsby-plugin-sharp', {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-87415138-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Anonymizes users and respects do-not-track
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
