import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstbook from "../../assets/images/content.jpg";
import secondbook from "../../assets/images/content1.jpg";
import thirdbook from "../../assets/images/content2.jpg";

export default function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
          <img className="firstbook" src={firstbook} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="secondbook"
            src={secondbook}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="thirdbook" src={thirdbook} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
