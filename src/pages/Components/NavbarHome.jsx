import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";
import { Button, Navbar } from "flowbite-react";

const NavbarHome = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    transition: "top 0.3s",
  };

  return (
    <header
      class="bg-white top-0 w-full shadow-md py-3"
      style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
    >
      <nav class="container mx-auto px-6 py-3">
        <div class="md:hidden flex items-center">
          <button
            class="text-gray-800 focus:outline-none mt-3 left-5"
            style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex justify-center items-center">
          <a
            href="#"
            class="text-2xl font-bold text-gray-800 top-2 mt-2 left-14"
            style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
          >
            Tamanesia
          </a>
          <div
            class="hidden md:flex items-center space-x-4 mt-3"
            style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
          >
            <a href="#" class="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#" class="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="#" class="text-gray-800 hover:text-blue-600">
              Services
            </a>
            <a href="#" class="text-gray-800 hover:text-blue-600">
              Contact
            </a>
            {/* <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHome;
