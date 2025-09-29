import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <a href="#hero" className="text-xl font-bold tracking-wide">
          Favoured Mwange
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#resume" className="hover:text-gray-400">Resume</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          <a href="#hero" className="block hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block hover:text-gray-400" onClick={toggleMenu}>Projects</a>
          <a href="#resume" className="block hover:text-gray-400" onClick={toggleMenu}>Resume</a>
          <a href="#contact" className="block hover:text-gray-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
