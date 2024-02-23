import React, { useEffect, useRef } from "react";
import Card from "./HomeComponent/Card";
import History from "./HomeComponent/History";
import BackgroundStudy from "./HomeComponent/BackgroundStudy";
import Job from "./HomeComponent/Job";
import Greeting from "./HomeComponent/Greeting";

const Home = () => {
  return (
    <div className="transition-all duration-200 flex flex-col">
      <div className="grid sm:grid-cols-2 grid-cols-1 my-4">
        <div>
          <h2 className="text-4xl text-gray-200">
            <Greeting />
          </h2>
          <p className="m-3 ml-0">
            Welcome to our website! We are glad you are here.
          </p>
        </div>
        <h1 className="mb-6 mt-2 text-3xl quote relative overflow-hidden transition-all duration-150 max-w-max flex justify-center items-center flex-wrap">
          Get Everything by your own!
        </h1>
      </div>
      <Card />
      <div className="p-4 mt-4">
        <div>
          <History />
        </div>
        <BackgroundStudy />
        <div className="my-4 mt-6">
          <Job />
        </div>
      </div>
    </div>
  );
};

export default Home;
