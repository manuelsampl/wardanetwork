import React from "react"

import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Header from '../components/header/header'
import AnimateIn from '../components/animateIn/animateIn'
import Footer from '../components/footer/footer';
import './jobs.scss'


const Jobs = (context) => {

    const data = useStaticQuery(graphql`
    query{
        wp {
            siteOptions {
                siteOptions {
                    jobsEmailAdresse
                }
            }
        }
    }
    `)


    return (
        <>
            <div className="page-wrapper jobs-page">
                <Header transparent={context?.pageContext?.edge?.pageSettings?.navbarTransparent}></Header>

                <AnimateIn triggerOnce={true} delay={1400}>

                    <Container className="jobdetails-container" >
                        <Row>
                            <Col xs={12}>
                                <span><h1>{context.pageContext.edge.title}</h1></span>
                                <h2 dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.jobsDetail?.gender }} />
                            </Col>
                        </Row>
                    </Container>
                    <Container className="jobs-format">
                        <Row>
                            <Col xs={12} >
                                <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.content }} />
                            </Col>
                        </Row>
                    </Container>
                </AnimateIn>
                <AnimateIn triggerOnce={true}>
                    <div className="yellow-container">

                        <Container className="jobs-format">
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.jobsDetail.payment }} ></div>
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.jobsDetail.apply }} ></div>
                        </Container>

                        <a className="btn btn-black" href={`mailto:${data?.wp?.siteOptions?.siteOptions?.jobsEmailAdresse}`}>JETZT BEWERBEN</a>
                    </div>
                </AnimateIn>
            </div >
            <Footer></Footer>
        </>
    )
}

export default Jobs
