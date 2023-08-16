"use client";

import { Button, Navbar } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
          alt="Flowbite React Logo"
          className="h-6 mr-3 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Tamanesia
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle />
      </div>
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
  );
}
