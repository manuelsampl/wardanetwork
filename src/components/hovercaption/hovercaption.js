import React, { useState } from "react"


import useMousePosition from "../../hooks/useMousePosition/useMousePosition"






export default function HoverCaption({ hoverId, captionTitle, captionSubtitle }) {

    const [hovered, setHovered] = useState(false)
    const { x, y } = useMousePosition()
    const [absoluteY, setAbsoluteY] = useState(0)


    window.addEventListener('scroll', (e) => setY(e))

    function setY(e) {
        const elem = document.getElementById(`hover_${hoverId}`)
        const rect = elem.getBoundingClientRect()
        setAbsoluteY(rect.top)
    }

    function handleMouseEnter(e) {
        setHovered(true)
        const elem = e.target
        const rect = elem.getBoundingClientRect()
        setAbsoluteY(rect.top)
    }


    function handleMouseLeave() {
        setHovered(false)
    }


    return (
        <div id={`hover_${hoverId}`} className="work-hover-container" style={{ left: `${x}px`, top: `${y - absoluteY}px` }} onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
            {hovered ?
                <div className="hover-caption">
                    <h3 dangerouslySetInnerHTML={{ __html: captionTitle }} />
                    <p className="text-small">{captionSubtitle}</p>
                </div>
                : <></>
            }
        </div>
    )
}
