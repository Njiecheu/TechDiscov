import { useState } from "react";
import classNames from "classnames";
import { Link } from "rasengan";
import logo from "@assets/logo.png";
import { useLocation } from "rasengan";

function Navbar() {
  const [showMobileNav, setShowMobilenav] = useState(false);
  const location = useLocation();
  const toogleMobileNav = () => {
    setShowMobilenav(!showMobileNav);
  };
  const scrollToAnchor = (anchorId) => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="relative flex items-center justify-around font-Poppins px-2 md:py-2 bg-[#F2F7FF] overflow-hidden ">
      <div className="relative  text-[32px] pr-[20px]  text-transparent font-[600] leading-normal text-primary">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="size-[5rem] object-cover " />
          <span className="text-primary md:text-[25px] text-[20px] ">
            TechDiscov
          </span>
        </Link>
        <div className="absolute  right-0 top-0">
          {/* <img
            src={group3}
            alt=""
            className="h-[50px] w-[50px]  object-cover"
          /> */}
        </div>
      </div>
      <ul className="hidden lg:visible md:flex items-center gap-[40px] ">
        <Link
          to="/trainings"
          className="text-[16px] text-[#6C87AE]  hover:text-[#3A8EF6] cursor-pointer"
        >
          Trainings
        </Link>
        <Link
          to="/employers"
          className={
            (location.pathname === "/employers" && "!text-primary",
            "text-[16px] text-[#6C87AE] hover:text-[#3A8EF6] cursor-pointer")
          }
        >
          For employers
        </Link>
        <Link
          to="/certifications"
          className="text-[16px] text-[#6C87AE] first-of-type:text-[#3A8EF6] hover:text-[#3A8EF6] cursor-pointer"
        >
          Certifications
        </Link>
        <Link
          to="/challenge"
          className="text-[16px] text-[#6C87AE] first-of-type:text-[#3A8EF6] hover:text-[#3A8EF6] cursor-pointer"
        >
          Challenges
        </Link>
        {/* {NAV_LINKS.map((item, index) => (
          <li
            key={index}
            className="text-[16px] text-[#6C87AE] first-of-type:text-[#3A8EF6] hover:text-[#3A8EF6] "
          >
            <button onClick={() => scrollToAnchor(item.url)}>
              {item.link}
            </button>
          </li>
        ))} */}
      </ul>

      <button className="invisible lg:visible lg:flex gap-[10px] py-2 px-[28px] button-gradient rounded-md text-[18px] font-medium bg-primary text-white ">
        Log In
      </button>
      <span
        onClick={toogleMobileNav}
        className="material-icons cursor-pointer md:hidden hover:bg-blue-100 rounded-full text-[30px] text-[#3A8EF6]  p-1"
      >
        menu
      </span>
      {/* Moobile nav */}
      <ul
        className={classNames(
          showMobileNav ? "right-0" : "-right-[100vw]",
          "md:hidden fixed duration-500 ease-in-out top-0 z-[999] flex flex-col items-center justify-center gap-[50px] h-full w-screen bg-[#3A8EF6] text-white ",
        )}
      >
        {/* {NAV_LINKS.map((item, index) => (
          <li key={index} className="text-[22px]   hover:text-gray-300 ">
            <button
              onClick={() => {
                scrollToAnchor(item.url);
                toogleMobileNav();
              }}
            >
              {item.link}
            </button>
          </li>
        ))} */}
        <span
          onClick={toogleMobileNav}
          className="absolute top-8 right-9 material-icons flex justify-center items-center p-2 bg-white text-[#3A8EF6] rounded-full cursor-pointer"
        >
          close
        </span>
      </ul>
    </nav>
  );
}

export default Navbar;
