import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Loader from '../components/loader/loader'
import Header from '../components/header/header'
import Contact from '../components/contact/contact'
import Work from '../components/work/work'
import About from '../components/about/about'
import Jobs from '../components/jobs/jobs'
import Standard from '../components/standard/standard'
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
                        gatsbyImageData
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  imageMobile {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                jobsTransition {
                  imageDesktop {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  imageMobile {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                contactTransition {
                  imageDesktop {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  imageMobile {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                aboutTransition {
                  imageDesktop {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  imageIpad {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  imageMobile {
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
        `);


  var color = data?.wp?.siteOptions?.siteOptions?.workColor
  var images = data?.wp?.siteOptions?.siteOptions?.workTransition


  if (context?.path === '/work/') {
    color = data?.wp?.siteOptions?.siteOptions?.workColor
    images = data?.wp?.siteOptions?.siteOptions?.workTransition
  }

  if (context?.path === '/about/') {
    color = data?.wp?.siteOptions?.siteOptions?.aboutColor
    images = data?.wp?.siteOptions?.siteOptions?.aboutTransition
  }

  if (context?.path === '/jobs/') {
    color = data?.wp?.siteOptions?.siteOptions?.jobsColor
    images = data?.wp?.siteOptions?.siteOptions?.jobsTransition
  }

  if (context?.path === '/contact/') {
    color = data?.wp?.siteOptions?.siteOptions?.contactColor
    images = data?.wp?.siteOptions?.siteOptions?.contactTransition
  }
  const isSSR = window === "undefined"

  function rendererSwitch(slug, context) {

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
          <Jobs context={context}></Jobs>
        );
      default:
        return (
          <Standard context={context}></Standard>
        );

    }
  }


  return (
    <>
      <Header transparent={context?.pageContext?.edge?.pageSettings?.navbarTransparent}></Header>
      {!isSSR &&
        <Loader color={color} images={images} id="loader" />
      }
      {rendererSwitch(context?.pageContext?.edge?.slug, context)}
    </>

  )
}

export default Pages
