import React, { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import styled from 'styled-components'
// import Link from 'next/link'
import { Link } from 'react-scroll'

const Navbar = () => {

    // # Navdata
    const navData = [
        {
            id: 1,
            title: 'Home',
            link: 'home'
        },
        {
            id: 2,
            title: 'About',
            link: 'about'
        },
        {
            id: 3,
            title: 'Discover',
            link: 'discover'
        },
        // {
        //     id: 4,
        //     title: 'Review',
        //     link: 'review'
        // },
        {
            id: 5,
            title: 'Contact',
            link: 'contact'
        }
    ]

    // # States
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    console.log(click);

    // # Mobile icon
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    useEffect(() => {

        const onScroll = () => {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY

                scrolled >= 100
                    ? setScroll(true)
                    : setScroll(false)
            })
        }

        // called
        onScroll()

    }, [])

    return (
        <Header scroll={scroll}>
            <Container>
                <NavLogo
                    scroll={scroll}
                    href="#"
                    onClick={closeMobileMenu}
                >
                    Mukdahan
                </NavLogo>
                <NavMenu click={click} >
                    <NavList>
                        {
                            navData.map(item => (
                                <NavListItem key={item.id}>
                                    <NavListItemLink
                                        onClick={handleClick}
                                        scroll={scroll}
                                        to={item.link}
                                        // smooth={true}
                                        // duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    >
                                        {item.title}
                                    </NavListItemLink>
                                </NavListItem>
                            ))
                        }
                    </NavList>

                    <DarkMode scroll={scroll}>
                        <span>Dark Mode</span>
                        <i className="ri-moon-line"></i>
                    </DarkMode>

                    <CloseMenu onClick={closeMobileMenu}>
                        <i className="ri-close-line"></i>
                    </CloseMenu>

                </NavMenu>

                <MobileMenu scroll={scroll} onClick={handleClick}>
                    <i className='ri-function-line'></i>
                </MobileMenu>

            </Container>
        </Header>
    )
}

export default Navbar


// # Styled-components
const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    /* background-color: hsl(190, 64%, 22%); */
    /* background-color: transparent; */
    background-color: ${({ scroll }) => (scroll ? '#fff' : 'transparent')};
`

const Container = styled.nav`
    max-width: 968px;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        height: calc(3rem + 1.5rem);
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const NavLogo = styled.a`
    /* color: #fff; */
    color: ${({ scroll }) => (scroll ? 'hsl(190, 24%, 35%)' : '#fff')};
    font-weight: 600;
    cursor: pointer;
`

const NavMenu = styled.div`
    
   @media screen and (max-width: 767px) {
        position: fixed;
        padding: 3rem;
        right: ${({ click }) => (click ? 0 : '-100%')};
        top: 0;
        background-color: hsl(190, 100%, 99%);
        width: 60%;
        height: 100%;
        box-shadow: -1px 0 4px rgba(14, 55, 63, 0.15);
        transition: .6s;
   }

   @media screen and (min-width: 768px) {
        position: relative;
        display: flex;
        column-gap: 1rem;   
   }
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        column-gap: 4rem;
        list-style: none;
    }
`

const NavListItem = styled.li`
    font-weight: 600;
    text-transform: uppercase;
`

const NavListItemLink = styled(Link)`
    cursor: pointer;
    color: hsl(190, 8%, 60%);
    text-decoration: none;

    &:hover {
        color: hsl(190, 24%, 35%);
    }

    &.active {
        border-bottom: 2px solid ${({ scroll }) => (scroll ? 'hsl(190, 24%, 35%)' : '#fff')};
    }

    @media screen and (min-width: 768px) {
        /* color: #fff; */
        color: ${({ scroll }) => (scroll ? 'hsl(190, 24%, 35%)' : '#fff')};
        text-transform: initial;
    
        &:hover {
            color: ${({ scroll }) => (scroll ? 'hsl(190, 24%, 35%)' : '#fff')};
        }
    }
`

const DarkMode = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    position: absolute;
    left: 3rem;
    bottom: 4rem;
    color: hsl(190, 24%, 35%);
    cursor: pointer;
    font-size: 1rem;

    span {
        font-size: 0.813rem;
    }

    @media screen and (min-width: 768px) {
        position: initial;
        /* margin-left: 10rem; */

        span {
            display: none;
        }
        
        i {
            color: ${({ scroll }) => (scroll ? 'hsl(190, 24%, 35%)' : '#fff')};
        }
    }
`

const MobileMenu = styled.div`
    font-size: 1.2rem;
    cursor: pointer;
    color: ${({ scroll }) => (scroll ? 'hsl(190, 24%, 35%)' : '#fff')};

    @media screen and (min-width: 768px) {
        display: none;
    }
`

const CloseMenu = styled.div`

    i {
        position: absolute;
        top: 0.75rem;
        right: 1rem;
        font-size: 1.5rem;
        color: hsl(190, 24%, 35%);
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        i {
           display: none;
       }
    }
`
