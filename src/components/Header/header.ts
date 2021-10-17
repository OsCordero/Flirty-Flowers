import styled from "styled-components";
import { a } from "@react-spring/web";

export const HeaderWrapper = styled.header`
  position: relative;

  ul {
    position: absolute;
    left: 0;
    top: 100px;
    letter-spacing: 1px;
    font-weight: 600;
    font-family: "Syncopate", sans-serif;
    color: "#626262";
    text-transform: uppercase;
    li {
      margin: 10px 0;
    }
  }
  h1 {
    font-size: 18vw;
    text-transform: uppercase;
    text-align: center;
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
  }
`;

export const TrailsText = styled(a.div)`
  position: relative;
  width: 100%;
  height: auto;
  color: black;
  font-size: 6em;
  font-weight: 800;
  letter-spacing: -0.05em;
  will-change: transform, opacity;
  overflow: hidden;

  & > div {
    padding-right: 0.05em;
    overflow: hidden;
  }
`;
