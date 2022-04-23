import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  `;

export const theme = {
  colors: {
    white: "#fff",
    primaryUi: "#D6E7FF",
    secondaryUi: "#041850",
    background: "linear-gradient(#2A95FF, #D6E7FF)",
    tertiaryUi: "#2A95FF",
  },

  fontFamily: {
    primaryFont: "Lato",
  },
  fontSize: {
    header: "60px",
    text: "24px",
    tiles: "30px",
  },
  boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.7)",
  border: "2px solid #041850",
};
