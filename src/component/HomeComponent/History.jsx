import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const History = () => {
  return (
    <>
      <div
        className="flex gap-3 items-center py-2 sm:mr-4"
        style={{ borderBottom: "1px solid #e5e7eb" }}>
        <FontAwesomeIcon icon={faBookAtlas} className="text-gray-300 text-xl" />
        <h3 className="text-gray-300 text-2xl">My biography</h3>
      </div>
      <p className="my-4 mt-2">
        My name is Khav Oudom, and I was born in 2003 in Phnom Srok, Banteay
        Meanchey Province. Currently, I live in Phnom Penh.
      </p>
    </>
  );
};

export default History;
