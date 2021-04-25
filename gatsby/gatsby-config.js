import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  pathPrefix: '/marcin-portfolio',
  siteMetadata: {
    title: `Marcin Wrzos Portfolio`,
    siteUrl: 'https://Marcin.pl',
    description: 'Front&Back -end developer',
    twitter: '@marcin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'youqkixo',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
