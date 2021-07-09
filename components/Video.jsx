import React, { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import styled from 'styled-components'

import 'aos/dist/aos.css';

const Video = () => {

    // # State
    const [click, setClick] = useState(false)
    console.log(click);

    // # Handle click
    const handleClick = () => setClick(!click)

    // # Change icon, when it's clicked
    const handleVideoIconChange = () => {
        return (
            click
                ? <i className="ri-pause-line"></i>
                : <i className="ri-play-line"></i>
        )
    }


    useEffect(() => {

        // # Video file
        const videoFile = document.getElementById('video-file')

        // # Play video
        const onPlay = () => {
            return (
                click
                    ? videoFile.play()
                    : videoFile.pause()
            )
        }

        // # Change icon, when video has ended
        const onVideoEnded = () => {
            videoFile.addEventListener('ended', () => (
                setClick(false)
            ))
        }

        // # Call 'em here
        onPlay()
        onVideoEnded()

    }, [click])

    return (
        <VideoSection>
            <VideoTitle>Video By Drone</VideoTitle>
            <VideoContainer>
                <VideoDescription
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration='1500'
                    data-aos-once="true"
                >
                    Find out more with our video of the most beautiful and pleasant places for you and your family, <br />
                    And your housekeeper.
                </VideoDescription>

                <VideoContent
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration='1500'
                    data-aos-once="true"
                >
                    <video id="video-file" >
                        <source
                            src="/videos/muk.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <VideoButton onClick={handleClick}>
                        {handleVideoIconChange()}
                    </VideoButton>
                </VideoContent>
            </VideoContainer>
        </VideoSection>
    )
}

export default Video


// # Styled-components
const VideoSection = styled.section`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const VideoTitle = styled.h2`
    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
`

const VideoContainer = styled.div`
    max-width: 968px;
    padding-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (min-width: 568px) {
        padding-bottom: 1rem;
        display: grid;
        grid-template-columns: 0.6fr;
        justify-content: center;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: 0.7fr;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const VideoDescription = styled.p`
    text-align: center;
    margin-bottom: 2.5rem;

    @media screen and (min-width: 1024px) {
        padding: 0 8rem;
    }
`

const VideoContent = styled.div`
    position: relative;

    @media screen and (min-width: 1024px) {
        width: 960px;
    }

    @media screen and (min-width: 1200px) {
        width: 1024px;
    }
`

const VideoButton = styled.button`
    position: absolute;
    right: 1rem;
    bottom: -1rem;
    padding: 1rem 1.5rem;

    display: flex;
    align-items: center;
    column-gap: 0.25rem;

    /* display: inline-block; */
    background-color:  hsl(190, 64%, 22%);
    /* padding: 1rem 2rem; */
    font-weight: 600;
    transition: 0.3s;

    &:hover {
        background-color: hsl(190, 64%, 15%);
    }

    i {
        font-size: 1.2rem;
        color: #fff;
    }
`
