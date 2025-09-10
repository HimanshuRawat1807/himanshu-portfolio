// import React from "react";

// import  MyImg from "../assets/HimanshuRawat.jpg";
// import { Mail, Github, Linkedin, Twitter } from "lucide-react";
// import LogoCarousel from "./LogoCarousel";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-[#0A0A0A] px-6 pt-45 pb-12 md:px-12 lg:px-24 flex items-center"
//     >
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-top">
//         {/* Text */}
//         <div>
//           <h1 className="text-7xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl leading-none   text-white uppercase pb-4 font-bold">
//         Software <br/><span className="text-indigo-600">Engineer</span></h1>

//             <p className="text-xl text-gray-500">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>

//           <div className="mt-6 mb-10 flex gap-4">
//             <a
//               href="#contact"
//               className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
//             >
//               Let's Talk
//             </a>
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition"
//             >
//               Download Resume
//             </a>
//           </div>

//           <LogoCarousel />
//         </div>

//         {/* Optional Image */}
//         {/* hidden  was in the below div */}
        // {/* <div className="flex md:flex justify-center">
        //     <div className="img w-3/4 h-1/2">
        //             <img
        //     //src="/hero-image.png" // Replace with your image
        //     src={MyImg}
        //     alt="Hero"
        //     className="w-full max-w-md mx-auto rounded-full"
        //   />
        //     </div>

        // </div> */}

//         <div className="max-w-sm w-90 mx-auto bg-white rounded-3xl shadow-lg overflow-hidden text-center px-10 py-8 space-y-4">
//       <div className="w-full h-70">

//       <img
//         src={MyImg}
//         alt="Profile"
//         className="w-full object-cover  object-top rounded-3xl"
//       />
//       </div>

//       <div>
//         <h2 className="!text-3xl !font-extrabold uppercase">Himanshu Rawat</h2>
//         {/* <p className="text-gray-500">Full Stack Developer</p> */}
//         <p className="text-gray-500 font-medium text-lg pb-4">A Software Engineer who has developed countless innovative solutions.</p>
//       </div>

//       <div className="flex justify-center space-x-8 mt-4">
//         <a href="mailto:example@example.com" className="text-gray-600 hover:text-blue-500 transition">
//           <Mail size={20} />
//         </a>
//         <a href="https://github.com/username" target="_blank" className="text-gray-600 hover:text-black transition">
//           <Github size={20} />
//         </a>
//         <a href="https://linkedin.com/in/username" target="_blank" className="text-gray-600 hover:text-blue-700 transition">
//           <Linkedin size={20} />
//         </a>
//         <a href="https://twitter.com/username" target="_blank" className="text-gray-600 hover:text-sky-500 transition">
//           <Twitter size={20} />
//         </a>
//       </div>
//     </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";

import MyImg from "../assets/HimanshuRawat.jpg";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import LogoCarousel from "./LogoCarousel";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = ({toggleModal}) => {
  return (
    // <section
    //   id="home"
    //   className="min-h-screen bg-[#0A0A0A] px-6 pt-40 pb-12 md:px-12 lg:px-24 flex items-center"
    // >
    //   <div className=" w-full sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-12/12 2xl:10/12 mx-auto grid md:grid-cols-2 gap-12 items-start">

    //     {/* Profile Card - On top in mobile */}
    //     <div className="order-1 md:order-2 flex justify-center max-w-full">
    //       <div className="max-w-sm w-full bg-white rounded-3xl shadow-lg overflow-hidden text-center px-6 py-8 space-y-4">
    //         <div className="w-full">
    //           <img
    //             src={MyImg}
    //             alt="Profile"
    //             className="w-full object-cover object-top rounded-3xl"
    //           />
    //         </div>
    //         <div>
    //           <h2 className="!text-2xl !sm:text-2xl !md:text-3xl font-extrabold uppercase">
    //             Himanshu Rawat
    //           </h2>
    //           <p className="text-gray-500 font-medium text-base sm:text-lg pb-4">
    //             A Software Engineer who has developed countless innovative solutions.
    //           </p>
    //         </div>
    //         <div className="flex justify-center space-x-6 sm:space-x-8 mt-4">
    //           <a href="mailto:example@example.com" className="text-gray-600 hover:text-blue-500 transition">
    //             <Mail size={20} />
    //           </a>
    //           <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
    //             <Github size={20} />
    //           </a>
    //           <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition">
    //             <Linkedin size={20} />
    //           </a>
    //           <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500 transition">
    //             <Twitter size={20} />
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Text Section */}
    //     <div className="order-2 md:order-1">
    //       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white uppercase pb-4 font-bold">
    //         Software <br />
    //         <span className="text-indigo-600">Engineer</span>
    //       </h1>
    //       <p className="text-lg sm:text-xl text-gray-500">
    //         Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
    //       </p>
    //       <div className="mt-6 mb-10 flex flex-wrap gap-4 border ">
    //         <a
    //           href="#contact"
    //           className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
    //         >
    //           Let's Talk
    //         </a>
    //         <a
    //           href="/resume.pdf"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition"
    //         >
    //           Download Resume
    //         </a>
    //       </div>

    //       <div className="mt-6 mb-10 flex flex-wrap gap-4 ">

    //       {/* <LogoCarousel /> */}
    //       </div>
    //     </div>

    //   </div>
    // </section>

    <section className="min-h-screen lg:pt-40 md:pt-20 sm:pt-10 bg-[#0A0A0A]">
      
      <div className=" bg-blue flex flex-wrap justify-center items-center max-w-7xl m-auto px-5  ">
        
        {/* left side*/}  
      <div className="w-full lg:w-2/3 order-2 lg:order-1 text-center lg:text-start mb-5 ">

           <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white uppercase mb-10 ">
             Website  <br />
             <span className="text-[#5F2ED8] lg:leading-none sm:leading-normal">Developer</span>
           </h1>
           <p className="text-lg sm:text-xl text-gray-500 mb-10">
             Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start items-center">
            <div className=" group w-full sm:w-auto" onClick={toggleModal}>
              <a className="block px-6 py-3 bg-[#5F2ED8] border-1 border-[#5F2ED8] text-white rounded-xl font-medium hover:bg-transparent hover:border-[#5F2ED8] hover:border-1  xt-[#5F2ED8] transition" onClick={toggleModal}>Let's Talk</a>
            </div>
            <div className="w-full sm:w-auto">
              <a href="" className="block px-6 py-3 border border-[#5F2ED8] text-white rounded-xl font-medium hover:bg-white hover:text-[#5F2ED8] transition">Download Resume</a>
            </div>
           </div>
          
          </div>

      {/* right side */}
        <div className="w-full lg:w-1/3 order-1 lg:order-2   md:mb-10 flex justify-center max-w-full border ">
            <div className="max-w-sm w-full bg-[#151515] rounded-3xl shadow-lg overflow-hidden text-center px-6 py-8 space-y-4">
              <div className="w-full">
              
                <DotLottieReact
                  src="https://lottie.host/a92e836e-4498-495e-9aba-ed26bcf7bba9/2GThEJuwKJ.lottie"
                  loop={false}
                  autoplay
                />
              </div>
              <div>
                <h2 className="text-gray-100 text-2xl sm:text-2xl md:text-3xl font-extrabold uppercase mb-5">
                  Himanshu Rawat
                </h2>
                <p className="text-gray-400 font-medium text-base sm:text-lg mb-10">
                  A Software Engineer who has developed countless innovative
                  solutions.
                </p>
              </div>
              <div className=" text-red flex justify-center space-x-6 sm:space-x-8 mt-4">
                <a
                  href="mailto:example@example.com"
                  className="text-gray-100 hover:text-blue-500 transition"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-blue-500 transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-blue-700 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-sky-500 transition"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
