const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)


const { createRemoteFileNode } = require(`gatsby-source-filesystem`)


exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}


exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions


  // The “graphql” function allows us to run arbitrary
  // queries against the local WordPress graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  // ==== PAGES (WORDPRESS NATIVE) ====

  const pages = await graphql(
    `
        query {
           
            allWpPage {
                edges{
                    node{
                        title
                        content
                        slug
                        pageSettings {
                            navbarTransparent
                          }
                        home {
                            desktopVideoIdVimeo
                            mobileVideoIdVimeo
                            tabletVideoIdVimeo
                            link{
                                url
                                title
                                target
                            }
                        }
                        contact {
                            sublineIcon
                            rightField
                            leftColumn
                            icon {
                                localFile{
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                            }
                            cta {
                              target
                              title
                              url
                            }
                        }
                        jobs{
                          headline
                          text
                        }
                        about {
                            cta {
                              target
                              title
                              url
                            }
                            headline2
                            madness
                            polaroids {
                              polaroid {
                                altText
                                localFile {
                                  childImageSharp {
                                    gatsbyImageData
                                  }
                                }
                              }
                            }
                            text2
                            faq {
                              answer
                              question
                            }
                            headlinePartners
                            mediaHeadline
                            mediaSubheadline
                            mediaText
                            jobCta {
                                target
                                title
                                url
                              }
                            partners {
                              logo {
                                altText
                                localFile {
                                  childImageSharp {
                                    gatsbyImageData
                                  }
                                }
                              }
                            }
                            teamHeadline
                            team {
                                name
                                position
                                image {
                                  altText
                                  localFile {
                                    childImageSharp {
                                      gatsbyImageData
                                    }
                                  }
                                }
                                imageAdult {
                                    altText
                                    localFile {
                                      childImageSharp {
                                        gatsbyImageData
                                      }
                                    }
                                  }
                              }
                            walls {
                              title
                              image {
                                altText
                                localFile {
                                  childImageSharp {
                                    gatsbyImageData
                                  }
                                }
                              }
                            }
                            wardaMediaIcon {
                              altText
                              localFile {
                                childImageSharp {
                                  gatsbyImageData
                                }
                              }
                            }
                        }
                    }
                }
            }
        }
      `
  )


  const landingTemplate = (await path).resolve('./src/templates/landing.js')

  const pageTemplate = (await path).resolve('./src/templates/pages.js')




  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  pages.data.allWpPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    if (edge.node.slug != 'landing') {

      console.log(edge.node.slug)

      // PAGES
      createPage({
        path: edge.node.slug,
        component: slash(pageTemplate),
        context: {
          edge: edge.node
        },

      })
    } else {

      // LANDING PAGE
      createPage({
        path: '/',
        component: slash(landingTemplate),
        context: {
          edge: edge.node
        },

      })
    }
  })


  const works = await graphql(`
    query{
        allWpWork {
            edges {
              node {
                title
                content
                slug
                featuredImage {
                    node {
                      altText
                      gatsbyImage
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                work {
                  bilder {
                    align
                    margin
                    shiftX
                    width
                    bild {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                    }
                  }
                  fotoTitle
                  infos {
                    headline
                    text
                  }
                  subheadline
                  videoIdVimeo
                  video {
                    altText
                    localFile {
                        publicURL
                    }
                  }
                  videoTitle
                }
              }
            }
        }
    }
    `)

  const worksTemplate = (await path).resolve('./src/templates/work.js')

  works.data.allWpWork.edges.forEach(edge => {


    createPage({
      path: `/work/${edge.node.slug}`,
      component: slash(worksTemplate),
      context: {
        edge: edge.node
      },

    })

  })


  const jobs = await graphql(`
    query{
        allWpJob {
            edges {
              node {
                title
                content
                slug
                excerpt
                featuredImage {
                    node {
                      altText
                      gatsbyImage
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  
                }

                jobsDetail{
                  gender
                  payment
                  apply
                }
              }
            }
        }
    }
    `)

  const jobsTemplate = (await path).resolve('./src/templates/jobs.js')

  jobs.data.allWpJob.edges.forEach(edge => {


    createPage({
      path: `/jobs/${edge.node.slug}`,
      component: slash(jobsTemplate),
      context: {
        edge: edge.node
      },

    })

  })
}