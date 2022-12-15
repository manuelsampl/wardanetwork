/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({ path: './.env' })

console.log(process.env.GATSBY_DOMAIN)
module.exports = {
  siteMetadata: {
    title: `wardanetwork`,
    siteUrl: process.env.GATSBY_DOMAIN
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      url: process.env.GATSBY_WPGRAPHQL_URL,
      schema: {
        //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
        typePrefix: `Wp`,
      },
      develop: {
        //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
        hardCacheMediaFiles: true,
      },
      schema: {
        timeout: 6000000,
      },
      type: {
        MediaItem: {
          localFile: {
            requestConcurrency: 10,
          },
        },
      },
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": process.env.GATSBY_GOOGLE_ANALYTICS
    }
  }, "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `my-transition`,
  ]
};