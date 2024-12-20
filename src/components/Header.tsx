"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../app/HamburgerMenu.css";
import { HamburgerMenu } from "./HamburgerMenu";
import styles from "../app/Hero.module.css";
import { smoothScrollToElement } from "../utils/scroll";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      title: "Home",
      isExternal: false,
    },
    {
      href: "/about-us",
      title: "About Us",
      isExternal: false,
    },
    {
      href: "/perspectives",
      title: "Perspectives",
      isExternal: false,
    },
    {
      href: "/lp-access",
      title: "LP Access",
      isExternal: false,
    },
    {
      href: "/contact-us",
      title: "Contact Us",
      isExternal: false,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Hide mobile menu when a link is clicked
    const links = document.querySelectorAll(".mobile-menu a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        setIsOpen(false);
      });
    });
  }, []);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        mobileMenuRef.current &&
        !event.target.matches(".hamburger-menu") &&
        !event.target.matches(".mobile-menu a") &&
        !event.target.matches(".mobile-menu") &&
        !event.target.matches(".hamburger-menu-open")
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Main header content */}
      <header className="flex justify-between items-center px-8 py-4 text-[#203c4d] w-full fixed z-20 bg-[#97b2bd] border-b-0">
        <div className="xl:hidden">
          <Link href="/">
            <Image src="/logo.png" width={64} height={64} alt="Logo" />
          </Link>
        </div>
        <div className="hidden xl:block xl:mr-8">
          <Link href="/">
            <Image src="/logo-text.png" width={256} height={120} alt="Logo" />
          </Link>
        </div>
        <div className="flex flex-grow justify-end">
          <nav className="flex space-x-4 xl:space-x-8 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:underline hover:underline-offset-4 transition-all duration-150 hidden xl:block"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToElement(item.href, item.isExternal);
                }}
              >
                {item.title}
              </a>
            ))}
            <div ref={mobileMenuRef}>
              <HamburgerMenu
                navItems={navItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
