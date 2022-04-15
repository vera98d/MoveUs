import styled, { createGlobalStyle, css } from "styled-components";

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
  },

  fontFamily: {
    primaryFont: "Lato",
  },
};
