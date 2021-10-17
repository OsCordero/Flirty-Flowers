import React, { useEffect, useRef, useState } from "react";
import { GalleryItemWrapper, GalleryWrapper } from "./gallery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

interface GalleryItemProps {
  index: number;
  image: { src: string; title: string; subtitle: string; category: string };
  updateActiveImage: (value: number) => void;
}

const GalleryItem = ({ index, image, updateActiveImage }: GalleryItemProps) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      updateActiveImage(index);
    }
  }, [inView, index]);
  console.log(index, inView);

  return (
    <GalleryItemWrapper
      className={`gallery-item-wrapper ${inView ? "is-reveal" : ""}`}
      ref={ref}
    >
      <div />
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="title">{image.title}</h1>
          <h6 className="subtitle">{image.subtitle}</h6>
          <p className="category">{image.category}</p>
        </div>
        <div
          className={`gallery-item-image `}
          style={{ backgroundImage: `url(${image.src})` }}
        ></div>
      </div>
    </GalleryItemWrapper>
  );
};

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref?.current?.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <GalleryWrapper data-scroll-section>
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            updateActiveImage={(index: number) => setActiveImage(index + 1)}
            image={image}
          />
        ))}
      </div>
    </GalleryWrapper>
  );
};

export default Gallery;
