import React from "react";
import "./landing.css";

import welcome from "../../assets/welcome.svg";
const Landing = () => {
  return (
    <React.Fragment>
      <div className="secContainer">
        <div className="hello-div">
          <div className="hello-text">Discover and Elevate Tech Talents</div>
          <div className="hello-image">
            <img src={welcome} alt="welcome image" />
          </div>
        </div>
        <div className="card">
          <div className="student-div">
            <p className="student">Student</p>
            <p className="student-text">Lorem ipsum dolor sit amet consecte</p>
            <button className="student-btn">Pass a certification</button>
          </div>
          <div className="employers-div">
            <p className="student">Employers</p>
            <p className="student-text">Lorem ipsum dolor sit amet consecte</p>
            <button className="student-btn">Recruit</button>
          </div>
        </div>
        <div className="learn-div">
            <div className="learn-title">What you'll learn</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
