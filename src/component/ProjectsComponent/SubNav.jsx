import React from "react";

const SubNav = () => {
  return (
    <nav className="flex gap-4 justify-between items-center">
      <div className="flex gap-4 my-3 flex-wrap">
        <a
          className="flex justify-center items-center gap-1 text-gray-200 border border-solid border-gray-500 px-2 py-1 rounded-sm hover:bg-blue-500"
          href="#you">
          Basic Web
        </a>
        <a
          className="flex justify-center items-center gap-1 text-gray-200 border border-solid border-gray-500 px-2 py-1 rounded-sm hover:bg-blue-500 soon"
          href="#">
          Font End Framwork
        </a>
        <a
          className="flex justify-center items-center gap-1 text-gray-200 border border-solid border-gray-500 px-2 py-1 rounded-sm hover:bg-blue-500 soon"
          href="#">
          Back End
        </a>
      </div>
    </nav>
  );
};

export default SubNav;
