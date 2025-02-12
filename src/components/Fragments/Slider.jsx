import { useState, useEffect } from "react";
import img1 from "../../assets/img/img-slider.webp";
import img2 from "../../assets/img/image-slider2.jpg";
import img3 from "../../assets/img/image-slider3.jpg";
import img4 from "../../assets/img/image-slider4.jpg";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:h-[250px] h-[100px] overflow-hidden relative my-5">
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute rounded-md top-0 left-0 w-full h-full object-center transition-all duration-500 ease-in-out 
              ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
