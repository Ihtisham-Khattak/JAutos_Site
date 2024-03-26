import carouselData from "../../assets/data/carouselData";
import CarouselComp from "../CarouselComp/CarouselComp";

function CarouselSlider() {
  
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  console.log(carouselData);
  return (
    <CarouselComp settings={settings}>
      {carouselData?.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.amount}</p>
          <img src={item.imgUrl} alt={item.title} />
        </div>
      ))}
    </CarouselComp>
  );
}

export default CarouselSlider;
