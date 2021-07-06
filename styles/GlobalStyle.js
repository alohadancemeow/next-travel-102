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
        margin: 3rem 0 0 0;
        font-family: "Open Sans", sans-serif;
        font-size: 0.938rem;
        background-color: hsl(190, 100%, 99%);
        color: hsl(190, 24%, 35%);

        @media screen and (min-height: 721px) {
            margin: 0;
        }
    }

    h1,
    h2,
    h3 {
    color: hsl(190, 64%, 18%);
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    }

    ul {
    list-style: none;
    }

    a {
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

    /* @media screen and (min-width: 968px) {
        body {
            font-size: 4rem;

        }
    } */
`

export default GlobalStyle