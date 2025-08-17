// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "@/assets/images/flux-logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // Array of links with paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Faculty", path: "/faculty" },
    { name: "Our Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "contact", path: "/contact" },
  ];

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-black/70 text-white shadow-md font-poppins transition-all duration-500 ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 rounded-full hover:scale-105 transition-transform duration-300"
          />
          <span className="text-2xl font-bold tracking-wide logo-text">Flux</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wider uppercase">
          {navLinks.map((link, i) => (
            <li key={i} className="cursor-pointer relative group nav-link">
              <Link to={link.path}>
                {link.name}
                {link.name === "contact" }
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Icons & Button */}
        <div className="hidden md:flex items-center gap-5">
          <FaFacebook className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300" />
          <FaLinkedin className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300" />
          <FaInstagram className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300" />
          <button className="bg-green-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-green-500 hover:scale-105 transition-all duration-300">
            Go to App →
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="block text-white font-medium uppercase tracking-wider hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <FaFacebook className="cursor-pointer hover:text-green-400" />
            <FaLinkedin className="cursor-pointer hover:text-green-400" />
            <FaInstagram className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
