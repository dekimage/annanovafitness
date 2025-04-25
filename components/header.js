"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/logo.png"
              alt="Anna Nova Fitness Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-kanit font-semibold text-xl text-deep-purple-gray">
            Anna Nova Fitness
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#home"
            className="text-deep-purple-gray hover:text-bold-pink transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-deep-purple-gray hover:text-bold-pink transition-colors"
          >
            About
          </Link>
          <Link
            href="#packages"
            className="text-deep-purple-gray hover:text-bold-pink transition-colors"
          >
            Packages
          </Link>
          <Link
            href="#testimonials"
            className="text-deep-purple-gray hover:text-bold-pink transition-colors"
          >
            Success Stories
          </Link>
          <Link
            href="#contact"
            className="text-deep-purple-gray hover:text-bold-pink transition-colors"
          >
            Contact
          </Link>
          <Link href="#contact" className="btn-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-deep-purple-gray"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-deep-purple-gray hover:text-bold-pink transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-deep-purple-gray hover:text-bold-pink transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#packages"
              className="text-deep-purple-gray hover:text-bold-pink transition-colors py-2"
              onClick={toggleMenu}
            >
              Packages
            </Link>
            <Link
              href="#testimonials"
              className="text-deep-purple-gray hover:text-bold-pink transition-colors py-2"
              onClick={toggleMenu}
            >
              Success Stories
            </Link>
            <Link
              href="#contact"
              className="text-deep-purple-gray hover:text-bold-pink transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="btn-primary inline-block text-center"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
