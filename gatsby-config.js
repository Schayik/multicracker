module.exports = {
  pathPrefix: `/multicracker`,
  siteMetadata: {
    title: `Multicracker Benelux`,
    description: `Fijn snijden terwijl de structuur en scherpte worden behouden`,
    author: `Rick Janssen Bouwmeester`,
    meta: [
      { name: "msapplication-TileColor", content: "#129c51" },
      { name: "theme-color", content: "#ff0000" },
    ],
    lang: 'nl'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `models`,
        path: `${__dirname}/src/models`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Muli`,
    //         variants: [`300`, `300i`, `400`, `400i`, `700`, `700i`]
    //       }
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Multicracker Benelux`,
        short_name: `Multicracker`,
        start_url: `/`,
        theme_color: "#ff0000",
        background_color: "#129c51",
        display: "standalone",
        icon: `src/icons/favicon.png`, // This path is relative to the root of the site.
        lang: `nl`,
      }
    },
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
