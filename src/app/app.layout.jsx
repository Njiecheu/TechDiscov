import React from "react";
import { Outlet } from "rasengan";
import Navbar from "@/components/navbar/navbar";

import { useEffect } from "react";
import Login from "./login.page";
import { useNavigate } from "rasengan";
import Footer from "@/components/footer/Footer";

const AppLayout = () => {
  const connectedUserId = true;
  const navigate = useNavigate();

  const handlNavigate = () => {
    navigate("/login"); // Navigate to a new route
  };
  useEffect(() => {
    if (typeof document !== "undefined") {
      !connectedUserId && handlNavigate();
    }
  }, []);

  return (
    <React.Fragment>
      {connectedUserId && <Navbar />}

      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
