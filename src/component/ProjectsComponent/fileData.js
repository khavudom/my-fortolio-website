//
const api = "https://porfolio-node-backend.vercel.app";
import { useEffect } from "react";
export const getAllData = (setIsLoading, setData) => {
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);
};
