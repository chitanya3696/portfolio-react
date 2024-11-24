import React from "react";
import AboutImg from "../../assets/image1.png";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 " src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
           

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                10TH Boards
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Adarsh Vidyaniketan And Junior College Minche kolhapur
                </p>
                <h2 className="text-slate-300 font-light"> 92.20< br />
                5/2021 to 5/2022

                </h2>
              </span>
            </div>
            <div className="flex gap-3 py-4">
          

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Diploma In Information Technology
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Government Polytechnic Mumbai
                </p>
                <h2 className="text-slate-300 font-light"> 85.00 <br />
                8/2022-Present

                </h2>
              </span>
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 ADDRESS
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 Mumbai,India
                </p>
                <h2 className="text-slate-300 font-light"> 85.00 <br />
                8/2022-Present

                </h2>
              </span>
            </div>
            <div className="flex gap-3 py-4">
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
