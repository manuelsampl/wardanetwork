import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AnimateIn from '../../components/animateIn/animateIn'

import './jobs.scss'

export default function Jobs({ context }) {
    const data = useStaticQuery(graphql`
    query{
        wp {
            siteOptions {
                siteOptions {
                    jobsEmailAdresse
                }
            }
        }

        allWpJob {
            edges {
                node {
                    title
                    slug
                    excerpt
                    content
                    jobsDetail{
                        gender
                    }
                }
            }
        }
    }
    `)
    return (
        <div className="page-wrapper jobs-page">

            <Container fluid>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <span><h1 >{context?.pageContext?.edge?.title}</h1></span>

                    </Row>
                </AnimateIn>
            </Container>
            <Container className="smaller-container">
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xd={12} md={12}>
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.content }} />
                        </Col>
                    </Row>
                </AnimateIn>
            </Container>
            <AnimateIn triggerOnce={false}>
                <Container fluid className="jobs-wrapper">
                    <Row>
                        {data?.allWpJob?.edges?.map((job, i) => {
                            return (
                                <Col key={i} xs={12} md={6} >
                                    <Link to={`/jobs/${job?.node?.slug}`}>
                                        <div className="job-list-item">
                                            <div className="list-item-header">
                                                <h4 dangerouslySetInnerHTML={{ __html: job?.node?.title }} />
                                                <h2 dangerouslySetInnerHTML={{ __html: job?.node?.jobsDetail?.gender }} />
                                            </div>
                                            <div className="list-item-description" >
                                                <div dangerouslySetInnerHTML={{ __html: job?.node?.excerpt }} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55">
                                                    <path fillRule="evenodd" d="M27.5,0 C42.6878306,0 55,12.3121694 55,27.5 C55,42.6878306 42.6878306,55 27.5,55 C12.3121694,55 0,42.6878306 0,27.5 C0,12.3121694 12.3121694,0 27.5,0 Z M31.8402762,16.0129557 C31.236108,15.3290148 30.6319523,15.3290148 30.0277841,16.0129557 C29.3564804,16.7728903 29.322919,17.4568212 29.9270873,18.0647681 L29.9270873,18.0647681 L36.0694413,25.0181344 L12.8090282,25.0181344 C11.9363382,25.0181344 11.5,25.5120848 11.5,26.5 C11.5,27.4879148 11.9363382,27.9818638 12.8090282,27.9818638 L12.8090282,27.9818638 L36.0694413,27.9818638 L30.0277841,34.9352273 C29.4236033,35.6191667 29.4236033,36.3031061 30.0277841,36.9870455 C30.6319523,37.6709848 31.236108,37.6709848 31.8402762,36.9870455 L31.8402762,36.9870455 L40.0972254,27.5259061 C40.3657418,27.2219319 40.5,26.8799665 40.5,26.5 C40.5,26.2720195 40.4664386,26.0820376 40.3993032,25.9300513 C40.3321804,25.7780649 40.2314836,25.6260799 40.0972254,25.4740936 L40.0972254,25.4740936 Z" />
                                                </svg>
                                            </div>
                                        </div>

                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </AnimateIn>
            <div className="yellow-container">
                <AnimateIn triggerOnce={false}>
                    <Container fluid>
                        <h3 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.jobs.headline }} ></h3>
                        <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.jobs.text }} ></div>
                    </Container>
                </AnimateIn>
            </div>
        </div>
    )
}
