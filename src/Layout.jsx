import React from "react";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

const Layout = () => {
  return (
    <>
      <div className="w-full bg-gray-200 p-6">
        <Navbar />
      </div>
      <div className="px-3 sm:px-8 py-4">
        <Outlet />
      </div>
      <div className="w-full bg-gray-900 py-16 px-10">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
