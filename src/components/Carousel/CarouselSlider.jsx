import Carousel from "react-bootstrap/Carousel";
import carouselData from "../../assets/data/carouselData";

function CarouselSlider() {

  console.log(carouselData)
  return (
    <Carousel slide={false}>
      {carouselData?.map((items, index) => {
        <Carousel.Item>
          <Carousel.Caption>
            <h3>{items.title}</h3>
            <p>{items.amount}</p>
          </Carousel.Caption>
          <img src={items.imgUrl} />
        </Carousel.Item>;
      })}
    </Carousel>
  );
}

export default CarouselSlider;
