import React from "react";
import { arrayCombination } from "./data";

const BasicWeb = () => {
  return (
    <div>
      <div>
        <aside>
          <p className="text-sm text-blue-400">
            We will give you projects from beginner to advance of Web
            development.
          </p>

          <a href="" id="you" className="h-0 w-0"></a>
          <h3 className="my-4">Beginner HTML, CSS and JavaScript</h3>
        </aside>
      </div>

      {/* 1th */}
      <div className="flex flex-col">
        {arrayCombination.map(
          ({ projectName, index, gitHubSrc, productSrc, explaination }) => {
            return (
              <div className="w-full py-4" key={index}>
                <article className=" project-view">
                  <div className="sm:float-left sm:pr-4">
                    <h2>
                      {index}. {projectName}
                    </h2>
                    <div className="my-4  max-w-[550px] max-h-[550px] ] ">
                      <iframe
                        className="w-full h-full bg-white min-h-[200px]"
                        src={productSrc}
                        frameBorder="0"></iframe>
                    </div>
                    <aside className="flex gap-3">
                      <a
                        className="text-blue-400 underline"
                        href={gitHubSrc}
                        target="_blank">
                        Download source code
                      </a>
                      <a
                        href={productSrc}
                        target="_blank"
                        className="text-blue-500 underline">
                        View Full Project
                      </a>
                    </aside>
                  </div>

                  <div className="text-justify pt-3 sm:pt-12">
                    <h3 className="py-2">Explaination</h3>
                    {explaination}
                  </div>
                </article>
              </div>
            );
          }
        )}
      </div>
      {/* 2th */}
    </div>
  );
};

export default BasicWeb;
