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


    const { x, y } = useMousePosition()
    const [hovered, setHovered] = useState(false)
    const [counter, setCounter] = useState(0)
    const [polaroidList, setPolaroidList] = useState([])
    const [absoluteY, setAbsoluteY] = useState(0)

    window.addEventListener('scroll', (e) => setY(e))

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

    function setY(e) {
        if (document) {
            const elem = document.getElementById('polaroid-container')
            if (elem != undefined && elem != null) {
                const rect = elem?.getBoundingClientRect()
                setAbsoluteY(rect.top)
            }
        }

        return
    }

    function permission() {
        const isSSR = typeof window === "undefined"
        if (!isSSR) {
            if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
                // (optional) Do something before API request prompt.
                DeviceMotionEvent.requestPermission()
                    .then(response => {
                        // (optional) Do something after API prompt dismissed.
                        if (response == "granted") {
                            window.addEventListener("devicemotion", (e) => {
                                // do something for 'e' here.
                                console.log(e);
                            })
                        }
                    })
                    .catch(console.error)
            } else {
                alert("DeviceMotionEvent is not defined");
            }
        }
        return
    }

    return (
        <>
            <div id="polaroid-container" onClick={(e) => permission(e)} className="polaroid-container" >
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
