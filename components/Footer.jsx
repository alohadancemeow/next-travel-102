import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'
import styled from 'styled-components'

import 'aos/dist/aos.css';

import { footerData } from '../data/FooterData'

const Footer = () => {

    return (
        <FooterSection>
            <FooterContainer
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
                data-aos-once="true"
            >
                <FooterContent>
                    <FooterData>
                        <FooterDataHeading>
                            <Link href="#">
                                <a>
                                    Mukdahan
                                </a>
                            </Link>
                        </FooterDataHeading>
                        <FooterDataDesc>
                            Located ‎‎about‎‎ 650 km. from ‎‎Bangkok, Separated from‎‎ Nakhon Phanom province on September ‎‎27,‎‎ ‎‎1982, it is‎‎ the 73rd province in Thailand.
                        </FooterDataDesc>
                        <FooterDataSocial>
                            <FooterDataSocialItem>
                                <Link href="https://www.facebook.com/">
                                    <a target="_blank">
                                        <i className="ri-facebook-box-fill"></i>
                                    </a>
                                </Link>
                            </FooterDataSocialItem>
                            <FooterDataSocialItem>
                                <Link href="https://github.com/alohadancemeow/">
                                    <a target="_blank">
                                        <i className="ri-github-fill"></i>
                                    </a>
                                </Link>
                            </FooterDataSocialItem>
                            <FooterDataSocialItem>
                                <Link href="https://twitter.com/">
                                    <a target="_blank">
                                        <i className="ri-twitter-fill"></i>
                                    </a>
                                </Link>
                            </FooterDataSocialItem>
                            <FooterDataSocialItem>
                                <Link href="https://store.steampowered.com/">
                                    <a target="_blank">
                                        <i className="ri-steam-fill"></i>
                                    </a>
                                </Link>
                            </FooterDataSocialItem>
                        </FooterDataSocial>
                    </FooterData>

                    {
                        footerData.map(item => (
                            <FooterDataLink key={item.id}>
                                <Title>{item.title}</Title>
                                <DataList>
                                    {item.items.map((itemLink, index) => (
                                        <DataItem key={index}>
                                            <DataItemLink>
                                                <Link href={itemLink.url}>
                                                    <a target="_blank">{itemLink.title}</a>
                                                </Link>
                                            </DataItemLink>
                                        </DataItem>
                                    ))}
                                </DataList>
                            </FooterDataLink>
                        ))
                    }

                </FooterContent>

                <FooterCopyRights>
                    © 2021 alohadancemeow. All rigths reserved.
                </FooterCopyRights>

            </FooterContainer>
        </FooterSection>
    )
}

export default Footer


// # Styled-components
const FooterSection = styled.footer`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const FooterContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    row-gap: 5rem;
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

const FooterContent = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;

    @media screen and (min-width: 1024px) {
        justify-items: center;
    }
`
const FooterData = styled.div`
`
const FooterDataHeading = styled.h3`
    margin-bottom: .5rem;
    font-size: 1.5rem;
    cursor: pointer;
`

const FooterDataDesc = styled.p`
    margin-bottom: 2rem;
`

const FooterDataSocial = styled.div``

const FooterDataSocialItem = styled.div`
    display: inline-block;
    
    a {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.title};
        margin-right: 1.25rem;
    }
`

const FooterDataLink = styled.div``

const Title = styled.h3`
    margin-bottom: 1rem;
    font-size: 1rem;
`

const DataList = styled.ul``

const DataItem = styled.li`
    margin-bottom: .75rem;
`

const DataItemLink = styled.div`
    a {
        color: ${({ theme }) => theme.subTitle};

        &:hover {
            color: ${({ theme }) => theme.linkHover}
        }
    }
`

const FooterCopyRights = styled.p`
    text-align: center;
    font-size: .813rem;
    color: hsl(190, 8%, 60%);
`
