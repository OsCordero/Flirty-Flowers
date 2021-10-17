import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`;

export const wrapPageElement = ({ element, props }) => {
  return <GlobalStyle {...props}>{element}</GlobalStyle>;
};
