import React from "react";
import { Carousel } from "react-responsive-carousel";

import Honda from "../assets/images/Carousel/honda.jpg";
import Hyundai from "../assets/images/Carousel/hyundai.jpg";
import Dodge from "../assets/images/Carousel/dodge.jpg";
import Kia from "../assets/images/Carousel/kia.jpg";
import Mazda from "../assets/images/Carousel/mazda.jpg";
import Mitsubishi from "../assets/images/Carousel/mitsubishi.jpg";
import Nissan from "../assets/images/Carousel/nissan.jpg";
import Suzuki from "../assets/images/Carousel/suzuki.jpg";

const TopCompany = () => {
  return (
    <Carousel infiniteLoop="true">
      <div>
        <img src={Honda} alt="honda"  />
        <p className="legend">Honda</p>
      </div>
      <div>
        <img src={Hyundai} alt="hyundai" />
        <p className="legend">Hyndai</p>
      </div>
      <div>
        <img src={Dodge} alt="dodge" />
        <p className="legend">Dodge</p>
      </div>
      <div>
        <img src={Kia} alt="kia" />
        <p className="legend">Kia</p>
      </div>
      <div>
        <img src={Mazda} alt="mazda" />
        <p className="legend">Mazda</p>
      </div>
      <div>
        <img src={Mitsubishi} alt="mitsubishi" />
        <p className="legend">Mitsubishi</p>
      </div>
      <div>
        <img src={Nissan} alt="hyundai" />
        <p className="legend">Nissan</p>
      </div>
      <div>
        <img src={Suzuki} alt="hyundai" />
        <p className="legend">Suzuki</p>
      </div>
    </Carousel>
  );
};

export default TopCompany;
