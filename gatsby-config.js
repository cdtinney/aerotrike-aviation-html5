module.exports = {
  siteMetadata: {
    siteUrl: 'https://aerotrikeaviation.com',
    title: 'Aerotrike Aviation',
    description: 'Ultralight flight training at its best.',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-eslint',
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
