import {
  faBookAtlas,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BackgroundStudy = () => {
  return (
    <>
      <div
        className="flex gap-3 items-center py-2 sm:mr-4"
        style={{ borderBottom: "1px solid #e5e7eb" }}>
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="text-gray-300 text-xl"
        />

        <h3 className="text-gray-300 text-2xl">Background Education</h3>
      </div>
      <section
        className="mt-3 sm:mr-4 px-4"
        style={{ borderLeft: "4px solid #e5e7eb" }}>
        <div className="relative p-4  background-card my-4">
          <h3 className="text-blue-600">2013-2016</h3>
          <h2 className="text-xl">Poram Bun Primary School</h2>
          <p className="text-gray-400">Porambu, BMC</p>
        </div>
        <div className="relative p-4  background-card my-4">
          <h3 className="text-blue-600">2016-2019</h3>
          <h2 className="text-xl">Tavong Secondary School</h2>
          <p className="text-gray-400">
            Ponley commune, Banteay Meanchey Provice.
          </p>
        </div>
        <div className="relative p-4  background-card my-4">
          <h3 className="text-blue-600">2019-2022</h3>
          <h2 className="text-xl">Chup Veary High School</h2>
          <p className="text-gray-400">
            Greate time at Chup Veary High School, BMC
          </p>
        </div>
        <div className="relative p-4  background-card my-4">
          <h3 className="text-blue-600">2022-Present</h3>
          <h2 className="text-xl">The University of Cambodia</h2>
          <p className="text-gray-400">
            Information Technology, student at The University of Cambodia
          </p>
        </div>
      </section>
    </>
  );
};

export default BackgroundStudy;
