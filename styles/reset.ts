import { css } from "styled-components";

export const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    word-break: keep-all;
  }

  html,
  body {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    -ms-overflow-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    border: none;
    padding: none;
  }

  input:focus {
    outline: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    list-style: none;
  }
`;
