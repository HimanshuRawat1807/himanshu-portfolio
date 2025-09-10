import React from "react";
import { Code, Smartphone, PenTool, Search, Briefcase } from "lucide-react"; // Using lucide-react icons

const services = [
  {
    title: "React",
    description:
      "Building fast, responsive, and scalable websites using the latest web technologies.",
    icon: <Code className="w-8 h-8 text-indigo-600" />,
    image: "./reactjs.png"
  },
  {
    title: "Tailwind",
    description:
      "Designing intuitive interfaces that provide engaging user experiences and interactions.",
    icon: <PenTool className="w-8 h-8 text-indigo-600" />,
    image: "./bootstrap.png"
  },
  {
    title: "Bootstrap",
    description:
      "Helping your brand rank higher on search engines and reach your target audience effectively.",
    icon: <Search className="w-8 h-8 text-indigo-600" />,
    image: "./git.png"
  },
  {
    title: "Git",
    description:
      "Creating user-friendly mobile apps that deliver performance and value to your users.",
    icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
    image: "./nodejs.png"
  },
  {
    title: "Git",
    description:
      "Providing expert advice to help businesses optimize operations and accelerate growth.",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    image: "./tailwindcss.png"
  },
  {
    title: "Git",
    description:
      "Creating user-friendly mobile apps that deliver performance and value to your users.",
    icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
    image: "./nodejs.png"
  },
  {
    title: "Git",
    description:
      "Providing expert advice to help businesses optimize operations and accelerate growth.",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    image: "./tailwindcss.png"
  },
  {
    title: "Git",
    description:
      "Providing expert advice to help businesses optimize operations and accelerate growth.",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    image: "./tailwindcss.png"
  },
];

const Services = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#0A0A0A] md:px-12 lg:px-24 xl:px-32" id="services">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-gray-100 sm:3xl md:text-3xl lg:text-5xl font-extrabold uppercase mb-15 text-center">
          Premium Tools
        </h2>
        <div className="grid mx-auto gap-8 grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/30 to-[#0A0A0A] p-6 rounded-2xl shadow-sm hover:shadow-md transition  "
            >
              {/* <div className="mb-4 border border-black">{service.icon} </div> */}
              <div className="mb-4 "><img src={service.image} style={{width:"5rem",height:"5rem", margin:"auto"}} alt="" srcset="" /> </div>
              <h3 className="text-md lg:text-lg font-semibold text-gray-300 my-7 text-center">{service.title}</h3>
              {/* <p className="text-sm text-gray-600">{service.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
