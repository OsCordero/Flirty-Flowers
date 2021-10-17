import styled from "styled-components";
import { Section } from "../commons/lib";

export const FeaturedWrapper = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  img {
    clip-path: inset(0% 100% 0% 0%);
    transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition-delay: 1s;
    &.is-reveal {
      clip-path: inset(0% 0% 0% 0%);
    }
  }
  h6 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .featured-row-layout,
  .featured-column-layout {
    display: grid;
    gap: 10px;
  }

  .featured-row-layout {
    grid-template-columns: auto auto;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .featured-column-layout {
    grid-template-columns: 100px auto;
    align-items: flex-end;
    img {
      width: 100%;
      height: 125vh;
      object-fit: cover;
    }
    h6 {
      transform: translateX(100%) rotate(-90deg);
      transform-origin: left bottom;
      justify-self: end;
    }
  }
`;
