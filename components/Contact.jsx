import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <ContactSection id="contact">
            <ContactBg>
                <ContactContainer>
                    <ContactText>
                        Let's keep in touch
                    </ContactText>
                    <ContactDesc>
                        Hi there! let's talk about the exp you've earned from Mukdahan, <br />
                        How's it going?
                    </ContactDesc>
                    <ContactForm
                        action="mailto:rabbit.bot@outlook.com"
                    >
                        <Contactinput
                            disabled
                            type="text"
                            placeholder="Please leave me alone"
                        />
                        <ContactButton>
                            Get in touch
                        </ContactButton>
                    </ContactForm>
                </ContactContainer>
            </ContactBg>
        </ContactSection>
    )
}

export default Contact


// # Styled-components
const ContactSection = styled.section`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const ContactBg = styled.div`
    padding: 2.5rem 0;
    background-color: hsl(190, 64%, 22%);

    @media screen and (min-width: 768px) {
        background: none;
        padding: 0;
    }
`

const ContactContainer = styled.div`
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
        background-color: hsl(190, 64%, 22%);
        padding: 3.5rem 0;
    }

    @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const ContactText = styled.h2`
    font-size: 1.25rem;
    color: #fff;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 2rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.75rem;
    }
`

const ContactDesc = styled.p`
    text-align: center;
    margin-bottom: 2.5rem;
    color: #fff;
`

const ContactForm = styled.form`
    background-color: hsl(190, 24%, 97%);
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 568px) {
        width: 470px;
        margin: 0 auto;
    }
`

const Contactinput = styled.input`
    /* width: 70%; */
    padding-right: 0.5rem;
    background-color: hsl(190, 24%, 97%);
    color: hsl(190, 24%, 35%);
    outline: none;

    @media screen and (min-width: 768px) {
        padding: 0 0.5rem;
    }
`

const ContactButton = styled.button`
    display: inline-block;
    background-color: hsl(190, 64%, 22%);
    color: #fff;
    padding: 1rem 2rem;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: hsl(190, 64%, 15%);
    }
`