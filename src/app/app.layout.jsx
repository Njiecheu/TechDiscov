import React from "react";
import { Outlet } from "rasengan";
import Navbar from "@/components/navbar/navbar";


const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Outlet />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
