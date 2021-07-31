import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./imageCarousel.css";
import { useState, useCallback, useEffect } from "react";
import windowDimensions from "../../helpers/UseWindowDimensions";

const ImageCarousel = () => {
  const [width, setWidth] = useState(0);
  const [newWidth, setNewWidth] = useState(0);
  const [count, setCount] = useState(0);
  const [transition, setTransition] = useState("");
  const [disabled, setDisabled] = useState(false);

  const imageWidthRef = useCallback(
    (node) => {
      if (node !== null) {
        setWidth(node.getBoundingClientRect().width);
      }
    },
    [windowDimensions()]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count === 4) {
        setCount((prev) => prev - 4);
      } else {
        setCount((prev) => prev + 1);
      }
      setTransition("transform .4s ease-in-out");
    }, 4000);
    return () => clearTimeout(timeout);
  }, [count]);

  const handleNextClick = () => {
    setTransition("transform .4s ease-in-out");
    setCount((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setTransition("transform .4s ease-in-out");
    setCount((prev) => prev - 1);
  };

  const disablePrevButton = count < 1 ? true : false;
  const disableNextButton = count > 3 ? true : false;

  return (
    <div
      className="carousel-wrapper"
      style={{ backgroundColor: `${count % 2 === 1 ? "teal" : "orange"}` }}
    >
      <div className="carousel">
        <div
          className="carousel__images"
          style={{
            transform: `translateX(${-width * count}px)`,
            transition: `${transition}`,
          }}
        >
          <img
            src={image1}
            alt=""
            className="carousel__image"
            ref={imageWidthRef}
          />
          <img src={image2} alt="" className="carousel__image" />
          <img src={image3} alt="" className="carousel__image" />
          <img src={image4} alt="" className="carousel__image" />
          <img src={image5} alt="" className="carousel__image" />
        </div>
      </div>
      <IconContext.Provider
        value={{ className: "", color: "white", size: "3em" }}
      >
        <button
          className="prev"
          onClick={handlePrevClick}
          disabled={disablePrevButton}
        >
          <FaAngleLeft />
        </button>
        <button
          className="next"
          onClick={handleNextClick}
          disabled={disableNextButton}
        >
          <FaAngleRight />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default ImageCarousel;
