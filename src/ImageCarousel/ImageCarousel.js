import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageCarousel.css";

const ImageCarousel = ({ data, autoTransition }) => {
  const [currentSlide, setCurentSlide] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  // Check data validity
  if (!Array.isArray(data) || length <= 0) {
    return null;
  }

  // Check auto transition
  if(autoTransition){
    setTimeout(()=> nextSlide(), 3000);
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="arrow arrow-left" onClick={prevSlide} />
      <FaArrowAltCircleRight
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      {data.map((item, index) => {
        return (
          <div
            className={index === currentSlide ? "slide active" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <img src={item.url} alt="travel" className="carousel-image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageCarousel;
