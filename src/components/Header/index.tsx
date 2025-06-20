"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

export default function Header() {
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
      className={`top-0 left-0 z-50 w-full ${
        sticky
          ? "fixed bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-dark"
          : "absolute bg-transparent"
      } transition-all`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="block w-[140px]">
            <Image
              src="/images/logo/logo.png"
              alt="AI-First Logo"
              width={140}
              height={30}
              className="w-full"
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={toggleNavbar}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 focus:outline-none focus:ring-2 ring-primary"
          >
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform ${
                navbarOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 my-1 bg-black dark:bg-white transition-opacity ${
                navbarOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform ${
                navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

          {/* Menü */}
          <nav
            className={`${
              navbarOpen ? "block" : "hidden"
            } absolute top-full right-0 mt-2 w-64 rounded-md bg-white p-4 shadow-lg dark:bg-gray-dark lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none`}
          >
