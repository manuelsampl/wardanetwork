import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import SingleTransition from '../components/transitionlink/singleTransition'
import Video from '../components/video/video'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import './landing.css'

const LandingPage = (context) => {


  const data = useStaticQuery(graphql`
    query {
        wp{
            siteOptions {
                siteOptions {
                workColor
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
                        altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    imageMobile {
                        altText
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
                        altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    imageMobile {
                        altText
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
                        altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    imageMobile {
                        altText
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
                        altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    imageMobile {
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
    }`);

  const logo = data?.wp
  return (
    <>
      <div className="landing-container">
        <SingleTransition className="btn btn-landing" path={context?.pageContext?.edge?.home?.link?.url} color={logo?.siteOptions?.siteOptions?.workColor} id="home-cta" >{context?.pageContext?.edge?.home?.link?.title}</SingleTransition>
      </div>
      <Video videoClassName="landing-video video-desktop" videoSrcURL={context?.pageContext?.edge?.home?.videoDesktop?.localFile?.publicURL} />

      {data?.wp?.siteOptions?.siteOptions?.workTransition.map((image, i) => {
        const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.workTransition.map((image, i) => {
        const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.workTransition.map((image, i) => {
        const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
        )
      })}

      {data?.wp?.siteOptions?.siteOptions?.aboutTransition.map((image, i) => {
        const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.aboutTransition.map((image, i) => {
        const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.aboutTransition.map((image, i) => {
        const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
        )
      })}

      {data?.wp?.siteOptions?.siteOptions?.contactTransition.map((image, i) => {
        const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.contactTransition.map((image, i) => {
        const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
        )
      })}

      {data?.wp?.siteOptions?.siteOptions?.contactTransition.map((image, i) => {
        const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.jobsTransition.map((image, i) => {
        const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.jobsTransition.map((image, i) => {
        const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
        )
      })}
      {data?.wp?.siteOptions?.siteOptions?.jobsTransition.map((image, i) => {
        const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
        return (
          <GatsbyImage key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
        )
      })}

    </>
  )
}

export default LandingPage
