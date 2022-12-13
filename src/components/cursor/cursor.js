import React from "react"
// import { useContext } from "react"; used later
import useMousePosition from "../../hooks/useMousePosition/useMousePosition"
// import { MouseContext } from "../../context/mouse-context"; used from step6

import "./cursor.scss"

export default function Cursor() {
    // const { cursorType } = useContext(MouseContext); used from step6
    const { x, y } = useMousePosition()

    return (
        <>
            <div className={"ring"} style={{ left: `${x}px`, top: `${y}px` }}> </div>
            <div className={"dot"} style={{ left: `${x}px`, top: `${y}px` }}> </div>
        </>
    )
}
