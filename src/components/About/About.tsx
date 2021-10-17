import React from "react";
import { SectionHeading } from "../commons/lib";
import { AboutWrapper } from "./about";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const About = () => {
  const { ref, inView } = useInView({
    rootMargin: "-400px",
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -100,
    config: { mass: 1, tension: 280, friction: 120 },
  });

  return (
    <AboutWrapper data-scroll-section>
      <SectionHeading>about</SectionHeading>
      <animated.p id="headline" ref={ref} style={props}>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </animated.p>
    </AboutWrapper>
  );
};

export default About;
