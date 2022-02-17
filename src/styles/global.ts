import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FEFBFB;
    --white-200: #C4C4C4;
    --gray-200: #282830;
    --dark: #13131F;
    --purple-light: #8257E6;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%
    }
  }

  body {
    background: var(--dark)
  }

  body, input, select, button, textarea {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 400
  }
`