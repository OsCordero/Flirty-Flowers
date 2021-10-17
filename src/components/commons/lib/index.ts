import styled from "styled-components";

export const Container = styled.div`
  padding: 0 5vw;
`;

export const Section = styled.section`
  padding: 100px 0px;
  .section-header {
    margin-bottom: 50px;
  }
`;

export const SectionHeading = styled.h6`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Syncopate", sans-serif;
  color: "#626262";
  margin-bottom: 50px;
`;

export const Preloader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #191919;
  color: #dbd8d6;
  h1 {
    font-size: 1.5vw;
    text-transform: uppercase;
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5vw;
    text-transform: uppercase;
    font-family: "Bodoni Moda", serif;
    font-style: italic;
    margin-top: 10px;
  }
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  z-index: 1;
`;
