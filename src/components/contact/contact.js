import React from "react"
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AnimateIn from '../../components/animateIn/animateIn'
import './contact.scss'




export default function Contact({ context }) {

    const icon = getImage(context?.pageContext?.edge?.contact?.icon?.localFile?.childImageSharp?.gatsbyImageData);

    return (
        <>
            <Container fluid>
                <AnimateIn triggerOnce={true} delay={1400}>
                    <Row className="page-wrapper contact-page">
                        <span><h1 >{context?.pageContext?.edge?.title}</h1></span>

                    </Row>
                </AnimateIn>
            </Container>
            <Container className="smaller-container">
                <AnimateIn triggerOnce={true}>
                    <Row>
                        <Col xd={12} md={6}>
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.contact.leftColumn }} />
                        </Col>
                        <Col xd={12} md={6}>
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.contact.rightField }} />
                        </Col>
                    </Row>
                </AnimateIn>
            </Container>
            <div className="pink-container">
                <Container>
                    <AnimateIn triggerOnce={true}>
                        <Row>
                            <Col xs={12} className="align-pink">
                                <GatsbyImage className="sign-icon" image={icon} alt="conichiwa" /><br />
                                <Link className="btn btn-black" to={context?.pageContext?.edge?.contact?.cta?.url} target={context?.pageContext?.edge?.contact?.cta?.target}>{context?.pageContext?.edge?.contact?.cta?.title}</Link>
                            </Col>
                        </Row>
                    </AnimateIn>
                </Container>
            </div>
        </>
    )
}
