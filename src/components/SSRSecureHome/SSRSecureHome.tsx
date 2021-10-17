import React, { useEffect, useState } from "react";
import About from "../About/About";
import { Container, Preloader } from "../commons/lib";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import useLocoScroll from "../../hooks/useLocoScroll";
import "../../styles/home.scss";

const SSRSecureHome = () => {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);

  return preloader ? (
    <Preloader>
      <h1>Flirty Flowers</h1>
      <h2>El Salvador</h2>
    </Preloader>
  ) : (
    <Container data-scroll-container id="main-container">
      <Navbar />
      <Header />
      <Featured />
      <About />
      <Gallery />
      <Footer />
    </Container>
  );
};
export default SSRSecureHome;
