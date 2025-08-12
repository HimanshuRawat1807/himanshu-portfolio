import React from 'react';

const About = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#0A0A0A] md:px-12 lg:px-24 xl:px-32" id="about">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          About Me
        </h2> */}
        <h2 className="text-white  font-bold">
          About
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* <div className="w-full md:w-1/2">
            
          </div> */}
          <div className="w-full md:w-1/2 text-white text-base leading-relaxed">
            <p className="mb-4">
              Hello! I’m <span className="font-semibold text-indigo-600">Himanshu Rawat</span>, a passionate
              and creative professional with a focus on building impactful digital experiences.
            </p>
            <p className="mb-4">
              I specialize in <span className="font-medium">[Your Skills]</span> and have been working
              in the industry for over <span className="font-medium">[X Years]</span>. I love turning complex
              problems into simple, beautiful, and intuitive designs.
            </p>
            <p>
              When I'm not coding or designing, I enjoy reading, exploring new tools, and contributing
              to open-source communities.
            </p>
          </div>
           <div className="w-full md:w-1/2">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
