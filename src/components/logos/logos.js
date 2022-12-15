
import React, { useState, useEffect } from "react"
import Col from 'react-bootstrap/Col'
import { GatsbyImage, getImage } from "gatsby-plugin-image"





export default function Logos(logos) {

    const [visible, setVisible] = useState([0, 1, 2, 3, 4, 5, 6, 7])
    const [changed, setChanged] = useState(0)

    useEffect(() => {
        console.log(visible)
        return
    }, [visible]);


    function changeImage(e, i) {

        let r = Math.floor(Math.random() * logos.logos.length)
        let newArray = visible
        newArray[i] = r
        setVisible(newArray)
        setChanged(changed + 1)
    }

    return (
        <>
            {visible.map((v, i) => {

                const img = getImage(logos.logos[visible[i]].logo.localFile.childImageSharp.gatsbyImageData)
                return (
                    <Col xs={6} md={3} key={i} id={`logo${i}`} onMouseEnter={(e) => changeImage(e, i)} className="logo-partner-wrapper" >
                        <GatsbyImage className="logo-partner" image={img} alt={logos.logos[visible[i]].logo?.altText} />
                    </Col>
                )
            })}
        </>
    )
}

