"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [activeButton, setActiveButton] = useState("Home");
  const cv = "/files/Adeyemi-Temitope-Adejare-FlowCV-Resume-20250905.pdf";

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const getButtonStyles = (buttonName: string) => {
    if (activeButton === buttonName) {
      // Active button: normal button styling
      return "rounded-full";
    } else {
      // Inactive button: no background, white text
      return "rounded-full bg-transparent text-white hover:bg-white/10 border-none shadow-none";
    }
  };

  return (
    <>
      <div className="w-11/12 p-2 mx-auto bg-black rounded-full">
        <nav>
          <ul className="flex items-center justify-between">
            <div className="flex space-x-10">
              <Link href="#home">
                <Button
                  className={getButtonStyles("Home")}
                  variant={activeButton === "Home" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Home")}
                >
                  Home
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  className={getButtonStyles("About")}
                  variant={activeButton === "About" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("About")}
                >
                  About
                </Button>
              </Link>
              <Link href="#experience">
                <Button
                  className={getButtonStyles("Experience")}
                  variant={activeButton === "Experience" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Experience")}
                >
                  Experience
                </Button>
              </Link>
            </div>

            <span className="font-semibold text-white">AD</span>

            <div className="flex space-x-10">
              <Link href={cv} download={true}>
                <Button
                  className={getButtonStyles("Resume")}
                  variant={activeButton === "Resume" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Resume")}
                >
                  Resume
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  className={getButtonStyles("Projects")}
                  variant={activeButton === "Projects" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Projects")}
                >
                  Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  className={getButtonStyles("Contact")}
                  variant={activeButton === "Contact" ? "default" : "ghost"}
                  onClick={() => handleButtonClick("Contact")}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
