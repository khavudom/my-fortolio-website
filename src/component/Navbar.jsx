import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const activeClassNames =
  "flex gap-3 flex-col pl-0 md:flex-row  w-full md:w-max select-none transition-all duration-150 nav-list active";
const invisibleClassName =
  "flex gap-3 flex-col pl-0 md:flex-row  w-full md:w-max select-none transition-all duration-150 nav-list";

const Navbar = () => {
  const [activeBar, setActiveBar] = useState(false);
  return (
    <nav className="flex justify-between items-center  mx-auto my-0 max-w-[1200px] flex-wrap md:flex-nowrap ">
      <div className="font-bold text-2xl text-black first-letter:text-blue-500 first-letter:text-3xl select-none">
        Fortfolio
      </div>
      <div
        onClick={() => setActiveBar(!activeBar)}
        className={
          activeBar ? "bar-container active" : "bar-container rounded-sm"
        }>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={activeBar ? activeClassNames : invisibleClassName}>
        <NavLink
          onClick={() => setActiveBar(!activeBar)}
          className="text-black px-4 py-3 rounded-md hover:text-gray-600"
          to="/">
          Home
        </NavLink>
        <NavLink
          onClick={() => setActiveBar(!activeBar)}
          className="text-black px-4 py-3 rounded-md hover:text-gray-600"
          to="projects">
          Projects
        </NavLink>
        <NavLink
          onClick={() => setActiveBar(!activeBar)}
          className="text-black px-4 py-3 rounded-md hover:text-gray-600"
          to="documents">
          Documentation
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
