import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, .app {
    background-color: #f8f8f8;
    color: #29292e;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }


`;

export default GlobalStyle;
