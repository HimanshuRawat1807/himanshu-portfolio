import React, { useState } from "react";
import { Menu, X, House, SquarePen, BriefcaseBusiness,ChartArea } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon :<House size={"20px"} className="nav-item-icon" /> },
  { label: "About", href: "#about", icon: <SquarePen size={"20px"} className="nav-item-icon"  />   },
  { label: "Works", href: "#works", icon: <BriefcaseBusiness size={"20px"} className="nav-item-icon"   />  },
  { label: "Experience", href: "#experience", icon: <ChartArea size={"20px"} className="nav-item-icon"   />  },
  // { label: "Contact", href: "#contact", icon:  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const [active , setActive] =  setActive("");

  return (
    // <header className="w-full g-white/10 backdrop-blur-md text-white shadow-md fixed top-0 left-0 z-50">
    //   <div className="max-w-6xl mx-auto flex items-center justify-center px-6 py-3 md:px-12 lg:px-24">
       

    //     {/* Desktop nav */}
    //     <nav className="sm:flex md:flex space-x-6 bg-[#0D0D0D] px-5 py-3 rounded-4xl">
    //       {navLinks.map((link) => (
            
            
    //         <a
    //           key={link.href}
    //           href={link.href}
    //           // onClick={() => setActive(link.label)}
    //           className="flex gap-2 text-sm font-bold text-white uppercase hover:text-indigo-600 transition px-5 py-2 border border-white/20 rounded-4xl ${active === item ? ' border border-indigo/20' : 'hover:bg-gray-700'}`} "
    //         >
    //           {link.icon}
    //           {link.label}
    //         </a>
    //       ))}
    //     </nav>

    //     {/* Mobile menu button */}
    //     {/* <button
    //       className="text-gray-700 md:hidden"
    //       onClick={() => setMenuOpen((prev) => !prev)}
    //       aria-label="Toggle menu"
    //     >
    //       {menuOpen ? <X size={24} /> : <Menu size={24} />}
    //     </button> */}
    //   </div>

    //   {/* Mobile nav */}
    //   {/* {menuOpen && (
    //     <nav className="md:hidden bg-white shadow-inner">
    //       <ul className="flex flex-col space-y-4 px-6 py-4">
    //         {navLinks.map((link) => (
    //           <li key={link.href}>
    //             <a
    //               href={link.href}
    //               className="block text-gray-700 hover:text-indigo-600 transition"
    //               onClick={() => setMenuOpen(false)}
    //             >
    //               {link.label}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   )} */}
    // </header>

    <header className="w-full bg-white/10 backdrop-blur-md text-white shadow-md fixed top-0 left-0 z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-center px-3 py-2 sm:px-6 md:px-8 lg:px-12">
    
    {/* Navigation */}
    <nav className="flex  justify-center gap-2 sm:gap-4 bg-[#0D0D0D] px-2 py-2 rounded-3xl">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="nav-item-text flex gap-2 text-xs sm:text-sm md:text-base font-bold text-white uppercase hover:text-indigo-600 transition px-3 py-1 sm:px-4 sm:py-2 border border-white/20 rounded-3xl"
        >
          {link.icon}
        
          {link.label}
          
            
        </a>
      ))}
    </nav>

  </div>
</header>

  );
};

export default Header;
