// import React from 'react'
// import { useKeenSlider } from "keen-slider/react";
// import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
// import { useEffect } from "react";

// const TechSlider = ({ reverse = reverse }) => {

//   const [sliderRef, instanceRef] = useKeenSlider({
//     loop: true,
//     mode: "free-snap",
//     slides: { perView: 2, spacing: 15 },
   

//     breakpoints: {
       
//       "(min-width: 640px)": {
//         slides: { perView: 3, spacing: 15 },
//       },
//       "(min-width: 1024px)": {
//         slides: { perView: 4, spacing: 20 },
//       },
//     },
//   });


// useEffect(() => {
//     if (instanceRef.current) {
//       const slider = instanceRef.current;
//       let timeout;
//       function autoplay() {
//         timeout = setTimeout(() => {
//           reverse ? slider.prev() : slider.next();
//           autoplay();
//         }, 2000);
//       }
//       autoplay();
//       return () => clearTimeout(timeout);
//     }
//   }, [instanceRef]);

// const skills = [
//     { icon: <FaReact size={25} className="text-blue-500" />, name: "React" },
//     { icon: <FaHtml5 size={25} className="text-orange-500" />, name: "HTML5" },
//     { icon: <FaCss3Alt size={25} className="text-blue-600" />, name: "CSS3" },
//     {
//       icon: <FaJs size={25} className="text-yellow-400" />,
//       name: "JavaScript",
//     },
//   ];


//   return (
//     <div ref={sliderRef} className="keen-slider mb-10 ">
//                 {skills.map((skill, index) => (
//                   <div
//                     key={index}
//                     className="keen-slider__slide    flex flex-col items-center justify-center px-2 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-md transition-transform duration-500 hover:scale-105"
//                   >
//                     {skill.icon}
//                     <span className="mt-2 text-white text-xs">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//     </div>
//   )
// }

// export default TechSlider





import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const TechSlider = ({ reverse = false }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 3, spacing: 10 }, // Mobile default
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      const slider = instanceRef.current;
      let timeout;
      function autoplay() {
        timeout = setTimeout(() => {
          reverse ? slider.prev() : slider.next();
          autoplay();
        }, 2500);
      }
      autoplay();
      return () => clearTimeout(timeout);
    }
  }, [instanceRef, reverse]);

  const skills = [
    { icon: <FaReact size={25} className="text-blue-500" />, name: "React" },
    { icon: <FaHtml5 size={25} className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt size={25} className="text-blue-600" />, name: "CSS3" },
    { icon: <FaJs size={25} className="text-yellow-400" />, name: "JavaScript" },
  ];

  return (
    <div className=" px-4 overflow-hidden">
      <div ref={sliderRef} className="keen-slider mb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center justify-center px-4 py-4 sm:px-2 sm:py-2 bg-white/10 backdrop-blur-md rounded-full shadow-md transition-transform duration-500 hover:scale-105"
          >
            {skill.icon}
            <span className="mt-2 text-white text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
