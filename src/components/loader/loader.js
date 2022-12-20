import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import './loader.scss'
import { defaultTransition } from "../../utils/transition";


const variants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transitionEnd: {
            display: "none",
        },
    }
}


export default function Loader({ color, images }) {

    const isSSR = typeof window === "undefined"

    const [stop, setStop] = useState(false)
    const [cnt, setCnt] = useState(-1)


    useEffect(() => {
        if (!isSSR) {
            if (document) (
                document.getElementsByClassName('tl-wrapper')[0].style.position = 'revert'
            )

            const interval = setInterval(() => {

                if (cnt < images.length - 2) {
                    setCnt(cnt + 1)
                } else {
                    setStop(true)
                    return () => {
                        setCnt(0)
                        document.getElementsByClassName('tl-wrapper')[0].style.position = 'relative'
                        clearTimeout(interval)
                    }

                }
            }, 120)


            return () => clearTimeout(interval);
        } else {
            return
        }
    }, [cnt, images.length])


    const imageDesktop = getImage(images[cnt + 1].imageDesktop.localFile.childImageSharp.gatsbyImageData)
    const imageTablet = getImage(images[cnt + 1].imageIpad.localFile.childImageSharp.gatsbyImageData)
    const imageMobile = getImage(images[cnt + 1].imageMobile.localFile.childImageSharp.gatsbyImageData)

    return (
        <motion.div className="full-loader" variants={variants} initial={"initial"} animate={"animate"} transition={defaultTransition} style={{ backgroundColor: color, zIndex: '99999999999999999999' }}>
            {cnt >= -1 && !stop ?
                <>
                    <GatsbyImage loading="eager" className="video-desktop" alt={images[cnt + 1].imageDesktop.altText} image={imageDesktop} />
                    <GatsbyImage loading="eager" className="video-tablet" alt={images[cnt + 1].imageIpad.altText} image={imageTablet} />
                    <GatsbyImage loading="eager" className="video-mobile" alt={images[cnt + 1].imageMobile.altText} image={imageMobile} />
                </>
                : <></>}
        </motion.div >
    )
}


