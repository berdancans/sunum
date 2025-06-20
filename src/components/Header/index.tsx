"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const toggleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed bg-white/80 backdrop-blur-xs shadow-sticky dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 px-4 xl:mr-12">
            <Link href="/" className={`block w-full ${sticky ? "py-2" : "py-8"}`}>
              <Image
                src="/images/logo/logo.png"
                alt="AI-First Logo"
                width={140}
                height={30}
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <button
              onClick={toggleNavbar}
              aria-label="Mobile Menu"
              className="absolute top-1/2 right-4 translate-y-[-50%] rounded-lg lg:hidden p-2 focus:ring-2 ring-primary"
            >
              <span
                className={`block h-0.5 w-8 bg-black dark:bg-white transition-transform ${
                  navbarOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-8 bg-black dark:bg-white transition-opacity ${
                  navbarOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-8 bg-black dark:bg-white transition-transform ${
                  navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
            <nav
              className={`absolute right-0 top-full z-30 w-64 rounded border bg-white p-4 transition-all lg:static lg:block lg:w-auto lg:border-none lg:bg-transparent lg:p-0 ${
                navbarOpen ? "visible opa
