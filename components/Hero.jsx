import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'
import styled from 'styled-components'

import { FacebookShareButton, TwitterShareButton, LineShareButton } from 'react-share'

import 'aos/dist/aos.css';

const Hero = () => {

    return (
        <HeroContainer id="home">
            <HeroVideoBg
                src="/videos/mukdahan.mp4"
                alt="hero-image"
                autoPlay
                loop
                muted
                type="video/mp4"
            />
            <HeroWrapper
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-once="true"
            >
                <HeroContent>
                    <Heading >Discover your place</Heading>
                    <Content >
                        <span>Explore The <br /> Best </span>
                        <strong>Beautiful <br /> Places</strong>
                    </Content>
                    <ExploreBtn>
                        <Link href="#about">
                            <a>Explore</a>
                        </Link>
                    </ExploreBtn>
                </HeroContent>

                <SocialIcon>
                    <SocialLink>
                        <SocialLinkItem >
                            <FacebookShareButton
                                url="https://mukdahan-discover.vercel.app/"
                                quote="Let's traveling in Muk"
                                hashtag="#Muk"
                            >
                                <i className="ri-facebook-box-fill"></i>
                            </FacebookShareButton>
                        </SocialLinkItem>
                        <SocialLinkItem >
                            <LineShareButton
                                url="https://mukdahan-discover.vercel.app/"
                                title="Let's traveling in Muk"
                            >
                                <i class="ri-line-fill"></i>
                            </LineShareButton>
                        </SocialLinkItem>
                        <SocialLinkItem >
                            <TwitterShareButton
                                url="https://mukdahan-discover.vercel.app/"
                                title="Let's traveling in Muk"
                                hashtags={["Muk", "Mukdahan"]}
                                via="3rd_rabbitGo"
                            >
                                <i className="ri-twitter-fill"></i>
                            </TwitterShareButton>
                        </SocialLinkItem>
                    </SocialLink>
                </SocialIcon>

                <InfoBox>
                    <InfoText>
                        <span>Find best places to visit</span>
                        <Link href="#about">
                            <a>
                                More
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </Link>
                    </InfoText>
                    <InfoImage>
                        <ImageItem
                            src="/images/image2.jpg"
                            alt="more-image"
                        />
                    </InfoImage>
                </InfoBox>

            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero


// # Styled-components
const HeroContainer = styled.section`
    /* padding: 4.5rem 0 2.5rem; */
    /* height: 100vh; */
    
    @media screen and (min-height: 721px) {
        height: 640px;
    }

    @media screen and (min-width: 768px) {
        height: 100vh;
    }
`

const HeroVideoBg = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 83%;

    @media screen and (min-height: 721px) {
        height: 640px;
    }
    
    @media screen and (min-width: 768px) {
        height: 100vh;
    }
`

const HeroWrapper = styled.div`   
    position: relative;
    align-content: center;
    row-gap: 3rem;
    height: calc(100vh - 3rem);
    
    max-width: 968px;
    margin-right: 1rem;
    margin-left: 1rem;
    display: grid;
    gap: 1.5rem;

    @media screen and (min-height: 721px) {
        height: 640px;
    }

    @media screen and (min-width: 768px) {
        height: 100vh;
        grid-template-rows: 1.8fr 0.5fr;
    }

    @media screen and (min-width: 1024px) {
        grid-template-rows: 2fr 0.5fr;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const HeroContent = styled.div`
    color: #fff;

    @media screen and (min-width: 768px) {
        align-self: flex-end;
    }
`

const Heading = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
`

const Content = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 2.5rem;

    @media screen and (min-width: 1024px) {
        font-size: 4rem;
    }
`

const ExploreBtn = styled.button`
    display: inline-block;
    background-color:  hsl(190, 64%, 22%);
    /* color: #fff; */
    padding: 1rem 2rem;
    font-weight: 600;
    transition: 0.3s;

    a {
        color: #fff;
    }

    &:hover {
        background-color: hsl(190, 64%, 15%);
    }
`

const SocialIcon = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-self: flex-end;
        margin-bottom: 3rem;
        column-gap: 2.5rem;
    }
`

const SocialLink = styled.div`
    font-size: 1.2rem;
    width: max-content;
    /* color: #fff; */

    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-self: flex-end;
        margin-bottom: 3rem;
        column-gap: 2.5rem;
    }
`

const SocialLinkItem = styled.div`
   i {
    color: #fff;
   }
`

const InfoBox = styled.div`
    background-color: hsl(190, 64%, 22%);
    display: flex;
    padding: 1.5rem 1rem;
    align-items: center;
    column-gap: 0.5rem;
    position: absolute;
    right: 0;
    bottom: 1rem;
    width: 228px;
    color: #fff;
    transition: .3s;

    &:hover i {
        position: absolute;
        left: 4rem;
    }

    @media screen and (min-width: 768px) {
        bottom: 5rem;
    }

    @media screen and (min-width: 1024px) {
        width: 328px;
        grid-template-columns: 1fr 2fr;
        column-gap: 2rem;
    }

    @media screen and (min-width: 1300px) {
        position: absolute;
        right: -6rem;
    }
`
const InfoText = styled.div`
    display: block;
    font-size: 0.813rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    /* color: #fff; */

    a {
        font-size: 0.813rem;
        display: flex;
        align-items: center;
        column-gap: .25rem;
        background: none;
        padding: 0;
        color: #fff;
    }
`
const InfoImage = styled.div`
    overflow: hidden;
    width: 145px;
        
    &:hover img {
        transform: scale(1.2);
    }

    @media screen and (min-width: 1024px) {
        width: 300px;
    }
`

const ImageItem = styled.img`
    transition: 0.3s;
`
