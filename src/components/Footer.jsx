// components/Footer.jsx
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Headerlogo from "../assets/Header.png";

export default function Footer() {
  return (
    <>
      <footer className="">
        {/* Newsletter */}
        <div className="bg-[#F6F6F6] py-20 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0">
              {/* Left side - Heading and paragraph */}
              <div>
                <h2 className="text-xl font-semibold">Join Our Newsletter</h2>
                <p className="text-gray-500">
                  We love to surprise our subscribers with occasional gifts.
                </p>
              </div>

              {/* Right side - Form */}
              <form className="flex w-full max-w-md md:w-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-8 py-1 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-gray-600">
            {/* Logo & Social */}
            <div>
              <Link to="/" className="inline-block mb-3">
                <img
                  src={Headerlogo}
                  alt="logo"
                  className="h-8 md:h-10 w-auto max-w-[180px]"
                />
              </Link>
              <p className="text-gray-500">
                DevCut is a YouTube channel for practical project-based
                learning.
              </p>
              <div className="flex space-x-4 mt-4 text-gray-600 text-xl">
                <FaGithub className="hover:text-black cursor-pointer" />
                <FaInstagram className="hover:text-black cursor-pointer" />
                <FaYoutube className="hover:text-black cursor-pointer" />
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-black mb-3">SUPPORT</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-black mb-3">COMPANY</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-semibold text-black mb-3">SHOP</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Checkout
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cart
                  </a>
                </li>
              </ul>
            </div>

            {/* Payment */}
            <div>
              <h4 className="font-semibold text-black mb-3">
                ACCEPTED PAYMENTS
              </h4>
              <div className="flex items-center space-x-4 text-2xl text-gray-700">
                <FaCcMastercard />
                <SiAmericanexpress />
                <FaCcVisa />
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="pt-10">
            <p className="text-center text-gray-500 text-xs">
              © 2023 DevCut. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
