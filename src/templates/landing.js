import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import SingleTransition from '../components/transitionlink/singleTransition'
import Video from '../components/video/video'

import './landing.css'

const LandingPage = (context) => {

    const data = useStaticQuery(graphql`
    query {
        wp{
            siteOptions {
                siteOptions {
                workColor
                }
            }
            
        }
    }`);

    const logo = data?.wp
    return (
        <>
            <div className="landing-container">
                <SingleTransition className="btn btn-landing" path={context?.pageContext?.edge?.home?.link?.url} color={logo?.siteOptions?.siteOptions?.workColor} id="home-cta" >{context?.pageContext?.edge?.home?.link?.title}</SingleTransition>
            </div>
            <Video videoClassName="landing-video video-desktop" videoSrcURL={context?.pageContext?.edge?.home?.videoDesktop?.localFile?.publicURL} />

        </>
    )
}

export default LandingPage
