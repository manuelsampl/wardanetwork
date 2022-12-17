import React, { useState } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';


import './layout.css'


import Cursor from '../components/cursor/cursor';


const Layout = ({ children }) => {


    const [mouseOver, setMouseOver] = useState(0)

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

    function handleMouseOver(e) {
        setMouseOver(e.target)
    }

    return (
        <div id="layoutcontainer">

            <Cursor mouseOver={mouseOver} />


            <main onMouseOver={(e) => handleMouseOver(e)} onFocus={(e) => handleMouseOver(e)} >{children}</main>

            {data?.wp?.siteOptions?.siteOptions?.workTransition.map((image, i) => {
                const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.workTransition.map((image, i) => {
                const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.workTransition.map((image, i) => {
                const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
                )
            })}

            {data?.wp?.siteOptions?.siteOptions?.aboutTransition.map((image, i) => {
                const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.aboutTransition.map((image, i) => {
                const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.aboutTransition.map((image, i) => {
                const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
                )
            })}

            {data?.wp?.siteOptions?.siteOptions?.contactTransition.map((image, i) => {
                const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.contactTransition.map((image, i) => {
                const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
                )
            })}

            {data?.wp?.siteOptions?.siteOptions?.contactTransition.map((image, i) => {
                const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.jobsTransition.map((image, i) => {
                const img = getImage(image.imageDesktop.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageDesktop.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.jobsTransition.map((image, i) => {
                const img = getImage(image.imageMobile.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageMobile.altText} image={img} />
                )
            })}
            {data?.wp?.siteOptions?.siteOptions?.jobsTransition.map((image, i) => {
                const img = getImage(image.imageIpad.localFile.childImageSharp.gatsbyImageData)
                return (
                    <GatsbyImage loading="eager" key={i} className="preloader-image" alt={image.imageIpad.altText} image={img} />
                )
            })}

        </div>
    )

}


export default Layout