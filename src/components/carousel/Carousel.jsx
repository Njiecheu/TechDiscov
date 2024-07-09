import React, { useEffect, useState } from "react";

import Aos from 'aos'
import 'aos/dist/aos.css'

import "./carousel.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const Carousel = ({ students }) => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      },[])
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
    <div className="carousel-container" data-aos='fade-up' data-aos-duration='2000'>
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {students.map((student, index) => (
          <div className="carousel-item" key={index}>
            <div className="carousel-text" data-aos='fade-left' data-aos-duration='2500'>
              <h3>{student.name}</h3>
              <p>{student.testimonial}</p>
            </div>
            <div className="carousel-image" data-aos='fade-right' data-aos-duration='3000'>
              <img src={student.image} alt={student.name} className="img-carousel" />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={prevSlide}>
          <MdArrowBackIosNew />
        </button>
        <button onClick={nextSlide}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
