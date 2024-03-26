import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComp = ({ settings, childern }) => {
console.log("🚀 ~ CarouselComp ~ childern:", childern)
console.log("🚀 ~ CarouselComp ~ settings:", settings)

  return (
    <div>
      <Slider {...settings}>
        {childern}
      </Slider>
    </div>
  );
};

export default CarouselComp;
