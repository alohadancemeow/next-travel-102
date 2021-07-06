import React from 'react'
import styled from 'styled-components'
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'

const About = () => {
    return (
        <AboutSection id="about">
            <AboutContainer>

                <AboutContent>
                    <AboutTitle>
                        More Information <br /> About The Best Places
                    </AboutTitle>
                    <AboutDescrription>
                        You can find the most beautiful and pleasant places at the best
                        prices with special discounts, you choose the place we will guide you all the way to wait, get
                        your place now.
                    </AboutDescrription>
                    <AboutButton>
                        <Link href="#discover">
                            <a>Reserve a place</a>
                        </Link>
                    </AboutButton>
                </AboutContent>

                <AboutImage>
                    <ImageBox1>
                        <img src="/images/v-images/v-image1.jpg" alt="image-box1" />
                    </ImageBox1>
                    <ImageBox2>
                        <img src="/images/image4.jpg" alt="image-box2" />
                    </ImageBox2>
                </AboutImage>

            </AboutContainer>
        </AboutSection>
    )
}

export default About


// # Styled-components
const AboutSection = styled.section`
    padding: 4.5rem 0 2.5rem;
`

const AboutContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    row-gap: 2.5rem;
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const AboutContent = styled.div`
    text-align: center;

    @media screen and (min-width: 768px) {
        text-align: initial;
    }
`

const AboutTitle = styled.h2`
    font-size: 1.25rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 2rem;
    color: hsl(190, 64%, 18%);

    @media screen and (min-width: 768px) {
        margin-bottom: 1.5rem;
        text-align: initial;
    }
`

const AboutDescrription = styled.p`
    margin-bottom: 2rem; 
`

const AboutButton = styled.button`
    display: inline-block;
    background-color: hsl(190, 64%, 22%);
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

const AboutImage = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: center;
`

const ImageBox1 = styled.div`
    overflow: hidden;

    img {
        width: 180px;
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
        }

        @media screen and (min-width: 1024px) {
            width: 250px;
        }
    }
`

const ImageBox2 = styled.div`
     overflow: hidden;

    img {
        width: 230px;
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
        }

        @media screen and (min-width: 1024px) {
            width: 340px;
        }
    }
`