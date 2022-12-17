import React, { useState, useEffect } from "react"

import { useInView } from "react-intersection-observer"

const AnimateIn = ({ threshold = 0.15, triggerOnce = false, delay = 0, ...remainingProps }) => {
    const [ref, inView] = useInView({ threshold, triggerOnce })

    const [isDelay, setIsDelay] = useState(true)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        if (delay > 0) {
            setIsDelay(true)
            if (isDelay) {
                setTimeout(() => {
                    setPlay(true)
                }, delay)
                return

            } else {
                return
            }
        } else {
            setIsDelay(false)
            setPlay(true)
            return

        }


    }, [delay, isDelay]);

    return (
        <div
            ref={ref}
            style={{
                // adjust these as desired
                transition: "opacity 500ms, transform 500ms",
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : 100}px)`,
            }}
            className={inView && play ? 'h1visible' : ''}
            {...remainingProps}
        />
    )
}

export default AnimateIn
