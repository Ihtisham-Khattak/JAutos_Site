import React from "react";
import Slider from "slider-moon";
import "slider-moon/dist/style.css";
import newArrival from "../../assets/data/newArrival";
import "../../styles/new-arrival.css";

const NewArrival = () => {
  return (

    <Slider
      slideClass={"my-slider"}
      infinite={true}
      bullets={false}
      arrowsNav={true}
      animation={"scale"}
      callback={() => {
        console.log("here");
      }}
    >
      <div className="slider my-slider carousel-container">
        <ul className="slider-wrapper">
          {newArrival?.map((item, index) => (
            <div className="carousel-slide" key={index}>
              <img src={item.imgUrl} alt={item.title} />
              <h3 className="carousel-text text-center">{item.title}</h3>
              <p>{item.price}</p>
              <span>{item.rating}</span>
            </div>
          ))}
        </ul>
      </div>
    </Slider>
  );
};

export default NewArrival;
