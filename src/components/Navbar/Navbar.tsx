import React, { useEffect, useLayoutEffect, useRef } from "react";
import { NavbarWrapper } from "./navbar";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -200 }, { y: 0, delay: 0.5 });
  }, []);

  return (
    <section data-scroll-section>
      <NavbarWrapper ref={navRef}>
        <div className="menu">menu</div>
        <div className="title">Flirty Flowers</div>
        <div className="cart">cart</div>
      </NavbarWrapper>
    </section>
  );
};

export default Navbar;
