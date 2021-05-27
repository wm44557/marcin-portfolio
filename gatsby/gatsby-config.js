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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rvdilhwf',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
