import { faBookAtlas, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Job = () => {
  return (
    <>
      <div
        className="flex gap-3 items-center py-2 sm:mr-4"
        style={{ borderBottom: "1px solid #e5e7eb" }}>
        <FontAwesomeIcon icon={faBriefcase} className="text-gray-300 text-xl" />
        <h3 className="text-gray-300 text-2xl sm:mr-4">Job experience</h3>
      </div>
      <section
        className="mt-3 sm:mr-4 px-4"
        style={{ borderLeft: "4px solid #e5e7eb" }}>
        <div className="relative p-4 shadow-md background-card my-4">
          <h3 className="text-blue-600">2023 (3 months)</h3>
          <h2 className="text-xl">Internship</h2>
          <p className="text-gray-400">
            Intern ship as graphic designer and Photographer at UC
          </p>
        </div>
      </section>
    </>
  );
};

export default Job;
