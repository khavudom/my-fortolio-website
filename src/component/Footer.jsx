import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import { Link } from "react-router-dom";
import tamneak from "../assets/namneak.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between sm:justify-around p-4 gap-4">
      <ul className="flex flex-col gap-3">
        <h3>Social Media</h3>
        <a
          href="https://www.facebook.com/profile.php?id=100027816968628&mibextid=LQQJ4d"
          target="_blank"
          className="text-gray-400 flex gap-2 items-center">
          <FaFacebook className="text-xl" /> Facebook
        </a>
        <a
          href="https://www.instagram.com/vann_sith_"
          target="_blank"
          className="text-gray-400 flex gap-2 items-center">
          <FaInstagram className="text-xl" />
          Instargram
        </a>
        <a
          href="https://www.threads.net/vann_sith_"
          target="_blank"
          className="text-gray-400 flex gap-2 items-center">
          <i className="fa-brands fa-threads"></i>
          Thread
        </a>
        <a
          href="https://twitter.com?screen_name=123khavudom"
          target="_blank"
          className="text-gray-400 flex gap-2 items-center">
          <FaTwitter className="text-xl" />X
        </a>
        <a
          href="https://tamneakapp.page.link/UJQy"
          target="_blank"
          className="text-gray-400 flex gap-2 items-center">
          <img
            src={tamneak}
            alt="tamneak"
            style={{ width: "25px", marginLeft: "-1px" }}
          />
          Tam Neak
        </a>
        <a
          href="https://www.linkedin.com/in/increase-undefined-b817bb2a7/"
          target="_blank"
          className="text-gray-400 flex gap-2 items-center">
          <FaLinkedinIn className="text-xl" />
          LinkIn
        </a>
      </ul>

      <ul className="flex flex-col gap-3">
        <h3>Coding </h3>
        <Link className="text-gray-400" to="/projects#you">
          HTML, CSS, JavaScript
        </Link>
        <Link className="text-gray-400">React js, Vue js, TypeScript</Link>
        <Link className="text-gray-400">Node js, Express js, Nest js</Link>
        <Link className="text-gray-400">MySQL, MongoDB, FireBase</Link>
        <Link className="text-gray-400">PHP, Laravel</Link>
      </ul>
      <ul className="flex flex-col gap-3">
        <h3>Plans</h3>
        <Link className="text-gray-400 soon">Doc</Link>
        <Link className="text-gray-400">AI/ML</Link>
        <Link className="text-gray-400">Maths</Link>
        <Link className="text-gray-400">E-Learning </Link>
        <Link className="text-gray-400">Game</Link>
      </ul>
    </footer>
  );
};

export default Footer;
