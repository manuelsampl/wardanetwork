import React, { useState, useMemo } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Masonry from 'react-masonry-component';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useMousePosition from "../../hooks/useMousePosition/useMousePosition"

import AnimateIn from '../../components/animateIn/animateIn'
import FadeIn from '../../components/animateIn/fadeIn'

import './work.scss'




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

    const { x, y } = useMousePosition()
    const [absoluteY, setAbsoluteY] = useState(0)
    const [absoluteX, setAbsoluteX] = useState(0)
    const [hoveredElement, setHoveredElement] = useState(undefined)


    const isSSR = typeof window === "undefined"

    if (!isSSR) {
        window.addEventListener('scroll', (e) => setY(e))
    }


    function setY(e) {
        if (!isSSR && hoveredElement != undefined) {
            const elem = hoveredElement

            const rect = elem.getBoundingClientRect()
            setAbsoluteY(rect.top)
        }
    }

    function handleMouseEnter(e) {
        setAbsoluteX(e.target.parentElement.offsetParent.offsetLeft)
        setHoveredElement(e.target)
        const elem = e.target
        const rect = elem.getBoundingClientRect()
        setAbsoluteY(rect.top)
    }



    const masonryOptions = {
        transitionDuration: 0
    };


    const imagesLoadedOptions = { background: '.my-bg-image-el' }

    return (

        <div className="page-wrapper work-page">
            {!isSSR &&
                <>
                    <AnimateIn triggerOnce="true" delay={1400}>
                        <Container fluid className="work-top">
                            <Row>
                                <span><h1 className="work-h1">{context?.pageContext?.edge?.title}</h1></span>

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
                    <Container fluid className="works-masonry-container mobile-hide">
                        <Masonry
                            className={'my-gallery'} // default ''
                            elementType={'div'} // default 'div'
                            options={masonryOptions} // default {}
                            disableImagesLoaded={false} // default false
                            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                            imagesLoadedOptions={imagesLoadedOptions} // default {}
                        >
                            {data.allWpWork?.edges?.map((item, i) => {
                                const image = getImage(item?.node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
                                const link = item?.node?.slug

                                if (item?.node?.work?.overviewHeight === "1") {

                                    if (item?.node?.work?.overviewWidth === "1") {
                                        return (
                                            <Col key={i} xs={12} md={6} className="masonry-margin max-height-1" >
                                                <Link to={`/work/${link}`} className="overflowHidden" >
                                                    <FadeIn triggerOnce={false}>
                                                        <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                    </FadeIn>
                                                    <div id={`hover_${i}`} className="work-hover-container" onMouseEnter={(e) => handleMouseEnter(e)} >
                                                        <Item>
                                                            <div className="hover-caption" style={{ left: `${x - absoluteX - 200}px`, top: `${y - absoluteY - 50}px` }}>
                                                                <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                            </div>
                                                        </Item>
                                                    </div>
                                                    <div className="desktop-hide">
                                                        <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                        <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                    </div>
                                                </Link>
                                            </Col>
                                        )
                                    } else {
                                        return (
                                            <Col key={i} xs={12} className="masonry-margin max-height-1" >
                                                <Link to={`/work/${link}`} className="overflowHidden" >
                                                    <FadeIn triggerOnce={false}>
                                                        <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                    </FadeIn>

                                                    <div id={`hover_${i}`} className="work-hover-container" onMouseEnter={(e) => handleMouseEnter(e)} >
                                                        <Item>
                                                            <div className="hover-caption" style={{ left: `${x - absoluteX - 200}px`, top: `${y - absoluteY - 50}px` }}>
                                                                <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                            </div>
                                                        </Item>
                                                    </div>
                                                    <div className="desktop-hide">
                                                        <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
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
                                                <Link to={`/work/${link}`} className="overflowHidden" >
                                                    <FadeIn triggerOnce={false}>
                                                        <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                    </FadeIn>
                                                    <div className="hover-follow">
                                                        <h3>{item?.node?.title}</h3>
                                                        <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                    </div>
                                                    <div id={`hover_${i}`} className="work-hover-container" onMouseEnter={(e) => handleMouseEnter(e)} >
                                                        <Item>
                                                            <div className="hover-caption" style={{ left: `${x - absoluteX - 200}px`, top: `${y - absoluteY - 50}px` }}>
                                                                <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                            </div>
                                                        </Item>
                                                    </div>

                                                </Link>
                                                <div className="desktop-hide">
                                                    <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                    <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                </div>
                                            </Col>
                                        )
                                    } else {
                                        return (
                                            <Col key={i} xs={12} className="masonry-margin max-height-2" >
                                                <Link to={`/work/${link}`} className="overflowHidden" >
                                                    <FadeIn triggerOnce={false}>
                                                        <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                    </FadeIn>
                                                    <div id={`hover_${i}`} className="work-hover-container" onMouseEnter={(e) => handleMouseEnter(e)}>
                                                        <Item>
                                                            <div className="hover-caption" style={{ left: `${x - absoluteX - 200}px`, top: `${y - absoluteY - 50}px` }}>
                                                                <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                                <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                            </div>
                                                        </Item>
                                                    </div>

                                                </Link>
                                            </Col>
                                        )
                                    }
                                }

                            })}

                        </Masonry>
                    </Container >
                    <Container className="desktop-hide">
                        <Row>
                            {data.allWpWork?.edges?.map((item, i) => {
                                const image = getImage(item?.node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
                                const link = item?.node?.slug

                                if (item?.node?.work?.overviewHeight === "1") {

                                    if (item?.node?.work?.overviewWidth === "1") {
                                        return (
                                            <Col key={i} xs={12} md={6} >

                                                <Link to={`/work/${link}`} >
                                                    <div className="max-height-1">
                                                        <FadeIn triggerOnce={false}>
                                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                        </FadeIn>
                                                    </div>
                                                    <div>
                                                        <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                        <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                    </div>
                                                </Link>
                                            </Col>
                                        )
                                    } else {
                                        return (
                                            <Col key={i} xs={12} >

                                                <Link to={`/work/${link}`} >
                                                    <div className="max-height-1">
                                                        <FadeIn triggerOnce={false}>
                                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                        </FadeIn>
                                                    </div>
                                                    <div>
                                                        <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                        <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                    </div>
                                                </Link>
                                            </Col>

                                        )
                                    }
                                } else {
                                    if (item?.node?.work?.overviewWidth === "1") {
                                        return (
                                            <Col key={i} xs={12} md={6}  >
                                                <Link to={`/work/${link}`}  >
                                                    <div className="max-height-2">

                                                        <FadeIn triggerOnce={false}>
                                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                        </FadeIn>
                                                    </div>
                                                    <div>
                                                        <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                        <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                    </div>
                                                </Link>
                                            </Col>
                                        )
                                    } else {
                                        return (
                                            <Col key={i} xs={12} >

                                                <Link to={`/work/${link}`} >
                                                    <div className="max-height-2">
                                                        <FadeIn triggerOnce={false}>
                                                            <GatsbyImage image={image} alt={item?.node?.featuredImage?.node?.altText}></GatsbyImage>
                                                        </FadeIn>
                                                    </div>
                                                    <div className="mobile-caption">
                                                        <h3 dangerouslySetInnerHTML={{ __html: item?.node?.title }} />
                                                        <p className="text-small">{item?.node?.work?.subheadline}</p>
                                                    </div>
                                                </Link>
                                            </Col>
                                        )
                                    }
                                }

                            })}
                        </Row>
                    </Container>
                </>
            }
        </div >
    )
}
