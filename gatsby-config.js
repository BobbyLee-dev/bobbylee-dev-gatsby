module.exports = {
  siteMetadata: {
    title: `Bobby Lee`,
    description: `Personal Site for Bobby Lee.`,
    author: `https://github.com/BobbyLee-dev`,
  },
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/README.md
       *
       */
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL || `https://sapphireapi.com/bobby/graphql/`,
        develop: {
          nodeUpdateInterval: 300,
        },
        html: {
          useGatsbyImage: true,
          imageQuality: 80,
          imageMaxWidth: 1400,
          createStaticFiles: true,
        },
        schema: {
          timeout: 80000,
        },
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bobby Lee`,
        short_name: `Bobby Lee`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `dodgerblue`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `lato\:300,400,400i,700`, // you can also specify font weights and styles
    //     ],
    //     display: 'swap',
    //   },
    // },
    // {

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ],
}
