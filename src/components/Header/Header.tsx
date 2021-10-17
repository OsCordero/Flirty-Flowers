import React, { useEffect, useRef } from "react";
import { Section } from "../commons/lib";
import { HeaderWrapper } from "./header";
import gsap from "gsap";
import { useTrail, animated } from "react-spring";

const heading = ["Art", "Objects"];
const Header = () => {
  const menuRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(menuRef.current, { x: -500 }, { x: 0, delay: 1 });
  }, []);

  const trailsProps = {
    delay: 1500,
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 300 },
  };
  const trail = useTrail(3, trailsProps);
  const trail2 = useTrail(8, trailsProps);

  return (
    <HeaderWrapper data-scroll-section>
      <Section>
        <ul ref={menuRef}>
          <li>Intro</li>
          <li>About</li>
          <li>Featured</li>
        </ul>
        <h1>
          {trail.map((styles, index) => (
            <animated.span
              style={{ ...styles, display: "inline-block" }}
              key={index}
            >
              {heading[0].split("")[index]}
            </animated.span>
          ))}
        </h1>
        <h1>
          {trail2.map((styles, index) => (
            <animated.span
              style={{ ...styles, display: "inline-block" }}
              key={index}
            >
              {heading[1].split("")[index]}
            </animated.span>
          ))}
        </h1>
      </Section>
    </HeaderWrapper>
  );
};

export default Header;
