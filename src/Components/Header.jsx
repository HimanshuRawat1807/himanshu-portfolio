import React, { useState } from "react";
import {
  Menu,
  X,
  House,
  SquarePen,
  BriefcaseBusiness,
  ChartArea,
  Sun,
  Moon,
  Search,
} from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "#home",
    icon: <House size={"20px"} className="nav-item-icon" />,
  },
  {
    label: "About",
    href: "#about",
    icon: <SquarePen size={"20px"} className="nav-item-icon" />,
  },
  {
    label: "Works",
    href: "#works",
    icon: <BriefcaseBusiness size={"20px"} className="nav-item-icon" />,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: <ChartArea size={"20px"} className="nav-item-icon" />,
  },

  // { label: "Contact", href: "#contact", icon:  },
];

const Header = () => {
  // dakr mode button state

  const [isDark, setIsdark] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // const [active , setActive] =  setActive("");

  return (

//     // <header className="w-full  backdrop-blur-md text-white shadow-md fixed top-0 left-0 z-50">
//     //   <div className="max-w-6xl mx-auto flex items-center justify-center px-6 py-3 md:px-12 lg:px-24">

//     //     {/* Desktop nav */}
//     //     <nav className="sm:flex md:flex space-x-6 bg-[#0D0D0D] px-5 py-3 rounded-4xl">
//     //       {navLinks.map((link) => (

//     //         <a
//     //           key={link.href}
//     //           href={link.href}
//     //           // onClick={() => setActive(link.label)}
//     //           className="flex gap-2 text-sm font-bold text-white uppercase hover:text-indigo-600 transition px-5 py-2 border border-white/20 rounded-4xl ${active === item ? ' border border-indigo/20' : 'hover:bg-gray-700'}`} "
//     //         >
//     //           {link.icon}
//     //           {link.label}
//     //         </a>
//     //       ))}
//     //     </nav>

//     //     {/* Mobile menu button */}
//     //     {/* <button
//     //       className="text-gray-700 md:hidden"
//     //       onClick={() => setMenuOpen((prev) => !prev)}
//     //       aria-label="Toggle menu"
//     //     >
//     //       {menuOpen ? <X size={24} /> : <Menu size={24} />}
//     //     </button> */}
//     //   </div>

//     //   {/* Mobile nav */}
//     //   {/* {menuOpen && (
//     //     <nav className="md:hidden bg-white shadow-inner">
//     //       <ul className="flex flex-col space-y-4 px-6 py-4">
//     //         {navLinks.map((link) => (
//     //           <li key={link.href}>
//     //             <a
//     //               href={link.href}
//     //               className="block text-gray-700 hover:text-indigo-600 transition"
//     //               onClick={() => setMenuOpen(false)}
//     //             >
//     //               {link.label}
//     //             </a>
//     //           </li>
//     //         ))}
//     //       </ul>
//     //     </nav>
//     //   )} */}
//     // </header>

//     //     <header className="w-full  backdrop-blur-md text-white shadow-md fixed top-0 left-0 z-50 border border-white">
//     //   <div className="max-w-6xl mx-auto flex items-center justify-center px-3 py-2 sm:px-6 md:px-8 lg:px-12 border border-white">

//     //     {/* Navigation */}
//     //     <nav className="flex  justify-center gap-2 sm:gap-4 bg-[#0D0D0D] px-2 py-2 rounded-3xl">
//     //       {navLinks.map((link) => (
//     //         <a
//     //           key={link.href}
//     //           href={link.href}
//     //           className="nav-item-text flex gap-2 text-xs sm:text-sm md:text-base font-bold text-white uppercase hover:text-indigo-600 transition px-3 py-1 sm:px-4 sm:py-2 border border-white/20 rounded-3xl"
//     //         >
//     //           {link.icon}

//     //           {link.label}

//     //         </a>
//     //       ))}
//     //     </nav>

//     //   </div>
//     // </header>

    <header className="bg-black lg:bg-transparent backdrop-blur-md w-full fixed top-0 border  z-100 ">
      <div className="flex justify-between items-center lg:mx-25 px-5 py-2 ">
        <div className="logo text-amber-50 text-4xl">HR</div>

        {/* desktop nav */}
        <nav className="hidden lg:flex justify-center gap-2 sm:gap-4 bg-[#0D0D0D] px-2 py-2 rounded-3xl">
          <a
            href="#home"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs  font-bold text-white/80 uppercase  px-3 py-1 sm:px-4 sm:py-2 border border-white/30 rounded-3xl transition  duration-300 ease-in-out hover:scale-105 hover:text-white hover:border-white/80 hover:border-[.2px] "
          >
            <House size={"15px"} className="nav-item-icon" /> Home
          </a>
          <a
            href="#about"
           
            // rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs  font-bold text-white/80 uppercase px-3 py-1 sm:px-4 sm:py-2 border border-white/30 rounded-3xl transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:border-white/80 hover:border-[.2px]"
          >
            {" "}
            <SquarePen size={"15px"} className="nav-item-icon" />
            About
          </a>
          <a
            href="#work"
            rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs  font-bold text-white/80 uppercase px-3 py-1 sm:px-4 sm:py-2 border border-white/30 rounded-3xl transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:border-white/80 hover:border-[.2px]"
          >
            <BriefcaseBusiness size={"15px"} className="nav-item-icon" /> Work
          </a>
          <a
            href="#experience"
            rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs  font-bold text-white/80 uppercase px-3 py-1 sm:px-4 sm:py-2 border border-white/30 rounded-3xl transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:border-white/80 hover:border-[.2px]"
          >
            <ChartArea size={"15px"} className="nav-item-icon" /> Experience
          </a>
        </nav>

        {/* mobile nav */}
        <nav className="lg:hidden text-white sm:bg-transparent backdrop-blur-md">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {
              menuOpen? <X/>:<Menu />

            }
            
          </button>
        </nav>

        <div className="hidden lg:flex other text-white gap-5">
          <Search />
          <button className=" " onClick={() => setIsdark(!isDark)}>
            {isDark ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black ">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs font-bold mt-2 mb-10 justify-center items-center max-w-sm m-auto text-white uppercase hover:text-indigo-600 transition px-3 py-1 sm:px-4 sm:py-2 border border-white/20 rounded-3xl"
          >
            <House size={"20px"} className="nav-item-icon" /> Home
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs font-bold mt-2 mb-10 justify-center align-middle items-center max-w-sm m-auto  text-white uppercase hover:text-indigo-600 transition px-3 py-1 sm:px-4 sm:py-2 border border-white/20 rounded-3xl"
          >
            {" "}
            <SquarePen size={"20px"} className="nav-item-icon" />
            About
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs font-bold mt-2 mb-10 justify-center items-center max-w-sm m-auto  text-white uppercase hover:text-indigo-600 transition px-3 py-1 sm:px-4 sm:py-2 border border-white/20 rounded-3xl"
          >
            <BriefcaseBusiness size={"20px"} className="nav-item-icon" /> Work
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item-text flex gap-2 text-xs font-bold mt-2 mb-10 justify-center items-center max-w-sm m-auto  text-white uppercase hover:text-indigo-600 transition px-3 py-1 sm:px-4 sm:py-2 border border-white/20 rounded-3xl"
          >
            <ChartArea size={"20px"} className="nav-item-icon" /> Experience
          </a>
        </div>
      )}
      
    </header>
  );
};

export default Header;

