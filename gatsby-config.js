module.exports = {
  siteMetadata: {
    title: `JC Studio Co.`,
    description: `Next generation of Website Development`,
    author: `JC Studio Co.`,
    siteUrl: 'https://jcstudio.hk',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cooperate Website of JC Studio',
        short_name: `JC Studio`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#af143a`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
