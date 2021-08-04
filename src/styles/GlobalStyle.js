import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}
*, html, body {
  font-family: -apple-system, Helvetica, Arial, "hiragino kaku gothic pro", meiryo, "Microsoft YaHei", "ms pgothic", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
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
button, input[type='submit'], input[type='button'] {
  cursor: pointer;
}
`;
