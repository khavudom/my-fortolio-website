import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Layout from "./Layout";
import Documents from "./component/Documents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
