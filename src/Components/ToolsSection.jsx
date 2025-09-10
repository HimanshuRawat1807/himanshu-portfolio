import React, { useState } from "react";
import TechSlider from "./TechSlider";
import { Copy } from "lucide-react";
import FullLogoCarousel from "./FullLogoCarousel";

const ToolsSection = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  // Toolsectino middle text style

  const myStyle = {
    maskImage:
      "linear-gradient(-75deg, var(--primary) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--primary) calc(var(--x) + 100%))",
    textShadow:
      "rgba(255, 255, 255, 0.3) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 0px 20px, rgba(255, 255, 255, 0.1) 0px 0px 30px",
    "--x": "-100%", // custom property
  };

  const handleForm = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
   
    <section className="min-h-screen bg-[#0A0A0A] ">
      {/* responsive */}
      <div className=" max-w-7xl m-auto px-5 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-7 md:grid-rows-4 lg:grid-rows-3 gap-4">
          <div className=" lg:col-span-2 rounded-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]">
          </div>
          <div className=" row-span-2 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-2xl">
            <div className="w-full max-w-lg mx-auto py-6">
              <div className="px-5">
                <h4 className=" w-full bg-linear-to-b from-[#edeffd] to-[#da7bda] bg-clip-text px-4 text-center text-3xl leading-[100%] font-bold tracking-tighter text-transparent select-none dark:from-[#edeffd]">
                  Passionate about cutting edge technologies
                </h4>
              </div>

              <div className="mt-10">
                <TechSlider className="mb-5" reverse={true} />
                <TechSlider className="mb-5" reverse={false} />
                <TechSlider className="mb-5" reverse={true} />
              </div>
            </div>
          </div>
          <div className=" row-span-2 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-2xl">
            <form
              onSubmit={onChangeHandler}
              className="space-y-5 p-10 "
            >
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChangeHandler}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={onChangeHandler}
                  value={formData.email}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  onChange={onChangeHandler}
                  value={formData.message}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows="4"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <button
                type="submit"
                // onClick={handleForm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bolder py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className=" flex flex-col justify-center items-center py-4 px-2 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-2xl">
            <span
              className="relative text-[rgb(255,255,255,90%)] dark:text-[rgb(255,255,255,90%)] font-instrument-serif w-full max-w-80 -translate-y-4 py-2 text-center text-3xl font-bold text-balance"
              style={myStyle}
            >
              let's Work together
            </span>

            <button className=" items-center gap-2 py-3 text-base font-light text-white dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/60 dark:hover:text-white/90 flex w-full max-w-60 justify-center rounded-md bg-white/10 px-8 shadow-[inset_0_3px_10px_#ffffff3f] ">
              <Copy />
              hello@himanshurawat.com
            </button>
          </div>
          <div className=" md:col-span-2 flex flex-col gap-3 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-2xl">
            <FullLogoCarousel direction="left" />
            <FullLogoCarousel direction />
            <FullLogoCarousel direction="left" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
