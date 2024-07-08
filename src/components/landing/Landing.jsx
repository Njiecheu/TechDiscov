import React, { useEffect } from "react";
import "./landing.css";

import Aos from 'aos'
import 'aos/dist/aos.css'

import welcome from "../../assets/welcome.svg";
import Carousel from "../carousel/Carousel";
import Footer from "../footer/Footer";

import img1 from '../../assets/i1.webp'
import img2 from '../../assets/i2.jpeg'
import img3 from '../../assets/i3.webp'
import img4 from '../../assets/R2.jpeg'
import img5 from '../../assets/i3.jpeg'
import img6 from '../../assets/i4.jpeg'

const data = [
  {
    id: 1,
    postImage: img2,
    title: "Formation en ligne",
    desc: "Découvrez une large gamme de cours en ligne pour développer vos compétences dans divers domaines, accessibles à tout moment et depuis n'importe où.",
  },
  {
    id: 2,
    postImage: img4,
    title: "Recrutement en ligne",
    desc: "Utilisez notre plateforme pour trouver des opportunités d'emploi correspondant à vos compétences et intérêts. Postulez directement en ligne et suivez l'avancement de vos candidatures.",
  },
  {
    id: 3,
    postImage: img5,
    title: "Cours spécialisés",
    desc: "Accédez à des cours spécialisés créés par des experts dans leur domaine pour approfondir vos connaissances et obtenir des certifications reconnues.",
  },
];

const students = [
  {
    name: "John Doe",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    image: img1
  },
  {
    name: "Jane Smith",
    testimonial: "Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.",
    image: img6
  },
  {
    name: "Michael Johnson",
    testimonial: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus.",
    image: img3
  }
];
const Landing = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <React.Fragment>
      <div className="secContainer">
        <div className="hello-div">
          <div className="hello-text" data-aos='fade-up' data-aos-duration='2000'>Discover and Elevate Tech Talents</div>
          <div className="hello-image">
            <img src={welcome} alt="welcome image" />
          </div>
        </div>
        <div className="card">
          <div className="student-div" data-aos='fade-left' data-aos-duration='2000'>
            <p className="student">Student</p>
            <p className="student-text">
              Lorem ipsum dolor sit amet consecte
            </p>
            <button className="student-btn">Pass a certification</button>
          </div>
          <div className="employers-div" data-aos='fade-right' data-aos-duration='2500'>
            <p className="student">Employers</p>
            <p className="student-text">
              Lorem ipsum dolor sit amet consecte
            </p>
            <button className="student-btn">Recruit</button>
          </div>
        </div>
        <div className="learn-div">
          <div className="learn-title" data-aos='fade-up' data-aos-duration='2000'>What you'll learn</div>
        </div>
        <div className="mainContainer grid">
          {data.map(({ id, postImage, title, desc }, index) => {
            const isOdd = index % 2 === 0;
            return (
              <div
                key={id}
                className={`singlePost grid ${isOdd ? "odd" : "even"}`}
              >
                <div className="imgDiv" data-aos='fade-right' data-aos-duration='2000'>
                  <img src={postImage} alt={title} />
                </div>
                <div className="postDetails" data-aos='fade-left' data-aos-duration='2500'>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="carousel">
        <Carousel students={students}/>
      </div>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </React.Fragment>
  );
};

export default Landing;
