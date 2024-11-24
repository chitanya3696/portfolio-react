import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
      
        </h3>
      </div>

      <ul className="text-sm md:text-xl cursor-pointer">
  <li className="flex gap-1 items-center text-black">
    <MdOutlineEmail size={20} />
    chaitanyamatkar99@gmail.com
  </li>
  <li className="flex gap-1 items-center text-black">
    <CiLinkedin />
    <a
      href="https://www.linkedin.com/in/chaitanya-matkar"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      linkedin.com/chaitanya-matkar
    </a>
  </li>
  <li className="flex gap-1 items-center text-black">
    <FaGithub />
    <a
      href="https://github.com/chitanya3696"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      github.com/chaitanya3696
    </a>
  </li>
</ul>

    </div>
  );
};

export default Footer;

