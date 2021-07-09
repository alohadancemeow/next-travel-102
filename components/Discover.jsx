import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"

import { discoverData } from '../data/DiscoverData'

const Discover = () => {

    // # install Swiper modules
    SwiperCore.use([EffectCoverflow, Autoplay]);


    return (
        <DiscoverSection id="discover">
            <DiscoverTitle>
                Discover
            </DiscoverTitle>
            <DiscoverDesc>
                You can go anywhere you want, <br /> But don't forget your toothbrush.
            </DiscoverDesc>
            <DiscoverContainer>
                <Swiper
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={32}
                    coverflowEffect={{
                        rotate: 0,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    {
                        discoverData.map(item => (
                            <SwiperSlide key={item.id}>
                                <DiscoverCard>
                                    <ImageBox>
                                        <img src={item.imageUrl} alt="discover-images" />
                                    </ImageBox>
                                    <TextBox>
                                        <Title>{item.title}</Title>
                                        <Description>{item.desc}</Description>
                                    </TextBox>
                                </DiscoverCard>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </DiscoverContainer>
        </DiscoverSection >
    )
}

export default Discover


// # Styled-components
const DiscoverSection = styled.section`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const DiscoverTitle = styled.h2`
    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`

const DiscoverDesc = styled.p`
    text-align: center;
    margin-bottom: 1rem;
`

const DiscoverContainer = styled.div`
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;
    position: relative;

    @media screen and (min-width: 768px) {
        padding-top: 2rem;
        width: 610px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1024px) {
        /* width: 700px; */
         width: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
        width: 100%;
    }
`

const DiscoverWrapper = styled.div``

const DiscoverCard = styled.div`
    position: relative;
    width: auto;
    /* width: 200px; */
    overflow: hidden;


    @media screen and (min-width: 1024px) {
        /* width: 237px; */
        width: auto;
    }
`

const ImageBox = styled.div`
    /* width: 100%; */

    img {
        /* max-width: fit-content; */
        /* height: 350px; */
        /* height: fit-content; */
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }
`

const TextBox = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1rem;
`

const Title = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 0.25rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.75rem;
    }
`

const Description = styled.span`
    color: #fff;
    font-size: 0.75rem;
    display: block;
`
