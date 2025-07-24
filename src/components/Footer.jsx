import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import Headerlogo from "../assets/Header.png";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden">
      {/* Newsletter */}
      <div className="bg-[#F6F6F6] py-12 md:py-20 w-full">
       <div className="max-w-6xl mx-auto px-4 sm:px-5 w-full box-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0 w-full">
            {/* Left side - Heading and paragraph */}
            <div className="w-full md:w-auto">
              <h2 className="text-lg sm:text-xl font-semibold">
                Join Our Newsletter
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                We love to surprise our subscribers with occasional gifts.
              </p>
            </div>

            {/* Right side - Form */}
            <form className="flex w-full max-w-md md:w-[400px]">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 sm:px-6 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-8 md:py-12 w-full box-border">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 text-sm text-gray-600 w-full">
          {/* Logo & Social */}
          <div className="w-full">
            <Link to="/" className="inline-block mb-3">
              <img
                src={Headerlogo}
                alt="logo"
                className="h-8 md:h-10 w-auto max-w-[160px]"
              />
            </Link>
            <p className="text-gray-500 text-xs sm:text-sm">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4 text-gray-600 text-lg sm:text-xl">
              <FaGithub className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaYoutube className="hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Support */}
          <div className="w-full">
            <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">
              SUPPORT
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-full">
            <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">
              COMPANY
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div className="w-full">
            <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">
              SHOP
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-xs sm:text-sm">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div className="w-full">
            <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">
              ACCEPTED PAYMENTS
            </h4>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xl sm:text-2xl text-gray-700">
              <FaCcMastercard />
              <SiAmericanexpress />
              <FaCcVisa />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="pt-6 sm:pt-10 w-full">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} DevCut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
