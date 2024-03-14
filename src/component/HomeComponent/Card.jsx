import React, { useEffect, useRef, useState } from "react";
import pic1 from "../../assets/angkorwat.jpg";
import backgroundpink from "../../assets/backgroundpink.jpg";

const Card = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");
  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const bodyRef = useRef(document.body);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  if (active1 === "active" || active2 === "active") {
    bodyRef.current.style.overflowY = "hidden";
  } else bodyRef.current.style.overflowY = "auto";

  if (width > 550 && active1 === "showall") {
    btn1.current.click();
  }
  if (width > 550 && active2 === "showall") {
    btn2.current.click();
  }

  return (
    <main className="grid header-container gap-4">
      <div className="flex gap-4 relative max-w-max  flex-wrap lg:flex-nowrap border border-solid border-gray-600 p-3 rounded-md  bg-gray-800">
        <article className="flex relative border border-solid border-gray-700 shadow-md max-w-[500px] min-w-[280px] h-max rounded-md overflow-hidden select-none">
          <div className="relative max-w-[500px] h-[380px]">
            <img src={backgroundpink} alt="background" className="w-full" />
            <div className="max-w-[500px]  z-10  bg-gray-700  card-img-wrapper">
              <img
                src={pic1}
                alt="khav udom"
                className="max-w-[150px] rounded-full"
              />
              <div className=" name">
                <h2 className="text-2xl select-text">Khav Oudom</h2>
              </div>
            </div>
          </div>
        </article>
        <div>
          <div
            className={
              active1 === "active"
                ? "paragraph1 active"
                : active1 === "showall"
                ? "paragraph1 showall"
                : "paragraph1"
            }>
            <i
              onClick={() => setActive1("")}
              className={
                active1 === "active"
                  ? "fa-solid fa-xmark active"
                  : "fa-solid fa-xmark hidden"
              }></i>
            <div>
              <p>
                I'm Khav Oudom from Banteay Meanchey Province. I graduated from
                Chup Veary High School in 2022. Currently, I am a student of
                Information Technology at The University of Cambodia. I started
                coding late in high school. My first programming language was
                C/C++, but I found it to be quite challenging. At that time, I
                had no prior experience with coding or computers. However, I
                persevered and spent two months learning the basics of C and
                C++.
                <br />
                After gaining some proficiency in C++, I transitioned to web
                development. HTML and CSS seemed relatively easy to me compared
                to the complexities of C and C++. Over the course of eight
                months, I delved deeper into HTML, CSS, and JavaScript. Now, I
                am continuing my journey by learning React.js, Node.js,
                Express.js, and MongoDB.
                <br />
                It took me about five months to advance my skills in React.js,
                Express.js, and MongoDB by working on various projects that
                integrated these technologies. My goal is to create
                documentation about coding and mathematics on my website,
                providing learners with beginner to intermediate-level projects
                in web development.
                <br />
                My documentation covers the basics of web development, including
                HTML, CSS, and JavaScript, followed by front-end frameworks like
                React.js and Vue.js. Additionally, I plan to include back-end
                technologies such as Node.js (Express.js), PHP (Laravel), and
                Python (Django).
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              width > 550 && active1 !== "active"
                ? setActive1("active")
                : active1 == "showall"
                ? setActive1("")
                : setActive1("showall")
            }
            ref={btn1}
            className="p-2 mt-2 pl-1 cursor-pointer bg-transparent border-none text-gray-300 hover text-[13px]">
            {active1 === "showall" ? "Show less" : "Show More..."}
          </button>
        </div>
      </div>
      <div className="relative">
        <h3 className="text-2xl mb-4 text-gray-300">
          My Favorite place (Angkor Wat)
        </h3>
        <div
          className={
            active2 === "active"
              ? "paragraph2 active"
              : active2 === "showall"
              ? "paragraph2 showall"
              : "paragraph2"
          }>
          <i
            onClick={() => setActive2("")}
            className={
              active2 === "active"
                ? "fa-solid fa-xmark active"
                : "fa-solid fa-xmark hidden"
            }></i>
          <div>
            <p>
              {" "}
              Angkor Wat, nestled in the heart of Cambodia, is more than just a
              temple – it's a breathtaking masterpiece that whispers tales of a
              glorious past. Picture this: towering spires reaching for the sky,
              intricate carvings etched into every stone, and a sense of awe
              that envelops you as you step into its ancient embrace. Built
              during the 12th century by the visionary King Suryavarman II,
              Angkor Wat was more than just a place of worship. It was a symbol
              of the Khmer Empire's power and grandeur, a monument to divine
              devotion, and a testament to human ingenuity. Originally dedicated
              to the Hindu god Vishnu, Angkor Wat later transformed into a
              Buddhist sanctuary, mirroring the cultural shifts that swept
              through the region over the centuries. Its name, meaning "City of
              Temples," hints at its colossal size and significance – a
              sprawling complex of galleries, courtyards, and towers that once
              served as the empire's spiritual and political center. Wandering
              through Angkor Wat is like stepping back in time. Each corner
              reveals a new story, told through intricate bas-reliefs that adorn
              its walls. From epic battles to celestial beings, these carvings
              paint a vivid picture of Khmer life and mythology, offering a
              glimpse into a bygone era. Despite centuries of weathering and
              neglect, Angkor Wat remains a symbol of Cambodia's rich heritage
              and resilience. Rediscovered by French explorer Henri Mouhot in
              the 19th century, it captured the world's imagination and sparked
              a renewed interest in Khmer culture. Today, Angkor Wat continues
              to draw visitors from far and wide, each one drawn by the allure
              of its mystical beauty and historical significance. Watching the
              sunrise over Angkor Wat is a truly magical experience – as the
              first rays of dawn illuminate its ancient walls, you can't help
              but feel a sense of wonder and reverence. But Angkor Wat isn't
              just a tourist attraction – it's a living monument that requires
              constant care and preservation. Conservation efforts ensure that
              this architectural marvel remains standing for future generations
              to admire, protecting it from the ravages of time and tourism. In
              the end, Angkor Wat is more than just a temple – it's a testament
              to the enduring spirit of humanity. Its towering spires and
              intricate carvings remind us of the power of faith, the beauty of
              art, and the resilience of the human spirit. And as long as it
              stands, it will continue to inspire wonder and awe in all who
              behold it.
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            width > 550 && active2 !== "active"
              ? setActive2("active")
              : active2 == "showall"
              ? setActive2("")
              : setActive2("showall")
          }
          ref={btn2}
          className="p-2 mt-2 pl-1 cursor-pointer bg-transparent border-none text-gray-300 hover text-[13px]">
          {active2 === "showall" ? "Show less" : "Show More..."}
        </button>
      </div>
      <div
        className={
          active1 === "active" || active2 === "active"
            ? "backdrop active"
            : "backdrop"
        }></div>
    </main>
  );
};

export default Card;
