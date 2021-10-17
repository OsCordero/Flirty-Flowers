import React, { useEffect, useState } from "react";
import About from "../components/About/About";
import { Container, Preloader } from "../components/commons/lib";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import useLocoScroll from "../hooks/useLocoScroll";
import "../styles/home.scss";

const Index = () => {
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
export default Index;
