import { useTrail, animated } from "react-spring";
import React from "react";
import { Section, SectionHeading } from "../commons/lib";
import { FooterWrapper } from "./footer";
import { useInView } from "react-intersection-observer";

const heading = ["El", "Salvador"];
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const trailsProps = {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 300,
    delay: 1000,
  };
  const trail = useTrail(3, trailsProps);
  const trail2 = useTrail(8, trailsProps);

  return (
    <Section data-scroll-section>
      <FooterWrapper>
        <SectionHeading>Made in</SectionHeading>
        <h1 className="location" ref={ref}>
          {trail.map((styles, index) => (
            <animated.span
              style={{ ...styles, display: "inline-block" }}
              key={index}
            >
              {heading[0].split("")[index]}
            </animated.span>
          ))}
        </h1>
        <h1 className="location">
          {trail2.map((styles, index) => (
            <animated.span
              style={{ ...styles, display: "inline-block" }}
              key={index}
            >
              {heading[1].split("")[index]}
            </animated.span>
          ))}
        </h1>{" "}
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
