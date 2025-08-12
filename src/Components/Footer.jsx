import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 px-6 py-8 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Logo / Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Himanshu Rawat</h3>
          <p className="text-sm text-gray-400">Crafting web experiences that deliver impact.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium text-white mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h4 className="text-lg font-medium text-white mb-2">Connect</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
          <ul className="text-sm space-y-1">
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Himanshu Rawat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
