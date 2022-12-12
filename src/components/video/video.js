import React from "react"
const Video = ({ videoSrcURL, videoTitle, videoClassName, ...props }) => (
    <div className={videoClassName}>
        <video
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            muted
            playsInline
            autoPlay
            loop
        />
    </div>
)
export default Video