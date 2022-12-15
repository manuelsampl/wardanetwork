import * as React from "react"

import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Marquee from "react-fast-marquee"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AnimateIn from '../../components/animateIn/animateIn'


import './footer.css'


const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        wp {
        footerSettings {
            footerSettings {
              bottomLeftLink{
                target
                title
                url
              }
              bottomLeftLogo {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
              }
              bottomRightText
              getInTouch
              leftColumn
              rightColumn
              social {
                socialLink
                socialIcon {
                  altText
                  sourceUrl
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
              }
              getInTouchLink {
                url
                title
                target
              }
            }
          }
        }
    }
        `);

    const bottomLeftLink = data?.wp?.footerSettings?.footerSettings?.bottomLeftLink;
    const bottomLeftLogo = data?.wp?.footerSettings?.footerSettings?.bottomLeftLogo;
    const bottomRightText = data?.wp?.footerSettings?.footerSettings?.bottomRightText;
    const getInTouch = data?.wp?.footerSettings?.footerSettings?.getInTouch;
    const leftColumn = data?.wp?.footerSettings?.footerSettings?.leftColumn;
    const rightColumn = data?.wp?.footerSettings?.footerSettings?.rightColumn;
    const social = data?.wp?.footerSettings?.footerSettings?.social;
    const getInTouchLink = data?.wp?.footerSettings?.footerSettings?.getInTouchLink;

    const image = getImage(bottomLeftLogo?.localFile?.childImageSharp?.gatsbyImageData)

    return (
        <footer className="footer">
            <Container className="d-mobile-none" fluid>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xs={12} md={2} dangerouslySetInnerHTML={{ __html: leftColumn }} className="text-xs leftFooterCol">
                        </Col>
                        <Col xs={12} md={2} dangerouslySetInnerHTML={{ __html: rightColumn }} className="text-xs rightFooterCol">
                        </Col>
                        <Col xs={12} md={6}>
                        </Col>
                        <Col xs={12} md={2} className="socialFooter">
                            {social.map((item, i) => {
                                const icon = getImage(item?.socialIcon?.localFile?.childImageSharp?.gatsbyImageData)
                                return (
                                    <a rel="noreferrer" href={item?.socialLink} target="_blank" key={i}>
                                        <GatsbyImage className="social-icon" image={icon} alt={item?.socialIcon.altText} />
                                    </a>
                                )
                            })}
                        </Col>
                    </Row>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xs={12} className="getintouch">
                            <a href={getInTouchLink.getInTouchLink} aria-label="send email"><span>{getInTouch}</span></a>
                        </Col>
                    </Row>
                </AnimateIn>
                <Row>
                    <Col xs={12} md={3} >

                        <a rel="noreferrer" href={bottomLeftLink.url} target={bottomLeftLink.target} className="footer-link" aria-label={bottomLeftLink.title}>
                            <Marquee gradient={false} speed={50}>
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                            </Marquee>
                        </a>
                    </Col>
                    <Col xs={12} md={6}>

                    </Col>
                    <Col xs={12} md={3} className="copyright">
                        <div className="text-xs" dangerouslySetInnerHTML={{ __html: bottomRightText }} />
                    </Col>
                </Row>
            </Container>
            <Container className="d-desktop-none" fluid>

                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xs={12} className="getintouch">
                            <a href={getInTouchLink.getInTouchLink} aria-label="send email"><span>{getInTouch}</span></a>
                        </Col>
                    </Row>
                </AnimateIn>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xs={12} md={2} className="socialFooter">
                            {social.map((item, i) => {
                                const icon = getImage(item?.socialIcon?.localFile?.childImageSharp?.gatsbyImageData)
                                return (
                                    <a rel="noreferrer" href={item?.socialLink} target="_blank" key={i}>
                                        <GatsbyImage className="social-icon" image={icon} alt={item?.socialIcon.altText} />
                                    </a>
                                )
                            })}
                        </Col>
                        <Col xs={12} md={2} dangerouslySetInnerHTML={{ __html: leftColumn }} className="text-xs mobile-footer-txt">
                        </Col>
                        <Col xs={12} md={2} dangerouslySetInnerHTML={{ __html: rightColumn }} className="text-xs mobile-footer-txt">
                        </Col>

                    </Row>
                </AnimateIn>
                <Row>
                    <Col xs={12} md={3} >

                        <a rel="noreferrer" href={bottomLeftLink.url} target={bottomLeftLink.target} className="footer-link" aria-label={bottomLeftLink.title}>
                            <Marquee gradient={false} speed={50}>
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                            </Marquee>
                        </a>
                    </Col>
                    <Col xs={12} md={6}>

                    </Col>
                    <Col xs={12} md={3} className="copyright">
                        <div className="text-xs" dangerouslySetInnerHTML={{ __html: bottomRightText }} />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer