import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    /* scroll-behavior: smooth; */
    /* @media (max-width: ${p => p.theme.media.max}) {
      font-size: 90%;
    }
    @media (max-width: ${p => p.theme.media.xl}) {
      font-size: 100%;
    }
    @media (max-width: ${p => p.theme.media.large}) {
      font-size: 90%;
    }
    @media (max-width: ${p => p.theme.media.medium}) {
      font-size: 100%;
    } */
    @media (max-width: ${p => p.theme.media.small}) {
      font-size: 90%;
    }
    @media (max-width: ${p => p.theme.media.xs}) {
      font-size: 80%;
    }
  }

  body {
    margin: 0;

    width: 100vw;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, a, button, ul, li, input, textarea {
    font-family: 'Muli', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  p {
    line-height: 1.4;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }

`

export default GlobalStyle