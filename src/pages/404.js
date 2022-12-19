import React, { Suspense } from 'react'

import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Link } from 'gatsby'
import Model from "./model"
import useMousePosition from "../hooks/useMousePosition/useMousePosition"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'


function Rig() {

    let { x, y } = useMousePosition()
    return useFrame((state) => {

        state.scene.children[2].rotation.x = THREE.MathUtils.lerp(state.scene.children[2].rotation.x, -0.7 + (y / 1000) / 0.5, 0.5)
        state.scene.children[2].rotation.y = THREE.MathUtils.lerp(state.scene.children[2].rotation.y, - 0.95 + (x / 1000) / 0.8, 0.5)


    })
}

export default function NotFoundPage({ context }) {
    const isSSR = typeof window === "undefined"



    return (
        <>
            <Header></Header>
            <Container className="page-wrapper standard-page page-404">
                <Row>
                    <Col xs={12}>
                        <h1>404 - Da WARDA nix.</h1>
                        <p>Leider ist hier nichts, suche weiter...</p>
                        <Link className="btn btn-black" to="/">Zur website</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="three" id="three">
                        {!isSSR ?
                            <Canvas camera={{ position: [0, -1, 16], fov: 50 }}>
                                <ambientLight />
                                <directionalLight position={[-5, 5, 5]} />
                                <group position={[0, 0, 5]}>
                                    <Suspense fallback={null}>
                                        <Model />
                                    </Suspense>
                                </group>
                                <Rig></Rig>
                            </Canvas>
                            :
                            <>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}
