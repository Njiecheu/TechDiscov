import React from "react";
import { Outlet } from "rasengan";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
