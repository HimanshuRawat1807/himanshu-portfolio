import React from "react";

const Resume = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#0A0A0A] md:px-12 lg:px-24 xl:px-32" id="resume">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          My Resume
        </h2>

        {/* Download Button */}
        <div className="text-center mb-10">
          <a
            href="/resume.pdf" // Make sure this PDF is placed inside the `public/` folder
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            📄 Download Resume (PDF)
          </a>
        </div>

        {/* Web Resume View */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">🎓 Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white">B.Tech in Computer Science</h4>
                <p className="text-sm text-white">XYZ University, 2018–2022</p>
              </div>
              <div>
                <h4 className="font-medium text-white">12th Grade – CBSE</h4>
                <p className="text-sm text-white">ABC Public School, 2016–2018</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">💼 Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white">Frontend Developer – OnePerson</h4>
                <p className="text-sm text-white">Jan 2023 – Present</p>
                <p className="text-sm text-white">
                  Developed multiple business websites and React-based apps with focus on performance, SEO, and responsive UI.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white">Intern – UI Designer</h4>
                <p className="text-sm text-white">Aug 2022 – Dec 2022</p>
                <p className="text-sm text-white">
                  Created wireframes, mockups, and prototypes for client projects using Figma and Adobe XD.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">🛠 Skills</h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="px-3 py-1 bg-gray-100 rounded-full">HTML</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">CSS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">React</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Git</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Figma</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">SEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
