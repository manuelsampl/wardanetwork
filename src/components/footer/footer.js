import * as React from "react"

import { Link, graphql, useStaticQuery } from 'gatsby'
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

        allWpMenu {
            nodes {
              name
              menuItems {
                nodes {
                  target
                  path
                  label
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
                        <Col xs={12} lg={2} dangerouslySetInnerHTML={{ __html: leftColumn }} className="text-xs leftFooterCol">
                        </Col>
                        <Col xs={12} lg={2} dangerouslySetInnerHTML={{ __html: rightColumn }} className="text-xs rightFooterCol">
                        </Col>
                        <Col xs={12} lg={6}>
                        </Col>
                        <Col xs={12} lg={2} className="socialFooter">
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
                    <Col xs={12} lg={3} >

                        <a rel="noreferrer" href={bottomLeftLink.url} target={bottomLeftLink.target} className="footer-link" aria-label={bottomLeftLink.title}>
                            <Marquee gradient={false} speed={50}>
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                            </Marquee>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 11 10" className="bottom-arrow">
                                <path fillRule="evenodd" fill="#f8f808" d="M9.71477616,3.00795519 C9.99456955,3.25795584 9.99456955,3.50795128 9.71477616,3.75795193 C9.43498277,4.00795779 9.15518938,4.00795779 8.87539599,3.75795193 L6.03083819,1.25795584 L6.03083819,10.8829543 C6.03083819,11.2440675 5.82876817,11.4246212 5.4246212,11.4246212 C5.02047408,11.4246212 4.81840347,11.2440675 4.81840347,10.8829543 L4.81840347,1.25795584 L1.97384451,3.79961958 C1.72513895,4.04962023 1.44534905,4.03573275 1.13446673,3.75795193 C0.854672695,3.50795128 0.854672695,3.25795584 1.13446673,3.00795519 L5.0049322,-0.408713432 C5.06710845,-0.464268554 5.12928411,-0.505936196 5.19146035,-0.533711155 C5.2536366,-0.561491318 5.33135646,-0.575378798 5.4246212,-0.575378798 C5.58006202,-0.575378798 5.71995697,-0.519823676 5.84431004,-0.408713432 L9.71477616,3.00795519 Z" transform="rotate(45 5.425 5.425)" />
                            </svg>
                        </a>
                    </Col>
                    <Col xs={12} lg={6} className="footer-nav">
                        {data.allWpMenu.nodes[1].menuItems.nodes.map((item, i, data) => {
                            return (
                                <Link className="footer-nav-link" key={i} index={i} to={item?.path} target={item?.target}>{item?.label}</Link>
                            )

                        })}
                    </Col>
                    <Col xs={12} lg={3} className="copyright">
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
                        <Col xs={12} lg={2} className="socialFooter">
                            {social.map((item, i) => {
                                const icon = getImage(item?.socialIcon?.localFile?.childImageSharp?.gatsbyImageData)
                                return (
                                    <a rel="noreferrer" href={item?.socialLink} target="_blank" key={i}>
                                        <GatsbyImage className="social-icon" image={icon} alt={item?.socialIcon.altText} />
                                    </a>
                                )
                            })}
                        </Col>
                        <Col xs={12} lg={2} dangerouslySetInnerHTML={{ __html: leftColumn }} className="text-xs mobile-footer-txt">
                        </Col>
                        <Col xs={12} lg={2} dangerouslySetInnerHTML={{ __html: rightColumn }} className="text-xs mobile-footer-txt">
                        </Col>

                    </Row>
                </AnimateIn>
                <Row>
                    <Col xs={12} lg={3} >

                        <a rel="noreferrer" href={bottomLeftLink.url} target={bottomLeftLink.target} className="footer-link" aria-label={bottomLeftLink.title}>
                            <Marquee gradient={false} speed={50}>
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                                <GatsbyImage image={image} className="logo-footer" alt="Logo" />
                                <div className="footer-marquee-text" dangerouslySetInnerHTML={{ __html: bottomLeftLink.title }} />
                            </Marquee>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 11 10" className="bottom-arrow">
                                <path fillRule="evenodd" fill="#f8f808" d="M9.71477616,3.00795519 C9.99456955,3.25795584 9.99456955,3.50795128 9.71477616,3.75795193 C9.43498277,4.00795779 9.15518938,4.00795779 8.87539599,3.75795193 L6.03083819,1.25795584 L6.03083819,10.8829543 C6.03083819,11.2440675 5.82876817,11.4246212 5.4246212,11.4246212 C5.02047408,11.4246212 4.81840347,11.2440675 4.81840347,10.8829543 L4.81840347,1.25795584 L1.97384451,3.79961958 C1.72513895,4.04962023 1.44534905,4.03573275 1.13446673,3.75795193 C0.854672695,3.50795128 0.854672695,3.25795584 1.13446673,3.00795519 L5.0049322,-0.408713432 C5.06710845,-0.464268554 5.12928411,-0.505936196 5.19146035,-0.533711155 C5.2536366,-0.561491318 5.33135646,-0.575378798 5.4246212,-0.575378798 C5.58006202,-0.575378798 5.71995697,-0.519823676 5.84431004,-0.408713432 L9.71477616,3.00795519 Z" transform="rotate(45 5.425 5.425)" />
                            </svg>

                        </a>
                    </Col>
                    <Col xs={12} lg={6} className="footer-nav">
                        {data.allWpMenu.nodes[1].menuItems.nodes.map((item, i, data) => {
                            return (
                                <Link className="footer-nav-link" key={i} index={i} to={item?.path} target={item?.target}>{item?.label}</Link>
                            )

                        })}
                    </Col>
                    <Col xs={12} lg={3} className="copyright">
                        <div className="text-xs" dangerouslySetInnerHTML={{ __html: bottomRightText }} />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer