import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        transition: all.5s;
        margin: 3rem 0 0 0;
        font-family: "Open Sans", sans-serif;
        font-size: 0.938rem;
        /* background-color: hsl(190, 100%, 99%); */
        /* color: hsl(190, 24%, 35%); */

        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.subTitle};

        @media screen and (min-height: 721px) {
            margin: 0;
        }
    }

    h1,
    h2,
    h3 {
        /* color: hsl(190, 64%, 18%); */
        color: ${({ theme }) => theme.title};
        font-weight: 600;
        font-family: "Raleway", sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        color: ${({ theme }) => theme.title};
        text-decoration: none;
    }

    img,
    video {
        max-width: 100%;
        height: auto;
    }

    button,
    input {
        border: none;
        font-family: "Open Sans", sans-serif;
        font-size: 0.938rem;
    }

    button {
        cursor: pointer;
    }

    input {
        outline: none;
    }

    main {
        overflow-x: hidden;
    }
`

export default GlobalStyle


// # Theme Mode
export const lightTheme = {
    body: 'hsl(190, 100%, 99%)', //body BG
    title: 'hsl(190, 64%, 18%)',  //h123
    subTitle: 'hsl(190, 24%, 35%)', //tag p & input text
    second: 'hsl(190, 64%, 22%)', //contact BG
    input: 'hsl(190, 24%, 97%)', //contact input
    linkHover: 'hsl(190, 64%, 18%)', // link hover
}

export const darkTheme = {
    body: 'hsl(190, 29%, 12%)',
    second: 'hsl(190, 54%, 12%)',
    title: ' hsl(190, 24%, 95%)',
    subTitle: 'hsl(190, 8%, 75%)',
    input: 'hsl(190, 29%, 16%)',
    linkHover: '#fff',
    scrollBar: 'hsl(190 12%, 48%)',
    scrollThumb: 'hsl(190, 12%, 36%)'
}