import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Masonry from 'react-masonry-component';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import AnimateIn from '../../components/animateIn/animateIn'

import './work.scss'

export default function Work({ context }) {

    const data = useStaticQuery(graphql`
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
                            localFile {
                                childImageSharp {
                                gatsbyImageData
                                }
                            }
                        }
                    }
                    work{
                        subheadline
                        overviewWidth
                        overviewHeight
                    }
                }
            }
        }
    }
    `)

    const masonryOptions = {
        transitionDuration: 0
    };

    const imagesLoadedOptions = { background: '.my-bg-image-el' }

    return (
        <div className="page-wrapper contact-page">
            <AnimateIn triggerOnce={false}>
                <Container fluid>
                    <Row>
                        <span><h1 className="work-h1"><span>{context?.pageContext?.edge?.title}</span></h1></span>

                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xd={12} >
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.content }} />
                        </Col>
                    </Row>
                </Container>
            </AnimateIn>
            <Container fluid className="works-masonry-container">
                <Masonry
                    className={'my-gallery'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {data.allWpWork?.edges.map((item, i) => {
                        const image = getImage(item?.node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
                        const link = item?.node?.slug

                        if (item?.node?.work?.overviewHeight === "1") {

                            if (item?.node?.work?.overviewWidth === "1") {
                                return (
                                    <Col key={i} xs={12} md={6} className="masonry-margin max-height-1" >
                                        <Link to={`/work/${link}`} >
                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                            <div className="hover-follow">
                                                <h3>{item?.node?.title}</h3>
                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            } else {
                                return (
                                    <Col key={i} xs={12} className="masonry-margin max-height-1" >
                                        <Link to={`/work/${link}`} >
                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                            <div className="hover-follow">
                                                <h3>{item?.node?.title}</h3>
                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            }
                        } else {
                            if (item?.node?.work?.overviewWidth === "1") {
                                return (

                                    <Col key={i} xs={12} md={6} className="masonry-margin max-height-2" >
                                        <Link to={`/work/${link}`} >
                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                            <div className="hover-follow">
                                                <h3>{item?.node?.title}</h3>
                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            } else {
                                return (
                                    <Col key={i} xs={12} className="masonry-margin max-height-2" >
                                        <Link to={`/work/${link}`} >
                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                            <div className="hover-follow">
                                                <h3>{item?.node?.title}</h3>
                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            }
                        }

                    })}

                </Masonry>
            </Container >
        </div >
    )
}
