import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Loader from '../components/loader/loader'

import Contact from '../components/contact/contact'
import Work from '../components/work/work'
import About from '../components/about/about'
import './pages.css'




const Pages = (context) => {

  const data = useStaticQuery(graphql`
    query {
        wp {
            siteOptions {
              siteOptions {
                workColor
                contactColor
                aboutColor
                jobsColor
                workTransition {
                  imageDesktop {
                    altText
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageMobile {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                }
                jobsTransition {
                  imageDesktop {
                    altText
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageMobile {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                }
                contactTransition {
                  imageDesktop {
                    altText
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageMobile {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                }
                aboutTransition {
                  imageDesktop {
                    altText
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                  imageMobile {
                    localFile {
                      childImageSharp {
                        original {
                            src
                          }
                      }
                    }
                  }
                }
              }
            }
          }
    }
        `);


  var color = data?.wp?.siteOptions?.siteOptions?.workColor
  var images = data?.wp?.siteOptions?.siteOptions?.workTransition


  if (context.path === '/work/') {
    color = data?.wp?.siteOptions?.siteOptions?.workColor
    images = data?.wp?.siteOptions?.siteOptions?.workTransition
  }

  if (context.path === '/about/') {
    color = data?.wp?.siteOptions?.siteOptions?.aboutColor
    images = data?.wp?.siteOptions?.siteOptions?.aboutTransition
  }

  if (context.path === '/jobs/') {
    color = data?.wp?.siteOptions?.siteOptions?.jobsColor
    images = data?.wp?.siteOptions?.siteOptions?.jobsTransition
  }

  if (context.path === '/contact/') {
    color = data?.wp?.siteOptions?.siteOptions?.contactColor
    images = data?.wp?.siteOptions?.siteOptions?.contactTransition
  }

  function rendererSwitch(slug, context, Contact) {

    switch (slug) {
      case 'contact':
        return (
          <Contact context={context}></Contact>
        );
      case 'work':
        return (
          <Work context={context}></Work>
        );
      case 'about':
        return (
          <About context={context}></About>
        );
      case 'jobs':
        return (
          <Contact context={context}></Contact>
        );
      default:
        return (
          <Contact context={context}></Contact>
        );

    }
  }


  return (
    <>
      <Loader color={color} images={images} />
      {rendererSwitch(context?.pageContext?.edge?.slug, context, Contact)}
    </>

  )
}

export default Pages
