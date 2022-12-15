import React from "react"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AnimateIn from '../../components/animateIn/animateIn'



export default function Standard({ context }) {

    return (
        <div className="page-wrapper standard-page">

            <Container fluid>
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <span><h1 >{context?.pageContext?.edge?.title}</h1></span>

                    </Row>
                </AnimateIn>
            </Container>
            <Container >
                <AnimateIn triggerOnce={false}>
                    <Row>
                        <Col xd={12} md={12} className="align-left">
                            <div dangerouslySetInnerHTML={{ __html: context?.pageContext?.edge?.content }} />
                        </Col>
                    </Row>
                </AnimateIn>
            </Container>
        </div>
    )
}
