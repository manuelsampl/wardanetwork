import React, { useState, useEffect, useRef } from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useMousePosition from "../../hooks/useMousePosition/useMousePosition"


import "./polaroid.scss"

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

const Item = ({ polaroids, i, x, y }) => {
    const img = getImage(polaroids.polaroids[i].polaroid.localFile.childImageSharp.gatsbyImageData)
    return (

        <div id={`polaroid${i}`} className="polaroid" style={{ left: `${x}px`, top: `${y}px` }}>
            <GatsbyImage image={img} alt={polaroids.polaroids[i].polaroid.altText} />
        </div>
    )
}

export default function PolaroidMobile(polaroids) {


    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [hovered, setHovered] = useState(false)
    const [counter, setCounter] = useState(0)
    const [polaroidList, setPolaroidList] = useState([])
    const [absoluteY, setAbsoluteY] = useState(0)

    window.addEventListener('scroll', (e) => setYp(e))

    useInterval(() => {
        if (polaroids.polaroids.length > counter) {
            if (hovered) {
                setCounter(counter + 1)
                setPolaroidList(polaroidList.concat(<Item polaroids={polaroids} i={counter} x={x} y={y - absoluteY} key={polaroidList.length} />))

            }

        } else {
            setCounter(0);
        }
        return

    }, 200);


    function weAreHovered(e) {
        setY(e.touches[0].clientY)
        setX(e.touches[0].clientX)
        const elem = e.target
        if (elem) {
            const rect = elem?.getBoundingClientRect()
            setAbsoluteY(rect.top)

            setHovered(true)
        }
        return
    }

    function weAreUnHovered() {
        setHovered(false)
        return
    }

    function setYp(e) {
        if (document) {
            const elem = document.getElementById('polaroid-container')
            if (elem !== undefined && elem !== null) {
                const rect = elem?.getBoundingClientRect()
                setAbsoluteY(rect.top)
            }
        }

        return
    }

    return (
        <>
            <div id="polaroid-container-mobile" className="polaroid-container" onTouchEnd={(e) => weAreUnHovered(e)} onTouchMoveCapture={(e) => weAreHovered(e)} >
                <div className="preload-polaroids">
                    {polaroids.polaroids.map((polaroid, i) => {
                        const img = getImage(polaroid.polaroid.localFile.childImageSharp.gatsbyImageData)
                        return (
                            <GatsbyImage key={i} style={{ width: '0px', top: '0px' }} image={img} alt={polaroid.polaroid.altText} />
                        )
                    })}
                </div>
                {polaroidList}
            </div>
        </>
    )
}
