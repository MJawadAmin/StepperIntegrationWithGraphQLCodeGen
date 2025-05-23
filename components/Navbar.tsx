"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ScrollSpy from 'react-scrollspy-navigation';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-10 fixed h-[100px] px-14 flex items-center bg-white" style={{ boxShadow: "#e3e3e3 0px 0px 20px" }}>
      <div className="lg:w-[88%] w-[95%] mx-auto flex justify-between items-center px-6 lg:px-10">
        {/* Logo */}
        <div className="md:w-[70px] w-[50px] h-[50px] md:h-[70px] pl-2">
          <Image 
            src="/neeca-logo.webp" 
            alt="Neeca Logo" 
            width={62} 
            height={62} 
            priority 
          />
        </div>

        {/* Desktop Menu */}
        <ScrollSpy activeClass="nav-active" offsetTop={100}>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-400 font-medium hover:text-primary transition">Home</a>
            <a href="#about" className="text-gray-400 font-medium hover:text-primary transition">About</a>
            <a href="#tips" className="text-gray-400 font-medium hover:text-primary transition">Tips</a>
            <Link href="/public/news" className="text-gray-400 font-medium hover:text-primary transition">News</Link>
            <Link href="/public/products-info" className="text-gray-400 font-medium hover:text-primary transition">Products</Link>

            {/* Register Button */}
            <Link 
              href="/auth/sign-up"
              className="bg-[#F9662E] text-white font-semibold rounded-md py-2 mr-12 px-4 lg:py-[6px] lg:px-[12px] transition hover:-translate-y-1 hover:shadow-md flex items-center gap-2"
            >
              Register a company
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>

            <Link href="/auth/sign-in" className="pr-2 text-gray-400 font-medium hover:text-primary transition hover:text-[#F9662E] hover:ease-in-out duration-500">
              Sign in
            </Link>
          </div>
        </ScrollSpy>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden cursor-pointer flex items-center justify-between flex-row-reverse gap-7" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          <Link href="/auth/sign-in" className="text-gray-400 font-medium hover:text-primary transition">
            Sign in
          </Link>
          <Link 
            href="/auth/sign-up"
            className="bg-[#F9662E] text-white font-semibold rounded-lg py-2 px-4 lg:py-[6px] lg:px-[12px] transition hover:-translate-y-1 hover:shadow-md flex items-center gap-2"
          >
            Register a company
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ScrollSpy activeClass="nav-active" offsetTop={100}>
          <div className="lg:hidden absolute top-[100px] left-0 w-full bg-white shadow-md">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#home" className="text-gray-400 font-medium hover:text-primary transition">Home</a>
              <a href="#about" className="text-gray-400 font-medium hover:text-primary transition">About</a>
              <a href="#tips" className="text-gray-400 font-medium hover:text-primary transition">Tips</a>
              <Link href="/public/news" className="text-gray-400 font-medium hover:text-primary transition">News</Link>
              <Link href="/public/products-info" className="text-gray-400 font-medium hover:text-primary transition">Products</Link>
            </div>
          </div>
        </ScrollSpy>
      )}
    </nav>
  );
};

export default Navbar;