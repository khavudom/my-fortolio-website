import React from "react";
import SubNav from "./ProjectsComponent/SubNav";
import BasicWeb from "./ProjectsComponent/BasicWeb";

const Projects = () => {
  return (
    <div>
      <div
        className="sticky top-0 py-4 mx-auto max-w-[1200px]"
        style={{ background: "#202020" }}>
        <SubNav />
      </div>
      <div className="mx-auto max-w-[1200px]">
        <BasicWeb />
      </div>
    </div>
  );
};

export default Projects;
