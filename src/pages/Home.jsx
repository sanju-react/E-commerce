import React, { useState } from "react";
import cover from "../assets/cover.png";

// Mock data for features
const features = [
  {
    title: "Free Shipping",
    description: "Free shipping on all orders over $50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    description: "30-day hassle-free returns",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    description: "All cards accepted",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  },
];

// Products
const products = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    price: 24.99,
    image: cover,
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    price: 49.99,
    image: cover,
  },
  {
    id: 3,
    title: "Casual Sneakers",
    price: 59.99,
    image: cover,
  },
  {
    id: 4,
    title: "Winter Jacket",
    price: 99.99,
    image: cover,
  },
];

const browseProducts = [...products].reverse();

const Home = () => {
  const [tab, setTab] = useState("Featured");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const ProductCard = ({ product }) => (
    <div className="relative bg-[#F6F6F6] hover:shadow-md transition-all rounded-lg p-4">
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={favorites.includes(product.id) ? "red" : "none"}
          stroke={favorites.includes(product.id) ? "red" : "gray"}
          className="w-5 h-5 cursor-pointer transition-colors duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.995 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
    4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
    14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
    6.86-8.54 11.54l-1.45 1.31z"
          />
        </svg>
      </button>

      <div className="flex flex-col h-full">
        <div className="flex-grow flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[200px] object-contain"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-sm truncate">{product.title}</h3>
          <p className="text-sm font-semibold mt-1">
            ${product.price.toFixed(2)}
          </p>
          <button className="w-full py-2 mt-3 bg-black text-white text-xs font-medium rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-gray-900">
      <section className="w-full bg-[#F6F6F6] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Fresh Arrivals Online
            </h1>
            <p className="text-gray-600 text-lg">
              Discover Our Newest Collection Today.
            </p>
            <button className="inline-flex items-center px-7 py-3 bg-black text-white text-base font-semibold rounded hover:bg-gray-900">
              View Collection
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center md:justify-end w-full">
            <img
              src={products[0].image}
              alt="Model with fashion"
              className="rounded-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 md:py-10">
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center space-y-4 px-4"
            >
              <div className="bg-white p-4 rounded-full shadow-md flex items-center justify-center w-16 h-16">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-semibold mb-8">
            Best Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-20 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div className="max-w-md text-center md:text-left space-y-4">
              <h3 className="text-xl font-semibold">
                Browse Our Fashion Paradise!
              </h3>
              <p className="text-gray-600 text-sm">
                Step into a world of style and explore our diverse collection.
              </p>
              <button className="px-5 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800">
                Start Browsing →
              </button>
            </div>
            <div className="w-full md:w-auto">
              <img
                src={products[2].image}
                alt="Fashion product"
                className="rounded-lg max-w-[200px] mx-auto"
              />
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex justify-center mb-8 space-x-4 font-medium">
            <button
              onClick={() => setTab("Featured")}
              className={`px-4 py-2 border-b-2 ${
                tab === "Featured"
                  ? "border-black text-black"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setTab("Latest")}
              className={`px-4 py-2 border-b-2 ${
                tab === "Latest"
                  ? "border-black text-black"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Latest
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(tab === "Featured" ? browseProducts : products).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
