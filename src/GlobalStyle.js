import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
  font-family: "Space Mono", monospace;
}
`

export const Theme = {
  colors: {
    Green400: "#26c0ab",
    Green900: "#00494d",
    Grey500: "#5e7a7d",
    Grey400: "#7f9c9f",
    Grey200: "#c5e4e7",
    Grey50: "#f4fafb",
    White: "#ffffff",
  }
}

export const Titulo = styled.h1`
font-size: 3rem;
color: ${Theme.colors.Green900};
`