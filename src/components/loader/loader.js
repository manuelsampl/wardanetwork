import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'

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



    const [stop, setStop] = useState(false)
    const [cnt, setCnt] = useState(-1)

    useEffect(() => {
        const interval = setInterval(() => {
            if (cnt < images.length - 2) {
                setCnt(cnt + 1)
            } else {
                setStop(true)
                return () => {
                    setCnt(0)
                    clearTimeout(interval)
                }

            }
        }, 180)


        return () => clearTimeout(interval);
    }, [cnt, images.length])

    return (
        <motion.div className="full-loader" variants={variants} initial={"initial"} animate={"animate"} transition={defaultTransition} style={{ backgroundColor: color }}>
            {cnt >= -1 && !stop ?
                <>
                    <motion.img className="full-loader-desktop" src={images[cnt + 1].imageDesktop.localFile.childImageSharp.original?.src} />
                </>
                : <></>}
        </motion.div >
    )
}