
import React, { useState, useEffect } from "react"
import Col from 'react-bootstrap/Col'
import { GatsbyImage, getImage } from "gatsby-plugin-image"





export default function Logos(logos) {

    const [visible, setVisible] = useState([0, 1, 2, 3, 4, 5, 6, 7])
    const [changed, setChanged] = useState(0)
    const [seconds, setSeconds] = useState(0)


    function changeImage(i) {

        let r = Math.floor(Math.random() * logos.logos.length)
        let newArray = visible
        newArray[i] = r
        setVisible(newArray)
        setChanged(changed + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let r = Math.floor(Math.random() * 8)
            changeImage(r)
            setSeconds(seconds + 1)
        }, 500);
        return () => clearInterval(interval);
    }, [seconds]);


    return (
        <>
            {visible.map((v, i) => {
                const img = getImage(logos.logos[visible[i]].logo.localFile.childImageSharp.gatsbyImageData)
                return (
                    <Col xs={6} md={3} key={i} id={`logo${i}`} className="logo-partner-wrapper" >
                        <GatsbyImage loading="eager" className="logo-partner" image={img} alt={logos.logos[visible[i]].logo?.altText} />
                    </Col>
                )
            })}
        </>
    )
}

