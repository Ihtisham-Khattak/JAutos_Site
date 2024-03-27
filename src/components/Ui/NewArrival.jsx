import React from "react";
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import carouselData from "../../assets/data/carouselData";
import '../../styles/new-arrival.css'

const NewArrival = () => {
  return (
    // <Slider
    //   slideClass={"my-slider"}
    //   infinite={true}
    //   bullets={false}
    //   arrowsNav={false}
    //   animation={"scale"}
    //   callback={() => {
    //     console.log("here");
    //   }}
    // >
    //   <div className="slider my-slider carousel-container">
    //     <ul className="slider-wrapper">
    //       {carouselData?.map((item, index) => (
    //         <div className="carousel-slide" key={index}>
    //           <h3>{item.title}</h3>
    //           <p>{item.amount}</p>
    //           <img src={item.imgUrl} alt={item.title} />
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // </Slider>

    <Slider
  slideClass={"my-slider"}
  infinite={true}
  bullets={false}
  arrowsNav={false}
  animation={"scale"}
  callback={() => {
    console.log("here");
  }}
>
  <div className="slider my-slider carousel-container">
    <ul className="slider-wrapper">
      {carouselData?.map((item, index) => (
        <div className="carousel-slide" key={index}>
          <h3 className="text-center">{item.title}</h3>
          <p>{item.amount}</p>
          <img src={item.imgUrl} alt={item.title} />
        </div>
      ))}
    </ul>
  </div>
</Slider>

  );
};

export default NewArrival;
