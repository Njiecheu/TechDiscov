import React, { useEffect, useState } from "react";
import "./challenge.css";

import Aos from "aos";
import "aos/dist/aos.css";

import pair from "../../assets/pair.svg";

import { BiMessageRoundedDots } from "react-icons/bi";
import { SlPin } from "react-icons/sl";
import { PiClock } from "react-icons/pi";
import ModalForm from "../Modal/ModalForm";

const challenges = [
  {
    id: 1,
    status: "open",
    title: "Challenge 1",
    description:
      "Implement a company-wide training program to improve technical skills.",
  },
  {
    id: 2,
    status: "close",
    title: "Challenge 2",
    description:
      "Organize a team-building activity to enhance collaboration and communication.",
  },
  {
    id: 3,
    status: "open",
    title: "Challenge 3",
    description:
      "Develop a new company website with modern design and user experience.",
  },
  {
    id: 4,
    status: "open",
    title: "Challenge 4",
    description:
      "Launch a new marketing campaign to promote the latest product line.",
  },
  {
    id: 5,
    status: "close",
    title: "Challenge 5",
    description:
      "Conduct a survey to gather feedback on recent company changes.",
  },
];

const ChallengeCard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="challenge-div">
        <div
          className="challenge-text"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Elevate your tech skills by participating on challenges
        </div>
        <div className="challenge-image">
          <img src={pair} alt="welcome image" />
        </div>
        <button onClick={() => setIsModalOpen(true)} className="challenge-btn">
          Create a challenge
        </button>
        <ModalForm
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        />
      </div>

      <div className="list-div">
        <div className="list-title" data-aos="fade-up" data-aos-duration="2000">
          List of challenges
        </div>
      </div>
      <div className="cardContainer">
        {challenges.map(({ id, status, title, description }) => (
          <div
            key={id}
            className="task"
            data-aos="fade-left"
            data-aos-duration="2000"
            draggable="true"
          >
            <div className="tags">
              <span className={`tag ${status === "close" ? "close" : "open"}`}>
                {status}
              </span>
              <button className="options">
                <svg
                  xmlSpace="preserve"
                  viewBox="0 0 41.915 41.916"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Capa_1"
                  version="1.1"
                  fill="#000000"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path>
                        <path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path>
                        <path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <p className="card-title">{title}</p>
            <p>{description}</p>
            <div className="stats">
              <div>
                <div>
                  <PiClock />
                  Feb 24
                </div>
                <div>
                  <BiMessageRoundedDots />
                  18
                </div>
                <div>
                  <SlPin />7
                </div>
              </div>
              <div className="viewer">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        strokeWidth="2"
                        stroke="#ffffff"
                        d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="#ffffff"
                        d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        strokeWidth="2"
                        stroke="#ffffff"
                        d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="#ffffff"
                        d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      strokeLinejotalentin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        strokeWidth="2"
                        stroke="#ffffff"
                        d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="#ffffff"
                        d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span>+20</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ChallengeCard;
