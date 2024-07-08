import React, { useState } from "react";
import "./carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ students }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? students.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === students.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {students.map((student, index) => (
          <div className="carousel-item" key={index}>
            <div className="carousel-text">
              <h3>{student.name}</h3>
              <p>{student.testimonial}</p>
            </div>
            <div className="carousel-image">
              <img src={student.image} alt={student.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
