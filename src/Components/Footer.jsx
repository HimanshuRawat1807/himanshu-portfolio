import React from "react";
import { Linkedin, Github, Twitter, ArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    // <footer className="bg-[#0A0A0A] text-gray-300 px-6 py-8 md:px-12 lg:px-24 xl:px-32">
    //   <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 border border-white">
    //     {/* Logo / Info */}
    //     <div className="border border-white">
    //       <h3 className="text-xl font-semibold text-white mb-2">Himanshu Rawat</h3>
    //       <p className="text-sm text-gray-400">Crafting web experiences that deliver impact.</p>
    //     </div>

    //     {/* Quick Links */}
    //     <div className="border border-white">
    //       <h4 className="text-lg font-medium text-white mb-2">Quick Links</h4>
    //       <ul className="space-y-2 text-sm">
    //         <li><a href="#home" className="hover:text-white">Home</a></li>
    //         <li><a href="#about" className="hover:text-white">About</a></li>
    //         <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
    //         <li><a href="#contact" className="hover:text-white">Contact</a></li>
    //       </ul>
    //     </div>

    //     {/* Social & Legal */}
    //     <div className="border border-white">
    //       <h4 className="text-lg font-medium text-white mb-2">Connect</h4>
    //       <div className="flex space-x-4 mb-4">
    //         <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
    //           <Linkedin size={20} />
    //         </a>
    //         <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
    //           <Github size={20} />
    //         </a>
    //         <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
    //           <Twitter size={20} />
    //         </a>
    //       </div>
    //       <ul className="text-sm space-y-1">
    //         <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
    //         <li><a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a></li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
    //     © {new Date().getFullYear()} Himanshu Rawat. All rights reserved.
    //   </div>
    // </footer>

    <footer className=" pt-30 md:pt-20 sm:pt-10 bg-[#0A0A0A]">
      {/* <div className=" bg-blue w-full sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-12/12 2xl:10/12 mx-auto grid md:grid-cols-2 gap-12 items-start"> */}
      <div className="bg-[#161616] rounded-2xl flex flex-wrap max-w-7xl m-auto px-5 justify-center items-center py-5">
        {/* Logo / Info */}
        <div className=" text-white w-full lg:w-1/3 md:w-1/3 sm:-1/1 flex justify-center lg:justify-start ">
          <ul className="text-sm space-y-1 flex gap-5">
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className=" border  w-full lg:w-1/3 md:w-1/3 sm:w-1/1 ">
          <div className="flex items-center justify-center space-x-4 text-white">
            
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

        {/* Social & Legal */}
        <div className="border  w-full lg:w-1/3 md:w-1/3 sm:w-1/1 flex justify-center lg:justify-end">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2  text-white px-4 py-2 rounded-full transition"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>
      </div>

      <div className="mt-10 pt-4 text-sm text-center text-gray-500 py-5">
        <p className="m-auto">
          © {new Date().getFullYear()} Himanshu Rawat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
