import React, { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'
import styled from 'styled-components'

const ScrollToTop = () => {

    // # State
    const [scroll, setScroll] = useState(false)
    console.log(scroll);

    // # Go to top, when clicked
    const toTop = () => window.scrollTo(0, 0)

    // # Effect: when scrollY >= 200 ? show : hide
    useEffect(() => {

        const onScrollUp = () => {

            // use event in window
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY
                // console.log(scrolled);

                scrolled >= 200
                    ? setScroll(true)
                    : setScroll(false)
            })
        }

        // called
        onScrollUp()

    }, [scroll])

    return (
        <ScrollUp scroll={scroll} onClick={toTop}>
            <ScrollUpIcon>
                <i className='ri-arrow-up-line'></i>
            </ScrollUpIcon>
        </ScrollUp>
    )
}

export default ScrollToTop


// # Styled-components
const ScrollUp = styled.div`
    position: fixed;
    right: 1rem;
    /* bottom: -20%; */
    /* bottom: 5rem; */
    bottom: ${({ scroll }) => (scroll ? '5rem' : '-20%')};
    background-color: hsl(190, 64%, 22%);
    padding: 0.5rem;
    display: flex;
    opacity: 0.9;
    transition: 0.4s;
    cursor: pointer;
    z-index: 99;

    &:hover {
        background-color: hsl(190, 64%, 15%);
        opacity: 1;
    }
`

const ScrollUpIcon = styled.div`

    i {
        color: #fff;
        font-size: 1.2rem;
    }
`
