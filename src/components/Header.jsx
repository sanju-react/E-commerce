import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Headerlogo from "../assets/Header.png";
import { Search, ShoppingCart, User2, Menu, X } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const mobileMenuRef = useRef();
  const headerRef = useRef();

  // Close dropdown/menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Calculate header height for mobile menu positioning
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className="bg-white shadow-sm sticky top-0 z-50 w-full"
      ref={headerRef}
      style={{ "--header-height": `${headerHeight}px` }}
    >
      {/* Top Offer Bar */}
      <div className="bg-[#0E1422] text-white text-center py-2 px-4 text-xs sm:text-sm w-full">
        <p>
          Get 10% off your first order.{" "}
          <span className="font-semibold cursor-pointer">Order Now</span>
        </p>
      </div>

      {/* Main header */}
     <div className="max-w-6xl mx-auto px-4 sm:px-5 w-full box-border py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="md:hidden mr-4 text-gray-600 p-2 rounded-md hover:bg-gray-100 flex items-center"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="inline-block">
              <img
                src={Headerlogo}
                alt="logo"
                className="h-8 md:h-10 w-auto max-w-[150px] md:max-w-[180px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center mx-4 lg:mx-8">
            <ul className="flex text-[#5C5F6A] space-x-4 lg:space-x-6 font-medium items-center">
              <li>
                <Link
                  to="/"
                  className="px-2 py-1 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="px-2 py-1 hover:text-gray-900 flex items-center transition-colors"
                >
                  Categories
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                    <Link
                      to="/category/electronics"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Electronics
                    </Link>
                    <Link
                      to="/category/clothing"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Clothing
                    </Link>
                    <Link
                      to="/category/home-garden"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Home & Garden
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/about"
                  className="px-2 py-1 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-2 py-1 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search bar - hidden on mobile */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search Products..."
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-40 lg:w-64"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </button>
            </div>

            {/* Cart and user icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link
                to="/cart"
                className="text-gray-600 hover:text-gray-900 transition-colors p-1 flex items-center"
              >
                <ShoppingCart size={20} />
              </Link>
              <Link
                to="/account"
                className="text-gray-600 hover:text-gray-900 transition-colors p-1 flex items-center"
              >
                <User2 size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile search bar - always visible */}
        <div className="mt-3 md:hidden relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed alignment issues */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg fixed left-0 right-0 z-50"
          style={{ top: "var(--header-height)" }}
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="py-3 px-3 hover:bg-gray-50 rounded flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left py-3 px-3 hover:bg-gray-50 rounded flex justify-between items-center"
                >
                  <span>Categories</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      to="/category/electronics"
                      className="block py-2 px-3 hover:bg-gray-50 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Electronics
                    </Link>
                    <Link
                      to="/category/clothing"
                      className="block py-2 px-3 hover:bg-gray-50 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Clothing
                    </Link>
                    <Link
                      to="/category/home-garden"
                      className="block py-2 px-3 hover:bg-gray-50 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home & Garden
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="py-3 px-3 hover:bg-gray-50 rounded flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="py-3 px-3 hover:bg-gray-50 rounded flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;