import * as React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "gatsby"



const NotFoundPage = () => {
  return (
    <main >
      <Container className="page-wrapper standard-page ">
        <Row>
          <Col xs={12}>
            <h1>404 - WARDA NIX?</h1>
          </Col>
        </Row>
      </Container>

    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
