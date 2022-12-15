import React, { useState, useEffect } from "react"
import axios from 'axios'


export default function Video({ videoId, controls, muted, width }) {
    const [video, setVideo] = useState(null)

    const [autoplay, setAutoplay] = useState(false)


    const apiFetch = async () => {
        const response = await axios.get(`https://api.vimeo.com/videos/${videoId}`, { headers: { Authorization: `bearer ${process.env.GATSBY_VIMEO_ACCESS_TOKEN}` } })

        const found = response?.data?.files.find(element => element.public_name === "1080p");
        setVideo(found?.link)
    }

    useEffect(() => {
        if (!videoId) {
            return
        }
        if (!muted) {
            if (!autoplay) {
                setAutoplay(false)
            }

        } else {
            setAutoplay(true)
        }
        apiFetch()
    }, [apiFetch, axios])


    return (
        video ?
            <div className="video">
                {!autoplay ?
                    <>
                        <div className="play-button" onClick={() => setAutoplay(true)}>Play</div>
                        <video style={{ width: `${width}%` }} src={video} controls={controls} playsInline autoPlay={autoplay} data-keepplaying loop muted={muted} />
                    </>
                    :

                    <video style={{ width: `${width}%` }} src={video} controls={controls} playsInline autoPlay={autoplay} data-autoplay data-keepplaying loop muted={muted} />

                }

            </div>

            : null
    )

}
