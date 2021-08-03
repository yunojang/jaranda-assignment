import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}
*, html, body {
  font-family: 'NanumSquare', sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
input, button {
  background-color: transparent;
  border: none;
  outline: none;
}
ol, ul, li {
  list-style: none;
}
`;
