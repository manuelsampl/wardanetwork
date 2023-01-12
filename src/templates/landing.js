import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header/header'
import SingleTransition from '../components/transitionlink/singleTransition'
import VideoVimeo from '../components/videovimeo/videovimeo'
import Footer from '../components/footer/footer'

import './landing.scss'

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
      <Header transparent={context?.pageContext?.edge?.pageSettings?.navbarTransparent}></Header>
      <div className="landing-container">
        <SingleTransition className="btn btn-landing" path={context?.pageContext?.edge?.home?.link?.url} color={logo?.siteOptions?.siteOptions?.workColor} id="home-cta" >{context?.pageContext?.edge?.home?.link?.title}</SingleTransition>
      </div>
      <div className="landing-video video-desktop">
        <VideoVimeo muted={true} autoplay={true} controls={false} videoId={context?.pageContext?.edge?.home?.desktopVideoIdVimeo} />
      </div>
      <div className="landing-video video-tablet">
        <VideoVimeo muted={true} autoplay={true} controls={false} videoId={context?.pageContext?.edge?.home?.tabletVideoIdVimeo} />
      </div>
      <div className="landing-video video-mobile">
        <VideoVimeo muted={true} autoplay={true} controls={false} videoId={context?.pageContext?.edge?.home?.mobileVideoIdVimeo} />
      </div>


      <Footer></Footer>
    </>
  )
}

export default LandingPage
