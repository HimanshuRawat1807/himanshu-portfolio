import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
];

const FullLogoCarousel = ({ direction }) => {
  return (
    <div className="max-w min-w-full-full overflow-hidden ">
      <div className={`flex ${direction === "left" ? "animate-scroll" : "animate-scroll-reverse"} gap-4 `}>
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center bg-[#151515] rounded-full w-40 px-4 py-4"
          >
            <img
              src={logo}
              alt={`logo-${i}`}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>  
    </div>
  );
};



export default FullLogoCarousel;
