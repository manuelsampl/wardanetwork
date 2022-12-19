import React, { useState, useRef, useMemo } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Marquee from "react-fast-marquee"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useMousePosition from "../hooks/useMousePosition/useMousePosition"
import VideoVimeo from '../components/videovimeo/videovimeo'
import Header from '../components/header/header'
import AnimateIn from '../components/animateIn/animateIn'
import FadeIn from '../components/animateIn/fadeIn'
import Footer from '../components/footer/footer';

import './landing.css'

const Item = ({ children }) => {
    const [hovered, eventHandlers] = useHover()

    return (
        <div {...eventHandlers} className="hover-image">{hovered && children}</div>
    )
}

const useHover = () => {
    const [hovered, setHovered] = useState()

    const eventHandlers = useMemo(() => ({
        onMouseOver() { setHovered(true) },
        onMouseOut() { setHovered(false) }
    }), [])

    return [hovered, eventHandlers]
}


const Work = (context) => {


    const data = useStaticQuery(graphql`
    query{
        allWpWork(sort: {dateGmt: DESC}) {
            edges {
                node {
                    title
                    content
                    work{
                        subheadline
                    }
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

    const { x, y } = useMousePosition()
    const [openBox, setOpenBox] = useState(false)
    const [btnContent, setBtnContent] = useState('mehr Infos')

    const myRef = useRef(null)

    const [autoplay, setAutoplay] = useState(false)



    const handleClick2 = () => {
        if (!autoplay) {
            setAutoplay(true)
        } else {
            setAutoplay(false)
        }
        return autoplay
    }

    const handleClick = () => {
        if (!openBox) {
            setOpenBox(true)
            setBtnContent('weniger Infos')
        } else {
            setOpenBox(false)
            setBtnContent('mehr Infos')
        }

        return openBox
    }


    const [absoluteY, setAbsoluteY] = useState(0)
    const [absoluteX, setAbsoluteX] = useState(0)
    const [hoveredElement, setHoveredElement] = useState(undefined)

    const isSSR = typeof window === "undefined"

    if (!isSSR) {
        window.addEventListener('scroll', (e) => setY(e))
    }


    function setY(e) {
        const isSSR = typeof window === "undefined"
        if (!isSSR && hoveredElement !== undefined) {
            const elem = hoveredElement

            const rect = elem.getBoundingClientRect()
            setAbsoluteY(rect.top)
        }
        return
    }

    function handleMouseEnter(e) {
        setAbsoluteX(e.target.parentElement.offsetParent.offsetLeft)
        setHoveredElement(e.target)
        const elem = e.target
        const rect = elem.getBoundingClientRect()
        setAbsoluteY(rect.top)
        return
    }

    function executeScroll() {
        const isSSR = typeof window === "undefined"
        if (!isSSR) {
            myRef.current.scrollIntoView()

        }
        return handleClick2()
    }


    const headerImage = getImage(context?.pageContext?.edge?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
    const image1 = getImage(data?.allWpWork?.edges[0]?.node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
    const image2 = getImage(data?.allWpWork?.edges[1]?.node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
    return (
        <>
            <Header transparent={context?.pageContext?.edge?.pageSettings?.navbarTransparent}></Header>

            <AnimateIn triggerOnce={true} delay={1400}>
                <div className="work-header">
                    <GatsbyImage image={headerImage} alt={context?.pageContext?.edge?.featuredImage?.node?.altText} />
                </div>
                <Container fluid>
                    <Row>
                        {context?.pageContext?.edge?.work?.videoIdVimeo !== null ?
                            <Col className="align-right" xs={12} onClick={executeScroll}>
                                <svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="19px" viewBox="0 0 78.65 86.28"><path stroke="#000" strokeWidth="5px" fill="none" d="M5.43,2.88L74.95,41.52c.8,.45,1.2,.99,1.2,1.62s-.4,1.17-1.2,1.62L5.43,83.4c-.8,.45-1.49,.51-2.07,.16s-.86-.98-.86-1.88V4.61c0-.91,.29-1.54,.86-1.88s1.27-.3,2.07,.16Z" /></svg><span className="btn-2 info-btn-2">Watch the film</span>
                            </Col>
                            :
                            <></>
                        }
                    </Row>
                </Container>
            </AnimateIn>
            <div className="work-page">
                <AnimateIn triggerOnce={true}>
                    <Container fluid>
                        <Row>
                            <span><h1 className="work-h1">{context?.pageContext?.edge?.title}</h1></span>
                            <h2 className="work-h2">{context?.pageContext?.edge?.work?.subheadline}</h2>
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
                                        <div className="text-xs" dangerouslySetInnerHTML={{ __html: item?.text }} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                    <div className="btn-2 info-btn" role="button"
                        tabindex={0} onClick={handleClick} onKeyDown={handleClick} onT>{btnContent}</div>
                </AnimateIn>
                {context?.pageContext?.edge?.work?.videoIdVimeo !== null ?
                    <AnimateIn triggerOnce={true}>
                        <Container ref={myRef} fluid className="work-video-container">
                            <Row>
                                <Col xs={12}>
                                    <h3 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.work?.videoTitle }}></h3>
                                </Col>
                            </Row>
                            <Row className="margin-container">
                                <Col xs={12} >
                                    {!autoplay ?
                                        <VideoVimeo muted={true} controls={true} videoId={context?.pageContext?.edge?.work?.videoIdVimeo} autoplay={autoplay} onClick={(e) => handleClick2(e)} />
                                        :
                                        <VideoVimeo muted={true} controls={true} videoId={context?.pageContext?.edge?.work?.videoIdVimeo} autoplay={autoplay} onClick={(e) => handleClick2(e)} />
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </AnimateIn>
                    :
                    <></>
                }

                <AnimateIn triggerOnce={true}>
                    <Container fluid className="work-images-headline">
                        <h3 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.work?.fotoTitle }}></h3>
                    </Container>
                </AnimateIn>
                <Container fluid className="work-images-container">
                    {context?.pageContext?.edge?.work?.bilder?.map((item, i) => {
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
                                        <AnimateIn triggerOnce={true}>
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
                                        <AnimateIn triggerOnce={true}>
                                            <GatsbyImage image={image} className="work-image" alt={item?.bild?.altText} style={{ left: item?.shiftX, width: `${item?.width}%` }} />
                                        </AnimateIn>
                                    </Col>
                                </Row>
                            )
                        }
                        return <></>

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
                    <AnimateIn triggerOnce={true} >
                        <Container luid  >
                            <Row className="justify-center">



                                <Col xs={12} md={5} className="otherWorkContainer">
                                    <Link to={`/work/${data?.allWpWork?.edges[0].node?.slug}`}>
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained bottom-works-container">
                                            <GatsbyImage image={image1} alt={data?.allWpWork?.edges[0].node?.featuredImage?.node?.altText} />
                                            <div id="hover_1" className="work-hover-container" role="link" tabindex={0} onMouseEnter={(e) => handleMouseEnter(e)} >
                                                <Item>
                                                    <div className="hover-caption hover-caption-small" style={{ left: `${x - absoluteX + 10}px`, top: `${y - absoluteY + 10}px` }}>
                                                        <h3 dangerouslySetInnerHTML={{ __html: data?.allWpWork?.edges[0]?.node?.title }} />
                                                        <p className="text-small">{data?.allWpWork?.edges[0]?.node?.work?.subheadline}</p>
                                                    </div>
                                                </Item>
                                            </div>
                                        </div>
                                        <div className="mobile-caption desktop-hide">
                                            <h3 dangerouslySetInnerHTML={{ __html: data?.allWpWork?.edges[0]?.node?.title }} />
                                            <p className="text-small">{data?.allWpWork?.edges[0]?.node?.work?.subheadline}</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} md={5} className="otherWorkContainer">
                                    <Link to={`/work/${data?.allWpWork?.edges[1]?.node?.slug}`}>
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained bottom-works-container">
                                            <GatsbyImage image={image2} alt={data?.allWpWork?.edges[1]?.node?.featuredImage?.node?.altText} />
                                            <div id="hover_2" className="work-hover-container" role="link" tabindex={0} onMouseEnter={(e) => handleMouseEnter(e)} >
                                                <Item>
                                                    <div className="hover-caption hover-caption-small" style={{ left: `${x - absoluteX + 10}px`, top: `${y - absoluteY + 10}px` }}>
                                                        <h3 dangerouslySetInnerHTML={{ __html: data?.allWpWork?.edges[1]?.node?.title }} />
                                                        <p className="text-small">{data?.allWpWork?.edges[1]?.node?.work?.subheadline}</p>
                                                    </div>
                                                </Item>
                                            </div>
                                        </div>
                                        <div className="mobile-caption desktop-hide">
                                            <h3 dangerouslySetInnerHTML={{ __html: data?.allWpWork?.edges[1]?.node?.title }} />
                                            <p className="text-small">{data?.allWpWork?.edges[1]?.node?.work?.subheadline}</p>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </AnimateIn>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Work
