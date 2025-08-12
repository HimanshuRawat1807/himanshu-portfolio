import React from "react";
import { Code, Smartphone, PenTool, Search, Briefcase } from "lucide-react"; // Using lucide-react icons

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites using the latest web technologies.",
    icon: <Code className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces that provide engaging user experiences and interactions.",
    icon: <PenTool className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Helping your brand rank higher on search engines and reach your target audience effectively.",
    icon: <Search className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "App Development",
    description:
      "Creating user-friendly mobile apps that deliver performance and value to your users.",
    icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Business Consulting",
    description:
      "Providing expert advice to help businesses optimize operations and accelerate growth.",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
  },
];

const Services = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#0A0A0A] md:px-12 lg:px-24 xl:px-32" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          What I Do
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
