import React, { useState, useMemo } from "react"
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AnimateIn from '../../components/animateIn/animateIn'

import Polaroid from "../polaroid/polaroid"
import Logos from "../logos/logos"

import './about.scss'
import Circle from "../circle/circle"


const convertArrayToObject = (array, key) => {
    const initialValue = {}
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item.state,
        }
    }, initialValue)
}


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



export default function About({ context }) {

    const mediaIcon = getImage(context?.pageContext?.edge?.about?.wardaMediaIcon?.localFile?.childImageSharp?.gatsbyImageData)


    const [clicked, setClicked] = useState(convertArrayToObject(context?.pageContext?.edge?.about?.faq?.map((_, i) => {
        return {
            key: i,
            state: false
        }
    }), 'key') || [])





    const clickHandler = (i) => {
        if (clicked[i] === false) {
            setClicked({
                ...clicked,
                ...{ [i]: true }
            })
        } else {
            setClicked({
                ...clicked,
                ...{ [i]: false }
            })
        }
    }

    const isSSR = window === "undefined"


    return (
        <div className="sticky-container">
            <Container>
                <AnimateIn triggerOnce={false}>
                    <Row className="page-wrapper about-page">
                        <span><h1 >{context?.pageContext?.edge?.title}</h1></span>

                    </Row>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xd={12} className="align-center" >
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.content }} />
                            <a href={context?.pageContext?.edge?.about?.cta?.url} target={context?.pageContext?.edge?.about?.cta?.target} className="btn btn-black cta">{context?.pageContext?.edge?.about?.cta?.title}</a>
                        </Col>
                    </Row>
                </AnimateIn>
            </Container>
            <AnimateIn triggerOnce={false}>
                <div className="polaroids">
                    {!isSSR &&
                        <Polaroid polaroids={context?.pageContext?.edge?.about?.polaroids}></Polaroid>
                    }
                    <h2 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.about?.madness }} />

                </div>
            </AnimateIn>
            <Container>
                <AnimateIn triggerOnce={false}>
                    <Row className="about-page">

                        <span><h1 >{context?.pageContext?.edge?.about?.headline2}</h1></span>

                    </Row>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xd={12} className="align-center" >
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.about?.text2 }} />
                        </Col>
                    </Row>
                </AnimateIn>
            </Container>
            <Container fluid className="faq-wrapper">
                {context?.pageContext?.edge?.about?.faq?.map((item, i) => {

                    return (
                        <AnimateIn key={i} triggerOnce={false}>
                            <div onClick={() => clickHandler(i)} className="faq-container">
                                <div className="faq-headline">
                                    <h3 dangerouslySetInnerHTML={{ __html: item?.question }}></h3>
                                    {clicked[i] ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="81" viewBox="0 0 82 81">
                                            <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                                                <polygon fill="#000" fillRule="nonzero" points="41.405 53.688 41.405 41.301 53.824 41.301 53.824 37.923 41.405 37.923 41.405 25.535 38.019 25.535 38.019 37.923 25.6 37.923 25.6 41.301 38.019 41.301 38.019 53.688" />
                                                <ellipse cx="40" cy="39.5" stroke="#000" strokeWidth=".8" rx="40" ry="39.5" />
                                            </g>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 79 79">
                                            <path fillRule="evenodd" d="M39.5,0 C61.3152476,0 79,17.6847524 79,39.5 C79,61.3152476 61.3152476,79 39.5,79 C17.6847524,79 0,61.3152476 0,39.5 C0,17.6847524 17.6847524,0 39.5,0 Z M39.5,1 C18.2370371,1 1,18.2370371 1,39.5 C1,60.7629629 18.2370371,78 39.5,78 C60.7629629,78 78,60.7629629 78,39.5 C78,18.2370371 60.7629629,1 39.5,1 Z M54,38 L54,41 L26,41 L26,38 L54,38 Z" />
                                        </svg>

                                    }
                                </div>
                                <div className={`faq-answer ${clicked[i] ? "faq-answer-open" : ""}`} dangerouslySetInnerHTML={{ __html: item?.answer }} />
                            </div>
                        </AnimateIn>
                    )
                })}

            </Container>
            <AnimateIn triggerOnce={false}>
                <div className="media-wrapper">

                    <GatsbyImage className="media-logo" image={mediaIcon} alt={context?.pageContext?.edge?.about?.wardaMediaIcon?.altText} />
                    <h2 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.about?.mediaHeadline }} />
                    <div className="media-container" dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.about?.mediaText }} />
                    <h4 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.about?.mediaSubheadline }} />
                    <Container className="walls-container" fluid>
                        <Row>
                            {context?.pageContext?.edge?.about?.walls?.map((item, i) => {

                                const image = getImage(item?.image?.localFile?.childImageSharp?.gatsbyImageData)
                                return (
                                    <Col key={i} xs={12} md={4}>
                                        <GatsbyImage image={image} alt={item?.image?.altText} />
                                        <h4 dangerouslySetInnerHTML={{ __html: item?.title }} />
                                    </Col>

                                )
                            })}
                        </Row>
                    </Container>
                    <div className="green-container"></div>
                </div>
            </AnimateIn>
            <Container>
                <AnimateIn triggerOnce={false}>
                    <Row className="about-page partners-container">
                        <span><h1 >{context?.pageContext?.edge?.about?.headlinePartners}</h1></span>
                    </Row>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Logos logos={context?.pageContext?.edge?.about?.partners} />

                    </Row>
                </AnimateIn>
            </Container>
            <Container style={{ height: 'auto', overflow: 'revert' }}>
                <AnimateIn triggerOnce={false}>
                    <Row className="about-page team-container">
                        <span><h1 >{context?.pageContext?.edge?.about?.teamHeadline}</h1></span>
                    </Row>
                </AnimateIn>

            </Container>
            <div className="circle-team">
                <Circle ></Circle>
            </div>
            <Container className="bottom-row" >


                <AnimateIn triggerOnce={false}>

                    <Row>

                        {context?.pageContext?.edge?.about?.team?.map((item, i) => {
                            const image = getImage(item?.image?.localFile?.childImageSharp?.gatsbyImageData)
                            const imageAdult = getImage(item?.imageAdult?.localFile?.childImageSharp?.gatsbyImageData)
                            return (
                                <Col key={i} xs={6} md={4} >
                                    <div className="image-team-wrapper">
                                        <div className="team-image"  >
                                            <GatsbyImage className="image-baby" image={image} alt={item?.image?.altText} />
                                            <Item>
                                                <GatsbyImage className="image-adult" image={imageAdult} alt={item?.imageAdult?.altText} />
                                            </Item>
                                        </div>
                                        <h4 dangerouslySetInnerHTML={{ __html: item?.name }} />
                                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: item?.position }} />

                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col className="align-center">
                            <Link className="btn btn-black" to={context?.pageContext?.edge?.about?.jobCta?.url} target={context?.pageContext?.edge?.about?.jobCta?.target}>{context?.pageContext?.edge?.about?.jobCta?.title}</Link>
                        </Col>
                    </Row>
                </AnimateIn>
            </Container>

        </div>
    )
}
