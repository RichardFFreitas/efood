import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  pink: "#E66767",
  peach: "#FFEBD9",
  white: "#FFFFFF",
  yellow: "#FFB930",
  white2: "#FFF8F2",
  input: "#4B4B4B"
};

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body{
    background-color: ${colors.white2};
    color: ${colors.pink};
}

`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`