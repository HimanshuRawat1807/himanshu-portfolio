import React from "react";
import MyImg from "../assets/HimanshuRawat.jpg";
import { Linkedin, Github, Twitter, ArrowUp } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0A0A0A]" id="about">
      <div className="bg-blue flex flex-wrap   max-w-7xl m-auto px-5 ">
        {/* content side */}
        <div className="text-white w-1/1 lg:w-1/2 pe-10">
          <h2 className="text-gray-100 sm:3xl md:text-3xl lg:text-5xl font-extrabold uppercase mb-5">About Me</h2>

          <p className="pt-4">
            Hello! I’m Himanshu Rawat, a creative web developer passionate about crafting responsive, user-friendly, and visually captivating websites. From structuring layouts to adding interactive elements, I bring ideas to life using React, Tailwind CSS, and Bootstrap.
          </p>

          <p className="pt-4">I believe every website should not just function but tell a story, engage users, and create an experience worth remembering. Beyond coding, I’m constantly exploring new design trends and technologies to deliver fresh, modern solutions.</p>
          
          <p className="pt-4">I live by one principle: Great design is born from passion, and passion turns ideas into reality.</p>

           <div className="flex items-center justify-start space-x-4 text-white mt-10">
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="border-1 p-3 rounded-2xl  border-white/30  bg-transparent 
             transition-all duration-500 ease-in-out 
             hover:bg-white hover:text-gray-900 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="border-1 p-3 rounded-2xl  border-white/30  bg-transparent 
             transition-all duration-500 ease-in-out 
             hover:bg-white hover:text-gray-900 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="border-1 p-3 rounded-2xl  border-white/30  bg-transparent 
             transition-all duration-500 ease-in-out 
             hover:bg-white hover:text-gray-900 hover:scale-110 transform"
            >
              <Twitter size={20} />
            </a>
          </div>

        </div>

        {/* Image side */}
        <div className="text-white w-1/1 lg:w-1/2 mt-10 md:mt-10 lg:mt-0 flex justify-center items-center">


        <div className="p-5 rounded-4xl">
          <img src={MyImg} className="rounded-4xl" alt="" srcset="" />

        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
