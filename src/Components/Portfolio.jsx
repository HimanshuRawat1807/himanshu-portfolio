// import React, { useEffect, useState } from 'react';

// import  Workone  from "../assets/EcommerceWebsite.png";
// import  Worktwo  from "../assets/BusinessWebsite.png";
// import  Workthree  from "../assets/NewsWebsite.png";

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A personal portfolio site showcasing my work and skills.',
//     tech: ['React', 'Tailwind CSS', 'Framer Motion'],
//     image: Workone,
   
//     link: '#',
//   },
//   {
//     title: 'E-commerce App',
//     description: 'An online shopping platform with product pages and cart.',
//     tech: ['Next.js', 'Stripe', 'MongoDB'],
//     image: Worktwo,
//     link: '#',
//   },
//   {
//     title: 'Admin Dashboard',
//     description: 'An internal dashboard for managing data and users.',
//     tech: ['Vue', 'Tailwind CSS', 'Firebase'],
//     image: Workthree,
//     link: '#',
//   },
// ];

// export default function   Portfolio() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const screenHeight = window.innerHeight;
//       const newIndex = Math.min(
//         projects.length - 1,
//         Math.floor(scrollY / screenHeight)
//       );
//       setIndex(newIndex);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const project = projects[index];

//   return (
//     <div className="h-[300vh] bg-[#ffff] text-white relative">
//       <div className="sticky top-0 h-screen flex items-center justify-center px-8">
//         <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
//           {/* Left - Image */}
//           <div className="w-full md:w-1/2 flex justify-center border border-amber-950">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="max-h-[80vh] object-contain rounded-xl shadow-2xl"
//             />
//           </div>

//           {/* Right - Content */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>
//             <p className="text-lg mb-4">{project.description}</p>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.tech.map((tech, i) => (
//                 <span key={i} className="bg-white text-black px-3 py-1 text-sm rounded">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <a
//               href={project.link}
//               className="text-blue-400 underline hover:text-blue-300"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Project →
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from 'react';

// import Workone from "../assets/EcommerceWebsite.png";
// import Worktwo from "../assets/BusinessWebsite.png";
// import Workthree from "../assets/NewsWebsite.png";

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A personal portfolio site showcasing my work and skills.',
//     tech: ['React', 'Tailwind CSS', 'Framer Motion'],
//     image: Workone,
//     link: '#',
//   },
//   {
//     title: 'E-commerce App',
//     description: 'An online shopping platform with product pages and cart.',
//     tech: ['Next.js', 'Stripe', 'MongoDB'],
//     image: Worktwo,
//     link: '#',
//   },
//   {
//     title: 'Admin Dashboard',
//     description: 'An internal dashboard for managing data and users.',
//     tech: ['Vue', 'Tailwind CSS', 'Firebase'],
//     image: Workthree,
//     link: '#',
//   },
// ];

// export default function Portfolio() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const screenHeight = window.innerHeight;
//       const newIndex = Math.min(
//         projects.length - 1,
//         Math.floor(scrollY / screenHeight)
//       );
//       setIndex(newIndex);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const project = projects[index];

//   return (
//     <div className="min-h-[300vh] bg-[#0A0A0A] text-white">
//       {projects.map((proj, i) => (
//         <section
//           key={i}
//           className="h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 border-b border-gray-700"
//         >
//           {/* Left - Image */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src={proj.image}
//               alt={proj.title}
//               className="max-h-[80vh] object-contain rounded-xl shadow-2xl"
//             />
//           </div>

//           {/* Right - Content */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">{proj.title}</h2>
//             <p className="text-lg mb-4">{proj.description}</p>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {proj.tech.map((tech, i) => (
//                 <span key={i} className="bg-white text-black px-3 py-1 text-sm rounded">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <a
//               href={proj.link}
//               className="text-blue-400 underline hover:text-blue-300"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Project →
//             </a>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }



// import React, { useEffect, useRef, useState } from 'react'

// import Workone from "../assets/EcommerceWebsite.png"
// import Worktwo from "../assets/BusinessWebsite.png"
// import Workthree from "../assets/NewsWebsite.png"

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A personal portfolio site showcasing my work and skills.',
//     tech: ['React', 'Tailwind CSS', 'Framer Motion'],
//     image: Workone,
//     link: '#',
//   },
//   {
//     title: 'E-commerce App',
//     description: 'An online shopping platform with product pages and cart.',
//     tech: ['Next.js', 'Stripe', 'MongoDB'],
//     image: Worktwo,
//     link: '#',
//   },
//   {
//     title: 'Admin Dashboard',
//     description: 'An internal dashboard for managing data and users.',
//     tech: ['Vue', 'Tailwind CSS', 'Firebase'],
//     image: Workthree,
//     link: '#',
//   },
// ]

// export default function Portfolio() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [contentVisible, setContentVisible] = useState(true)
//   const sectionRefs = useRef([])

//   // IntersectionObserver: observe each left-side full-screen section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const idx = Number(entry.target.dataset.index)
//           if (entry.isIntersecting) {
//             setActiveIndex(idx)
//           }
//         })
//       },
//       {
//         // tweak threshold between 0.5 - 0.75 for when the right side should update
//         threshold: 0.6,
//       }
//     )

//     sectionRefs.current.forEach((el) => {
//       if (el) observer.observe(el)
//     })

//     return () => {
//       sectionRefs.current.forEach((el) => {
//         if (el) observer.unobserve(el)
//       })
//     }
//   }, [])

//   // small toggle to run content enter animation on index change
//   useEffect(() => {
//     setContentVisible(false)
//     const t = setTimeout(() => setContentVisible(true), 40)
//     return () => clearTimeout(t)
//   }, [activeIndex])

//   return (
//     <div className="bg-[#0A0A0A] text-black">
//       <div className="max-w-6xl mx-auto flex">

//         {/* === LEFT: stacked full-height sections (these scroll with the main page) === */}
//         <div className="w-1/2">
//           {projects.map((proj, i) => (
//             <section
//               key={i}
//               data-index={i}
//               ref={(el) => (sectionRefs.current[i] = el)}
//               className={`h-screen flex items-center justify-center border-b border-gray-200 ${
//                 activeIndex === i ? 'is-visible' : ''
//               }`}
//             >
//               <img
//                 src={proj.image}
//                 alt={proj.title}
//                 className="max-h-[80vh] object-contain rounded-xl shadow-2xl image"
//               />
//             </section>
//           ))}
//         </div>

//         {/* === RIGHT: sticky content that updates based on which left image is visible === */}
//         <aside className="w-1/2 sticky top-0 h-screen flex items-center p-8 bg-[#0A0A0A] text-white">
//           <div
//             className={`max-w-xl transition-all duration-600 ease-out ${
//               contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//             }`
//           }
//           >
//             <h2 className="text-4xl font-bold mb-4">{projects[activeIndex].title}</h2>
//             <p className="mb-4 text-lg text-gray-200">{projects[activeIndex].description}</p>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {projects[activeIndex].tech.map((t, idx) => (
//                 <span key={idx} className="bg-white text-black px-3 py-1 rounded text-sm">
//                   {t}
//                 </span>
//               ))}
//             </div>

//             <a
//               href={projects[activeIndex].link}
//               className="text-blue-300 underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Project →
//             </a>
//           </div>
//         </aside>
//       </div>

//       {/* ===== small CSS for image animation (bottom-to-top) ===== */}
//       <style>{`
//         /* Images start slightly below + transparent; when their section gets class 'is-visible' they animate up */
//         .image { transform: translateY(40px); opacity: 0; transition: transform 0.6s ease-out, opacity 0.6s ease-out; }
//         .is-visible .image { transform: translateY(0); opacity: 1; }
//       `}</style>
//     </div>
//   )
// }


// import React, { useEffect, useRef, useState } from 'react'

// import Workone from "../assets/EcommerceWebsite.png"
// import Worktwo from "../assets/BusinessWebsite.png"
// import Workthree from "../assets/NewsWebsite.png"

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A personal portfolio site showcasing my work and skills.',
//     tech: ['React', 'Tailwind CSS', 'Framer Motion'],
//     image: Workone,
//     link: '#',
//   },
//   {
//     title: 'E-commerce App',
//     description: 'An online shopping platform with product pages and cart.',
//     tech: ['Next.js', 'Stripe', 'MongoDB'],
//     image: Worktwo,
//     link: '#',
//   },
//   {
//     title: 'Admin Dashboard',
//     description: 'An internal dashboard for managing data and users.',
//     tech: ['Vue', 'Tailwind CSS', 'Firebase'],
//     image: Workthree,
//     link: '#',
//   },
// ]

// export default function Portfolio() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [contentVisible, setContentVisible] = useState(true)
//   const sectionRefs = useRef([])

//   // IntersectionObserver: observe each left-side full-screen section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const idx = Number(entry.target.dataset.index)
//           if (entry.isIntersecting) {
//             setActiveIndex(idx)
//           }
//         })
//       },
//       {
//         // tweak threshold between 0.5 - 0.75 for when the right side should update
//         threshold: 0.6,
//       }
//     )

//     sectionRefs.current.forEach((el) => {
//       if (el) observer.observe(el)
//     })

//     return () => {
//       sectionRefs.current.forEach((el) => {
//         if (el) observer.unobserve(el)
//       })
//     }
//   }, [])

//   // small toggle to run content enter animation on index change
//   useEffect(() => {
//     setContentVisible(false)
//     const t = setTimeout(() => setContentVisible(true), 40)
//     return () => clearTimeout(t)
//   }, [activeIndex])

//   return (
//     <div className="bg-white text-black">
//       <div className="max-w-6xl mx-auto flex">

//         {/* === LEFT: stacked full-height sections (these scroll with the main page) === */}
//         <div className="w-1/2">
//           {projects.map((proj, i) => (
//             <section
//               key={i}
//               data-index={i}
//               ref={(el) => (sectionRefs.current[i] = el)}
//               className={`h-screen flex items-center justify-center border-b border-gray-200 ${
//                 activeIndex === i ? 'is-visible' : ''
//               }`}
//             >
//               <img
//                 src={proj.image}
//                 alt={proj.title}
//                 className="max-h-[80vh] object-contain rounded-xl shadow-2xl image"
//               />
//             </section>
//           ))}
//         </div>

//         {/* === RIGHT: sticky content that updates based on which left image is visible === */}
//         <aside className="w-1/2 sticky top-0 h-screen flex items-center p-8 bg-[#0A0A0A] text-white">
//           <div
//             className={`max-w-xl transition-all duration-600 ease-out ${
//               contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//             }`
//           }
//           >
//             <h2 className="text-4xl font-bold mb-4">{projects[activeIndex].title}</h2>
//             <p className="mb-4 text-lg text-gray-200">{projects[activeIndex].description}</p>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {projects[activeIndex].tech.map((t, idx) => (
//                 <span key={idx} className="bg-white text-black px-3 py-1 rounded text-sm">
//                   {t}
//                 </span>
//               ))}
//             </div>

//             <a
//               href={projects[activeIndex].link}
//               className="text-blue-300 underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Project →
//             </a>
//           </div>
//         </aside>
//       </div>

//       {/* ===== small CSS for image animation (bottom-to-top) ===== */}
//       <style>{`
//         /* Images start slightly below + transparent; when their section gets class 'is-visible' they animate up */
//         .image { transform: translateY(40px); opacity: 0; transition: transform 0.6s ease-out, opacity 0.6s ease-out; }
//         .is-visible .image { transform: translateY(0); opacity: 1; }
//       `}</style>
//     </div>
//   )
// }



import React, { useEffect, useRef, useState } from "react";

import Workone from "../assets/BusinessWebsite.png";
import Worktwo from "../assets/BusinessWebsite.png";
import Workthree from "../assets/NewsWebsite.png";
import { ArrowRight } from 'lucide-react';

const projects = [

  {   
    shorDescription: "A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
    title: "Portfolio Website",
    description: "A personal portfolio site showcasing my work and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: Workone,
    link: "#",
  },
  {
    shorDescription: "A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
    title: "E-commerce App",
    description: "An online shopping platform with product pages and cart.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    image: Worktwo,
    link: "#",
  },
  {
    shorDescription: "A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
    title: "Admin Dashboard",
    description: "An internal dashboard for managing data and users.",
    tech: ["Vue", "Tailwind CSS", "Firebase"],
    image: Workthree,
    link: "#",
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const sectionRefs = useRef([]);

  // Observe sections only on desktop
  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip for mobile

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Trigger fade animation on content change
  useEffect(() => {
    setContentVisible(false);
    const t = setTimeout(() => setContentVisible(true), 40);
    return () => clearTimeout(t);
  }, [activeIndex]);

  return (

    <div className="bg-[#0A0A0A] text-black">
      {/* Desktop layout */}
      <div className="hidden max-w-7xl lg:flex  mx-auto">
        {/* Left: images */}
        <div className=" w-2/3  ">
          {projects.map((proj, i) => (
            <section
              key={i}
              data-index={i}
              ref={(el) => (sectionRefs.current[i] = el)}
              className={`group overflow-hidden  flex flex-col items-center justify-center border-10 mb-20 mx-15 relative cursor-pointer rounded-2xl border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl  lg:rounded-3xl lg:p-2 ${
                activeIndex === i ? "is-visible" : ""
              }`}
            >
              <div className="hidden lg:flex justify-center items-center px-12 py-8 ">
                <h3 className="text-white">
                  {proj.shorDescription}
                </h3>
                <ArrowRight size={35} color="white"/>
              </div>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full max-w-[85%] object-contain rounded-xl shadow-2xl  duration-500 group-hover:-rotate-5 group-hover:scale-105 mt-15 "
              />  
            </section>
          ))}
        </div>

        {/* Right: sticky project details */}
        <aside className="w-1/3 sticky top-50 h-screen flex  bg-[#0A0A0A] text-white">
          <div
            className={`max-w-xl transition-all duration-600 ease-out ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">
              {projects[activeIndex].title}
            </h2>
            <p className="mb-4 text-lg text-gray-200">
              {projects[activeIndex].description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {projects[activeIndex].tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-white text-black px-3 py-1 rounded text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={projects[activeIndex].link}
              className="text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </aside>
      </div>

       {/* Tablet layout */}
      <div className="hidden md:flex flex-wrap  mx-auto border  max-w-6xl lg:hidden">
        {projects.map((proj, i) => (
          <div key={i} className="  max-w-1/2 px-4 py-4 ">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full rounded-xl shadow-lg"
            />
            <h2 className="text-2xl font-bold">{proj.title}</h2>
            <p className="text-gray-700">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-black px-3 py-1 rounded text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-2xl mx-auto p-4 space-y-12">
        {projects.map((proj, i) => (
          <div key={i} className="space-y-4">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full rounded-xl shadow-lg"
            />
            <h2 className="text-2xl font-bold">{proj.title}</h2>
            <p className="text-gray-700">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-black px-3 py-1 rounded text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        .image { transform: translateY(40px); opacity: 0; transition: transform 0.6s ease-out, opacity 0.6s ease-out; }
        .is-visible .image { transform: translateY(0); opacity: 1; }
      `}</style>
    </div>
  );
}
  