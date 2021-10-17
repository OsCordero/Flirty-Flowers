import React from "react";
import photos from "../../utils/data";
import { FeaturedWrapper } from "./featured";

const Featured = () => {
  const [firstUrl, secondUrl] = photos;
  return (
    <FeaturedWrapper data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} alt="plants" data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={secondUrl} alt="plants" data-scroll />
      </div>
    </FeaturedWrapper>
  );
};

export default Featured;
