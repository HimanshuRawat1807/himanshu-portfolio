import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const HeaderTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0D0D0D]/90 backdrop-blur-md text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:px-12 lg:px-16">





        
        {/* Logo */}
        {/* <a href="#home" className="text-sm md:text-2xl font-bold text-indigo-500">
          Himanshu Rawat
        </a> */}

        {/* Desktop nav */}
        {/* <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm  font-semibold hover:text-indigo-400 transition"
            >
              {link.label}
            </a>
          ))}
        </nav> */}

        {/* Mobile Hamburger */}
        {/* <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-[#0D0D0D] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold hover:text-indigo-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )} */}
    </header>
  );
};

export default HeaderTest;
