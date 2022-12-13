import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Marquee from "react-fast-marquee"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Video from '../components/video/video'

import AnimateIn from '../components/animateIn/animateIn'
import FadeIn from '../components/animateIn/fadeIn'

import './landing.css'


const Work = (context) => {


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
                }
            }
        }
    }
    `)

    const otherImage1 = getImage(data?.allWpWork?.edges[0].node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
    const otherImage2 = getImage(data?.allWpWork?.edges[1].node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)

    const [openBox, setOpenBox] = useState(false)
    const [btnContent, setBtnContent] = useState('mehr Infos')

    const handleClick = () => {
        if (!openBox) {
            setOpenBox(true)
            setBtnContent('weniger Infos')
        } else {
            setOpenBox(false)
            setBtnContent('mehr Infos')
        }
    };

    const headerImage = getImage(context?.pageContext?.edge?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)

    return (
        <>
            <AnimateIn triggerOnce={false}>
                <div className="work-header">
                    <GatsbyImage image={headerImage} alt={context?.pageContext?.edge?.featuredImage?.node?.altText} />
                </div>

                <Container fluid>
                    <Row>
                        <Col className="align-right" xs={12}>
                            <svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="19px" viewBox="0 0 78.65 86.28"><path stroke="#000" strokeWidth="5px" fill="none" d="M5.43,2.88L74.95,41.52c.8,.45,1.2,.99,1.2,1.62s-.4,1.17-1.2,1.62L5.43,83.4c-.8,.45-1.49,.51-2.07,.16s-.86-.98-.86-1.88V4.61c0-.91,.29-1.54,.86-1.88s1.27-.3,2.07,.16Z" /></svg><span className="btn-2">Watch the film</span>
                        </Col>
                    </Row>
                </Container>
            </AnimateIn>
            <div className="work-page">
                <AnimateIn triggerOnce={false}>
                    <Container fluid>
                        <Row>
                            <span><motion.h1 className="work-h1"><span>{context?.pageContext?.edge?.title}</span></motion.h1></span>

                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xd={12} >
                                <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.content }} />
                            </Col>
                        </Row>
                    </Container>
                    <div className={`info-box ${openBox ? 'open-box' : ''}`}>
                        <Container>
                            <Row>
                                {context?.pageContext?.edge?.work?.infos.map((item, i) => (
                                    <Col key={i} xs={12} md={3}>
                                        <p className="text-xs bold">{item?.headline}</p>
                                        <p className="text-xs">{item?.text}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                    <div className="btn-2 info-btn" onClick={handleClick}>{btnContent}</div>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Container fluid className="work-video-container">
                        <Row>
                            <Col xs={12}>
                                <h3 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.work?.videoTitle }}></h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Video videoSrcURL={context?.pageContext?.edge?.work?.video?.localFile?.publicURL}></Video>
                            </Col>
                        </Row>
                    </Container>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Container fluid className="work-images-headline">
                        <h3 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.work?.fotoTitle }}></h3>
                    </Container>
                </AnimateIn>
                <Container fluid className="work-images-container">
                    {console.log(context?.pageContext?.edge?.work?.bilder)}
                    {context?.pageContext?.edge?.work?.bilder.map((item, i) => {
                        console.log(item?.bild?.localFile?.childImageSharp.gatsbyImageData)
                        const image = getImage(item?.bild?.localFile?.childImageSharp?.gatsbyImageData)
                        if (item?.align === "left:Left") {
                            return (
                                <Row key={i} style={{ marginBottom: `${item?.margin}px` }}>
                                    <Col xs={12} md={4} className="work-image-holder" >
                                        <AnimateIn triggerOnce={false}>
                                            <GatsbyImage image={image} className="work-image" alt={item?.bild?.altText} style={{ left: item?.shiftX, width: `${item?.width}%` }} />
                                        </AnimateIn>
                                    </Col>
                                    <Col xs={12} md={4}></Col>
                                    <Col xs={12} md={4}></Col>
                                </Row>
                            )
                        }
                        if (item?.align === "center:Center") {
                            return (
                                <Row key={i} style={{ marginBottom: `${item?.margin}px` }}>
                                    <Col xs={12} md={4}></Col>
                                    <Col xs={12} md={4} className="work-image-holder" >
                                        <AnimateIn triggerOnce={false}>
                                            <GatsbyImage image={image} className="work-image" alt={item?.bild?.altText} style={{ left: item?.shiftX, width: `${item?.width}%` }} />
                                        </AnimateIn>
                                    </Col>
                                    <Col xs={12} md={4}></Col>
                                </Row>
                            )
                        }
                        if (item?.align === "right:Right") {
                            return (
                                <Row key={i} style={{ marginBottom: `${item?.margin}px` }}>
                                    <Col xs={12} md={4}></Col>
                                    <Col xs={12} md={4}></Col>
                                    <Col xs={12} md={4} className="work-image-holder" >
                                        <AnimateIn triggerOnce={false}>
                                            <GatsbyImage image={image} className="work-image" alt={item?.bild?.altText} style={{ left: item?.shiftX, width: `${item?.width}%` }} />
                                        </AnimateIn>
                                    </Col>
                                </Row>
                            )
                        }

                    })}
                </Container>
                <div className="more-work-container">
                    <FadeIn triggerOnce={false}>
                        <Marquee gradient={false} speed={50}>
                            <h2><svg xmlns="http://www.w3.org/2000/svg" width="60" height="21" viewBox="0 0 30 35">
                                <polygon fill="#323080" points="44.92 -.115 0 -.115 0 29.282 20.895 2.559 20.895 29.282" />
                            </svg>OTHER PROJECTS</h2>
                            <h2><svg xmlns="http://www.w3.org/2000/svg" width="60" height="21" viewBox="0 0 30 35">
                                <polygon fill="#323080" points="44.92 -.115 0 -.115 0 29.282 20.895 2.559 20.895 29.282" />
                            </svg>OTHER PROJECTS</h2>
                            <h2><svg xmlns="http://www.w3.org/2000/svg" width="60" height="21" viewBox="0 0 30 35">
                                <polygon fill="#323080" points="44.92 -.115 0 -.115 0 29.282 20.895 2.559 20.895 29.282" />
                            </svg>OTHER PROJECTS</h2>
                            <h2><svg xmlns="http://www.w3.org/2000/svg" width="60" height="21" viewBox="0 0 30 35">
                                <polygon fill="#323080" points="44.92 -.115 0 -.115 0 29.282 20.895 2.559 20.895 29.282" />
                            </svg>OTHER PROJECTS</h2>
                            <h2><svg xmlns="http://www.w3.org/2000/svg" width="60" height="21" viewBox="0 0 30 35">
                                <polygon fill="#323080" points="44.92 -.115 0 -.115 0 29.282 20.895 2.559 20.895 29.282" />
                            </svg>OTHER PROJECTS</h2>
                        </Marquee>
                    </FadeIn>
                    <AnimateIn triggerOnce={false}>
                        <Container>
                            <Row>
                                <Col xs={12} md={5} className="otherWorkContainer">
                                    <GatsbyImage image={otherImage1} alt={data?.allWpWork?.edges[0].node?.featuredImage?.node?.altText} />
                                </Col>
                                <Col xs={12} md={2}>

                                </Col>
                                <Col xs={12} md={5} >
                                    <GatsbyImage className="otherWorkContainer" image={otherImage2} alt={data?.allWpWork?.edges[1].node?.featuredImage?.node?.altText} />
                                </Col>
                            </Row>
                        </Container>
                    </AnimateIn>
                </div>
            </div>
        </>
    )
}

export default Work
