import React from 'react'
import styled from 'styled-components'

const Experience = () => {

    const expData = [
        {
            id: 1,
            num: '35+',
            desc: 'Per week'
        },
        {
            id: 2,
            num: '150+',
            desc: 'Per months'
        },
        {
            id: 3,
            num: '1825+',
            desc: 'Per year'
        },
    ]

    return (
        <ExpSection>
            <ExpTitle>We earn your gold (currency),<br /> you gain experience.</ExpTitle>
            <ExpContainer>
                <ExpContent>
                    {
                        expData.map(item => (
                            <ExpData key={item.id}>
                                <ExpDataNumber>{item.num}</ExpDataNumber>
                                <ExpDataDescription>{item.desc}</ExpDataDescription>
                            </ExpData>
                        ))
                    }
                </ExpContent>

                <ExpImageBox>
                    <ImageBox1>
                        <img src="/images/image10.jpg" alt="exp-image" />
                    </ImageBox1>
                    <ImageBox2>
                        <img src="/images/v-images/v-image1.jpg" alt="exp-image" />
                    </ImageBox2>
                </ExpImageBox>

            </ExpContainer>
        </ExpSection>
    )
}

export default Experience


// # Styled-components
const ExpSection = styled.section`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const ExpTitle = styled.h2`
    font-size: 1.25rem;
    color: hsl(190, 64%, 18%);
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 2rem;
`

const ExpContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    row-gap: 2.5rem;
    justify-content: center;
    justify-items: center;
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const ExpContent = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (min-width: 1024px) {
        margin: 1rem 0;
        column-gap: 3.5rem;
    }
`

const ExpData = styled.div`
    text-align: center;
`

const ExpDataNumber = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: .5rem;
`

const ExpDataDescription = styled.span`
    font-size: .813rem;
`

const ExpImageBox = styled.div`
    display: grid;
    gap: 1.5rem;
    position: relative;
    padding-bottom: 2rem;
`
const ImageBox1 = styled.div`
    width: 263px;
    margin-right: 2rem;
    overflow: hidden;

    img {
        transition: .3s;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media screen and (min-width: 768px) {
        width: 363px;
        margin-right: 4rem;
    }

    @media screen and (min-width: 1024px) {
        width: 780px;
        margin-right: 7rem;
    }
`
const ImageBox2 = styled.div`
    width: 120px;
    position: absolute;
    top: 2rem;
    right: 0;
    overflow: hidden;

    img {
        transition: .3s;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media screen and (min-width: 768px) {
        width: 160px;
    }

    @media screen and (min-width: 1024px) {
        width: 350px;
        top: 3rem;
        right: -3rem;
    }
`