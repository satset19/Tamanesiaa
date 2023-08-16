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
    transition: "top 0.6s",
  };

  return (
    <div style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
          alt="Flowbite React Logo"
          className="h-6 mr-3 sm:h-9"
          src="/favicon.svg"
        /> */}
          <div className="flex md:order-2">
            {/* <Button>Get started</Button> */}
            <Navbar.Toggle />
          </div>
          <span className="self-center px-10 text-xl font-semibold whitespace-nowrap dark:text-white">
            Tamanesia
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
