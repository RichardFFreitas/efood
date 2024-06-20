import { createGlobalStyle } from "styled-components";

export const colors = {
  pink: "#E66767",
  peach: "#FFEBD9",
  white: "#FFFFFF",
  yellow: "#FFB930",
  white2: "#FFF8F2",
};

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  list-style: none;
}

body{
    background-color: ${colors.white2};
    color: ${colors.pink};
}

.container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
}

`;
