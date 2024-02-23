import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    function updateTime() {
      const date = new Date();
      const hours = date.getHours();
      if (hours > 5 && hours < 12) setGreeting("Good Morning!");
      else if (hours >= 12 && hours < 17) setGreeting("Good Afternoon!");
      else setGreeting("Good Evening!");
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return greeting;
};

export default Greeting;
