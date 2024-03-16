import React, { useEffect, useState } from "react";
import Loading from "./Loading";
const api = "https://expres-server-test-v1.vercel.app";
const BasicWeb = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          {data.map(
            ({
              projectName,
              index,
              gitHubSrc,
              productSrc,
              explaination,
              _id,
            }) => {
              return (
                <div className="w-full py-4" key={_id}>
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
      )}
      {/* 2th */}
    </div>
  );
};

export default BasicWeb;
