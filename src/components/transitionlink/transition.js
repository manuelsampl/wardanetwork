import React from "react"
import AniLink from "../../../plugins/my-transition/AniLink"





export default function TransitionLink({ className, path, workColor, aboutColor, jobsColor, contactColor, children }) {

    function rendererSwitch(path, workColor, aboutColor, jobsColor, contactColor, AniLink) {

        switch (path) {
            case '/work/':
                return (
                    <AniLink cover duration={1} direction="up" bg={workColor} to={path} className={className} >{children}</AniLink>
                );
            case '/about/':
                return (
                    <AniLink cover duration={1} direction="up" bg={aboutColor} to={path} className={className}  >{children}</AniLink>
                );
            case '/jobs/':
                return (
                    <AniLink cover duration={1} direction="up" bg={jobsColor} to={path} className={className}  >{children}</AniLink>
                );
            case '/contact/':
                return (
                    <AniLink cover duration={1} direction="up" bg={contactColor} to={path} className={className}  >{children}</AniLink>
                );
            default:
                return (
                    <AniLink cover duration={1} direction="up" bg={contactColor} to={path} className={className}  >{children}</AniLink>
                );
        }
    }

    return (
        rendererSwitch(path, workColor, aboutColor, jobsColor, contactColor, AniLink)
    )
}
