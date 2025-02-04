"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, type JSX } from "react";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const NavigateToJoin = () => {
    router.push("/join");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Challenge & Hackathons", href: "/challenges" },
    { name: "For Educational Institutions", href: "/institutions" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="flex py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50 bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo */}
        <Link href="/" className="max-sm:hidden">
          <div className="w-36 ml-20">
            <Image src="/images/logo.png" alt="logo" width={144} height={144} />
          </div>
        </Link>

        <Link href="/" className="hidden max-sm:block">
          <div className="w-9 ml-32">
            <Image src="/images/logo.png" alt="logo" width={36} height={36} />
          </div>
        </Link>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out duration-300 z-50`}
        >
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={toggleMenu}
          >
            {/* Close Icon */}
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col mt-10 space-y-4 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 text-lg font-semibold block"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dark Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-[#007bff] text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 text-sm rounded-md font-bold text-white border-2 border-[#041738] bg-[#041738] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
            onClick={NavigateToJoin}
          >
            Join the Program
          </button>

          {/* Hamburger Menu Button */}
          <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-7 h-7 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
