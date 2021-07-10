import React from 'react'
import styled from 'styled-components'
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'

import 'aos/dist/aos.css';

import { placeData } from '../data/PlaceData'

const Places = () => {

    return (
        <PlaceSection>
            <PlaceTitle>
                Choose your place
            </PlaceTitle>
            <PlaceDesc
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
                data-aos-once="true"
            >
                When you&apos;re in a good place, we&apos;re happy for you.
            </PlaceDesc>
            <PlaceContainer
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-once="true"
            >
                {
                    placeData.map(item => (
                        <PlaceCard key={item.id}>
                            <PlaceImage
                                src={item.imageUrl}
                                alt="place-image"
                            />
                            <PlaceContent>
                                <PlaceRate>
                                    <i className="ri-star-line"></i>
                                    <PleacRateNumber>{item.rate}</PleacRateNumber>
                                </PlaceRate>
                                <PlaceData>
                                    <PlaceHeading>{item.title}</PlaceHeading>
                                    <PlaceSubTitle>{item.subTitle}</PlaceSubTitle>
                                    {/* <PlacePrice>{item.price}</PlacePrice> */}
                                </PlaceData>
                            </PlaceContent>
                            {/* <PlaceButton>
                                <i className="ri-arrow-right-line"></i>
                            </PlaceButton> */}
                        </PlaceCard>
                    ))
                }
            </PlaceContainer>
        </PlaceSection>
    )
}

export default Places


// # Styled-components
const PlaceSection = styled.section`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const PlaceTitle = styled.h2`
    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`

const PlaceDesc = styled.p`
    text-align: center;
    margin-bottom: 2rem;
`

const PlaceContainer = styled.div`
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;

    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, max-content);
    justify-content: center;

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(3, max-content);
    }

    @media screen and (min-width: 768px) {
        padding-top: 2rem;
    }

    @media screen and (min-width: 1024px) {
        gap: 3rem 2rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const PlaceCard = styled.div`
    height: 230px;
    position: relative;
    overflow: hidden;

     @media screen and (min-width: 1024px) {
        height: 333px;
        width: 250px;
     }

     &:hover img {
        transform: scale(1.1);
    }
`

const PlaceImage = styled.img`
    height: 230px;
    transition: 0.4s;

    @media screen and (min-width: 1024px) {
        /* height: 263px; */
        height: auto;
        /* width: 250px; */
     }
`

const PlaceContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75rem 0.75rem 1rem;
    color: #fff;
`

const PlaceRate = styled.span`
    align-self: flex-end;
    display: flex;
    align-items: center;
    color: #fff;

    i {
        font-size: 0.75rem;
        margin-right: .25rem;
    }
`

const PleacRateNumber = styled.span`
    font-size: .813rem;
`

const PlaceData = styled.div``

const PlaceHeading = styled.h3`
    font-size: 1rem;
    margin-bottom: .25rem;
    color: #fff;
`

const PlaceSubTitle = styled.span`
    font-size: .75rem;
    margin-bottom: 1.25rem;
    display: block;
`

const PlacePrice = styled.span`
    display: block;
`

const PlaceButton = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.75rem 1rem;

    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    background-color: hsl(190, 64%, 22%);
    color: #fff;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
        background-color: hsl(190, 64%, 15%);
    }
`
