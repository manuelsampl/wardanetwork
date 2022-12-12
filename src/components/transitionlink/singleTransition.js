import React from "react"
import AniLink from "../../../plugins/my-transition/AniLink"





export default function TransitionLink({ className, path, color, id, children }) {

    return (
        <AniLink cover duration={2} direction="up" id={id} bg={color} to={path} className={className}  >{children}</AniLink>
    )
}