import React from "react"

import { useInView } from "react-intersection-observer"

const AnimateIn = ({ threshold = 0.15, triggerOnce = false, ...remainingProps }) => {
    const [ref, inView] = useInView({ threshold, triggerOnce })

    return (
        <div
            ref={ref}
            style={{
                // adjust these as desired
                transition: "opacity 500ms, transform 500ms",
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : 100}px)`,
            }}
            {...remainingProps}
        />
    )
}

export default AnimateIn
