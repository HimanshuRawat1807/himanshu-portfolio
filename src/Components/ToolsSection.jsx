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

  // on name change
  // const onNameChange = (e)=>{
  //     setName(e.target.value);

  // }
  // const onEmailChange = (e)=>{
  //     setEmail(e.target.value)
  // }
  // const onMessageChange = (e)=>{
  //     setMessage(e.target.value)
  // }

  const handleForm = (e) => {
    e.preventDefault();

    console.log(formData);

    // console.log("form submit");
    // e.preventDefault();
    // console.log(name,email,message);

    // setName("");
    // setEmail("");
    // setMessage("");
  };

  return (
    // <section className="min-h-screen pt-30 md:pt-20 sm:pt-10 bg-black border border-white">
    //   {/* responsive */}
    //   <div className="bg-black border border-white flex flex-wrap justify-center max-w-7xl m-auto px-5">
    //     <div className="tool-section bg-[#0A0A0A] grid grid-rows-7 md:grid-rows-4 lg:grid-rows-3 md:grid-cols-2 lg:grid-cols-3  gap-4 border border-2 border-white text-white">
    //       {/* counters */}
    //       <div className="border-2 border-white lg:col-span-2 ">
    //         {/* counter section */}
    //         <div className="counter-component flex flex-col items-center border border-white ">

    //           <div className=" border border-white flex">
    //             <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center  ">

    //               <span className="text-4xl">95%</span>

    //               <span className="font-bold">Happy Clients</span>
    //             </span>

    //             <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">

    //               <span className="text-4xl">95%</span>

    //               <span className="font-bold">Happy Clients</span>
    //             </span>

    //             <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">

    //               <span className="text-4xl">95%</span>

    //               <span className="font-bold">Happy Clients</span>
    //             </span>
    //           </div>

    //           <div className=" border border-white flex">
    //             <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center  ">

    //               <span className="text-4xl">95%</span>

    //               <span className="font-bold">Happy Clients</span>
    //             </span>

    //             <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">

    //               <span className="text-4xl">95%</span>

    //               <span className="font-bold">Happy Clients</span>
    //             </span>

    //             <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">

    //               <span className="text-4xl">95%</span>

    //               <span className="font-bold">Happy Clients</span>
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* tech carousel */}
    //       <div className="border-2 border-white row-span-2">
    //         <div className="w-full max-w-lg mx-auto py-6">
    //           <div className="px-5">
    //             <h4 className=" w-full bg-linear-to-b from-[#edeffd] to-[#da7bda] bg-clip-text px-4 text-center text-3xl leading-[100%] font-bold tracking-tighter text-transparent select-none dark:from-[#edeffd]">
    //               Passionate about cutting edge technologies
    //             </h4>
    //           </div>

    //           <div className="mt-10">
    //             <TechSlider className="mb-5" reverse={true} />
    //              <TechSlider className="mb-5" reverse={false} />
    //             <TechSlider className="mb-5" reverse={true} />
    //           </div>
    //         </div>
    //       </div>
    //       {/*contact form */}
    //       <div className="border-2 border-white row-span-2">
    //         {/* <div className="text-white"></div> */}
    //         <form
    //           onSubmit={onChangeHandler}
    //           className="space-y-5 p-10 border border-white"
    //         >
    //           <div>
    //             <label className="block mb-2 text-sm">Name</label>
    //             <input
    //               type="text"
    //               name="name"
    //               value={formData.name}
    //               onChange={onChangeHandler}
    //               className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //               placeholder="Your name"
    //             />
    //           </div>

    //           <div>
    //             <label className="block mb-2 text-sm">Email</label>
    //             <input
    //               type="email"
    //               name="email"
    //               onChange={onChangeHandler}
    //               value={formData.email}
    //               className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //               placeholder="your.email@example.com"
    //             />
    //           </div>
    //           <div>
    //             <label className="block mb-2 text-sm">Message</label>
    //             <textarea
    //               name="message"
    //               onChange={onChangeHandler}
    //               value={formData.message}
    //               className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    //               rows="4"
    //               placeholder="What would you like to discuss?"
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             // onClick={handleForm}
    //             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bolder py-3 rounded-lg transition-all duration-300"
    //           >
    //             Send Message
    //           </button>
    //         </form>
    //         <div />
    //       </div>
    //       <div className="border-2 border-white flex flex-col justify-center items-center ">
    //         <span
    //           className="relative text-[rgb(255,255,255,90%)] dark:text-[rgb(255,255,255,90%)] font-instrument-serif w-full max-w-80 -translate-y-4 py-2 text-center text-3xl font-bold text-balance"
    //           style={myStyle}
    //         >
    //           let's Work together
    //         </span>

    //         <button className="border border-white items-center gap-2 py-3 text-base font-light text-white dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/60 dark:hover:text-white/90 flex w-full max-w-60 justify-center rounded-md bg-white/10 px-8 shadow-[inset_0_3px_10px_#ffffff3f] ">
    //           <Copy />
    //           Let's work together
    //         </button>
    //       </div>
    //       <div className=" w-full max-w-full border-2 border-white md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center gap-5 ">
    //         {/* <FullLogoCarousel direction=""/> */}

    //         {/* <FullLogoCarousel direction/> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <FullLogoCarousel direction="left"/>

    //  <section className="min-h-screen pt-30 md:pt-20 sm:pt-10 bg-black border border-white px-5">
    //     {/* responsive */}
    //     <div className="bg-black border border-white flex flex-wrap justify-center max-w-7xl m-auto px-5 h-50">
    //         <FullLogoCarousel direction="left"/>
    //     </div>
    //     </section>

    // <section className="min-h-screen pt-30 md:pt-20 sm:pt-10 bg-black border border-white">
    //   {/* responsive */}
    //   <div className="bg-black border border-white flex flex-wrap justify-center max-w-7xl m-auto px-5">
    //     <div className="tool-section bg-[#0A0A0A] grid grid-rows-7 md:grid-rows-4 lg:grid-rows-3 md:grid-cols-2 lg:grid-cols-3  gap-4 border border-2 border-white text-white">
    //       {/* counters */}
    //       <div className="border-2 border-white lg:col-span-2 ">
    //         {/* counter section */}

    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae non voluptatem provident culpa commodi nulla possimus, unde repellat voluptates tempore?

    //       </div>

    //       {/* tech carousel */}
    //       <div className="border-2 border-white row-span-2">

    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam adipisci minima numquam voluptatem mollitia quae dolores accusamus molestias nisi.

    //       </div>
    //       {/*contact form */}
    //       <div className="border-2 border-white row-span-2">
    //         {/* <div className="text-white"></div> */}
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas ducimus officiis error illo alias voluptates, eius est at asperiores!

    //           3
    //       </div>
    //       <div className="border-2 border-white flex flex-col justify-center items-center ">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt error omnis aspernatur dignissimos sint earum odio inventore molestias fugiat beatae.
    //       </div>
    //       <div className=" w-full max-w-full border-2 border-white md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center gap-5 ">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam error blanditiis laboriosam dolorem adipisci earum laudantium consectetur, modi officiis nobis.

    //         {/* <div>1</div>
    //         <div>2</div>
    //         <div>3</div>
    //         <div>4</div>
    //         <div>5</div> */}

    //         {/* <FullLogoCarousel direction=""/> */}

    //         {/* <FullLogoCarousel direction/> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // new grid
    <section className="min-h-screen pt-30 md:pt-20 sm:pt-10 bg-black ">
      {/* responsive */}
      <div className="bg-black max-w-7xl m-auto px-5 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   grid-rows-7 md:grid-rows-4 lg:grid-rows-3 gap-4">
          <div className=" lg:col-span-2">
            {/* <div className="counter-component flex flex-wrap flex-col items-center border border-white ">
              <div className=" border border-red-600 flex">
                <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center  ">
                  <span className="text-4xl">95%</span>

                  <span className="font-bold">Happy Clients</span>
                </span>

                <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">
                  <span className="text-4xl">95%</span>

                  <span className="font-bold">Happy Clients</span>
                </span>

                <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">
                  <span className="text-4xl">95%</span>

                  <span className="font-bold">Happy Clients</span>
                </span>
              </div>
              <div className=" border border-red-600 flex ">
                <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center  ">
                  <span className="text-4xl">95%</span>

                  <span className="font-bold">Happy Clients</span>
                </span>

                <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">
                  <span className="text-4xl">95%</span>

                  <span className="font-bold">Happy Clients</span>
                </span>

                <span className="backdrop-blur-[5px] bg-white/10 px-5  py-10 rounded-[50%] flex flex-col justify-center items-center ms-[-10px]">
                  <span className="text-4xl">95%</span>

                  <span className="font-bold">Happy Clients</span>
                </span>
              </div>
            </div> */}

            {/* <div className="grid grid-cols-3 lg:grid-cols-3 place-items-center max-w-xl border border-whte">
               <span className="backdrop-blur-[5px] bg-white/10  rounded-[50%] py-5 flex flex-col justify-center items-center h-[120px] w-[120px] border border-white ">
                  <span className="text-3xl">95%</span>
                  <span className="">Happy Clients</span>
                </span>
                 <span className="backdrop-blur-[5px] bg-white/10  rounded-[50%] flex flex-col justify-center items-center h-[120px] w-[120px] ">
                  <span className="text-3xl">95%</span>
                  <span className="">Happy Clients</span>
                </span>
                 <span className="backdrop-blur-[5px] bg-white/10 rounded-[50%] flex flex-col justify-center items-center h-[120px] w-[120px] ">
                  <span className="text-3xl">95%</span>
                  <span className="">Happy Clients</span>
                </span>


                
            </div> */}
{/* **************************************** */}


          </div>
          <div className=" row-span-2">
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
          <div className=" row-span-2">
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
          <div className=" flex flex-col justify-center items-center py-4 px-2">
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
          <div className=" md:col-span-2 flex flex-col gap-3">
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
