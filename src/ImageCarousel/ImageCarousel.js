import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageCarousel.css";

const ImageCarousel = ({ data, autoTransition, contextualBackground }) => {
  const [currentSlide, setCurentSlide] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  // setting background color of section on slide change
  if(contextualBackground){
    
  }
  useEffect(() => {
    if(!contextualBackground){
      document.getElementById(
        "section-carousel"
      ).style.background = `rgba(${255},${255},${255},${1})`;
      return;
    }
    const blockSize = 4;
    const imageElement = new Image();
    imageElement.src = data[currentSlide].url;
    imageElement.crossOrigin = "";

    imageElement.onload = () => {
      const canvas = document.createElement("canvas");
      let height = (canvas.height =
        imageElement.width || imageElement.naturalHeight);
      let width = (canvas.width =
        imageElement.height || imageElement.naturalWidth);

      const context = canvas.getContext("2d");
      context.drawImage(imageElement, 0, 0);

      let imgData, length;

      try {
        imgData = context.getImageData(0, 0, width, height);
        // imgData.data is an array of rgba values
        length = imgData.data.length;
      } catch (error) {
        console.error(error);
        return {
          R: 0,
          G: 0,
          B: 0,
        };
      }

      let R, G, B;
      R = G = B = 0;

      let i = -4,
        count = 0;
      while ((i += blockSize * 4) < length) {
        count++;
        R += imgData.data[i];
        G += imgData.data[i + 1];
        B += imgData.data[i + 2];
      }
      R = ~~(R / count);
      G = ~~(G / count);
      B = ~~(B / count);
      document.getElementById(
        "section-carousel"
      ).style.background = `rgba(${R},${G},${B},${0.4})`;
    };
  }, [currentSlide, data, contextualBackground]);

  // Check data validity
  if (!Array.isArray(data) || length <= 0) {
    return null;
  }

  // Check auto transition
  if (autoTransition) {
    setTimeout(() => nextSlide(), 3000);
  }

  return (
    <section className="slider" id="section-carousel">
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
              <img
                src={item.url}
                alt="travel"
                className="carousel-image"
                onClick={(e) => console.log(e)}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageCarousel;
