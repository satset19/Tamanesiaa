import React, { useState, useEffect } from "react";
import { useScroll } from "../../utilities/helpers";
import { useStore } from "../../model";
// import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/TamanesiaZine.png";
// import BarAction from "./BarAction";

const NavbarHome = () => {
  const { scrollY, x, scrollDirection } = useScroll();
  const { bar, setBar } = useStore((state) => {
    return state;
  });

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "visible",
      transition: "all 0.5s",
      // transform: "translateY(-50%)",
    },
  };

  const handleHamburgerButton = () => {
    if (bar === false) setBar(true);
    else setBar(false);
    console.log(bar);
  };
  const setStyle = () => {
    return scrollDirection === "down" ? styles.hidden : styles.active;
  };

  useEffect(() => {
    setStyle();
  }, [scrollY]);

  return (
    <header
      className="bg-baseTheme text-white top-0 w-full font-bold font-Calistoga shadow-md py-4"
      style={setStyle()}>
      <nav className=" mx-auto px-6">
        {scrollDirection === "down" ? (
          <>
            <button
              onClick={handleHamburgerButton}
              className=" focus:outline-none absolute left-5 top-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className=" flex justify-center ">
              <a href="#" className="text-2xl left-0">
                Tamanesia
              </a>
            </div>
          </>
        ) : (
          <>
            <button className="md:hidden focus:outline-none absolute left-5 top-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className="md:hidden flex justify-center">
              <a href="#" className="text-2xl font-bold  left-0">
                Tamanesia
              </a>
            </div>
            <div className="flex gap-10 max-md:hidden">
              <a href="#" className="text-2xl font-bold left-10 top-2">
                <img src={logo} className="h-8"></img>
              </a>
              <div className="hidden md:flex items-center space-x-4 ">
                <a href="#" className=" hover:text-blue-600">
                  Home
                </a>
                <a href="#" className=" hover:text-blue-600">
                  About
                </a>
                <a href="#" className=" hover:text-blue-600">
                  Services
                </a>
                <a href="#" className=" hover:text-blue-600">
                  Contact
                </a>
                {/* <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </a> */}
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavbarHome;
