import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-12">
      <Image src={"/images/logo.png"} alt={"logo"} height={61} width={161} />
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Services</li>
      </ul>
      <Menu />
    </nav>
  );
}
