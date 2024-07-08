import React from "react";
import { Outlet } from "rasengan";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";


const ChallengeLayout = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Outlet />
      <Footer/>
    </React.Fragment>
  );
};

ChallengeLayout.path = "/";

export default ChallengeLayout;
