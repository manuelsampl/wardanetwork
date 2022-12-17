import React, { useState, useEffect } from "react"

// import { useContext } from "react"; used later
import useMousePosition from "../../hooks/useMousePosition/useMousePosition"
// import { MouseContext } from "../../context/mouse-context"; used from step6

import "./cursor.scss"

export default function Cursor(mouseOver) {
    // const { cursorType } = useContext(MouseContext); used from step6

    let { x, y } = useMousePosition()

    const [overLink, setOverLink] = useState(true)
    const [isVideo, setIsVideo] = useState(true)
    const [mouseBefore, setMouseBefore] = useState()



    function checkIfOverLink(mouseOver) {
        const target = mouseOver?.mouseOver?.nodeName || ''
        const targetClass = mouseOver?.mouseOver?.className || ''
        const parentClass = mouseOver.mouseOver?.parentElement?.className || ''
        const parent1 = mouseOver.mouseOver?.parentElement?.nodeName || ''
        const parent2 = mouseOver.mouseOver?.parentElement?.parentElement?.nodeName || ''
        const parent3 = mouseOver.mouseOver?.parentElement?.parentElement?.parentElement?.nodeName || ''
        if (target === "A" || parent1 === "A" || parent2 === "A" || parent3 === "A" || parentClass === "hover-caption" || targetClass === "hover-caption" || parentClass === "hover-caption" || targetClass === "hover-image" || parentClass === "hover-image" || (targetClass === "btn-2 info-btn" || targetClass === "btn-2 info-btn-2")) {
            if ((overLink === false || overLink === undefined)) {

                setOverLink(true)
            }
            return
        } else {
            if ((overLink === true || overLink === undefined)) {
                setOverLink(false)
            }

            return
        }
    }
    function checkIfIsVideo(mouseOver) {
        console.log(mouseOver)
        const target = mouseOver?.mouseOver?.nodeName || ''
        const parent1 = mouseOver.mouseOver?.parentElement?.nodeName || ''
        const parent2 = mouseOver.mouseOver?.parentElement?.parentElement?.nodeName || ''
        const parent3 = mouseOver.mouseOver?.parentElement?.parentElement?.parentElement?.nodeName || ''
        if (target && (target === "VIDEO" || parent1 === "VIDEO" || parent2 === "VIDEO" || parent3 === "VIDEO")) {
            if ((isVideo === false || isVideo === undefined)) {

                setIsVideo(true)
            }

            return
        } else {
            if ((isVideo === true || isVideo === undefined)) {
                setIsVideo(false)
            }
            return
        }
    }


    useEffect(() => {
        if (mouseOver !== mouseBefore) {
            setMouseBefore(mouseOver)
        }
        return

    }, [mouseOver])


    useEffect(() => {
        if (mouseBefore) {
            checkIfOverLink(mouseBefore)
            checkIfIsVideo(mouseBefore)
        }

        return

    }, [mouseBefore])


    return (
        <>
            {!isVideo ?
                <>

                    <div className={"dot"} id="dot" style={overLink ? { left: `${x}px`, top: `${y}px`, width: "5px", height: "5px", backgroundColor: "#fffc00", transform: "translate(-50%, -50%)", mixBlendMode: "difference" } : { left: `${x}px`, top: `${y}px` }}> </div>

                    <div className={overLink ? "ring triangle" : "ring"} id="ring" style={overLink ? { left: `${x + 5}px`, top: `${y - 20}px` } : { left: `${x}px`, top: `${y}px` }}> </div>
                    <div className={overLink ? "ring triangle" : "ring"} id="ring" style={overLink ? { left: `${x + 20}px`, top: `${y - 20}px` } : { left: `${x}px`, top: `${y}px` }}> </div>

                </>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" >
                    <path fill="#ffffff" fillRule="evenodd" d="M45.5,0 C70.6289561,0 91,20.3710439 91,45.5 C91,70.6289561 70.6289561,91 45.5,91 C20.3710439,91 -1.00044417e-11,70.6289561 -1.00044417e-11,45.5 C-1.00044417e-11,20.3710439 20.3710439,0 45.5,0 Z M45.5,3 C22.0278981,3 3,22.0278981 3,45.5 C3,68.9721019 22.0278981,88 45.5,88 C68.9721019,88 88,68.9721019 88,45.5 C88,22.0278981 68.9721019,3 45.5,3 Z M36.28125,28.1681158 L66.66518,45.0531558 C67.016,45.2514458 67.19141,45.4878658 67.19141,45.7624158 C67.19141,46.0369758 67.016,46.2733958 66.66518,46.4716858 L36.28125,63.3567274 C35.9304298,63.5550171 35.6291865,63.5778963 35.3775112,63.4253658 C35.1258358,63.2728353 35,62.9982844 35,62.6017051 L35,28.9231358 C35,28.5265558 35.1258358,28.2520058 35.3775112,28.0994758 C35.6291865,27.9469458 35.9304298,27.9698258 36.28125,28.1681158 Z" />
                </svg>
            }

        </>
    )
}
