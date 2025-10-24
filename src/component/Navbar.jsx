import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../context/CartContext";
import AddToCartModal from "./AddToCartModal";
import Login from "./Login";

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const { totalItems } = useContext(CartContext);
  const [isLoginOpen,setIsLoginOpen]=useState(false)
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Show/hide navbar on scroll
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setShowNavbar(false);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setShowNavbar(true), 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav
        className={`backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg fixed top-2 left-3 right-3 z-20 rounded-3xl transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <a
            href="/"
            className="flex items-center gap-2 hover:text-blue-300 transition-all"
          >
            <img
              src="https://media.tenor.com/smjHE1Sh9qcAAAAj/nike.gif"
              className="h-8 w-8"
              alt="Shoe Store Logo"
            />
            <span className="text-xl md:text-2xl font-semibold tracking-wide">
              ShoeStore
            </span>
          </a>

          <div className="flex items-center gap-3 md:order-2">
            <button
              className="p-2 rounded-full bg-gray-500 hover:bg-gray-700 transition"
              onClick={toggle}
            >
              {theme === "light" ? (
                <IoSunny className="text-yellow-400 text-lg" />
              ) : (
                <IoMoon className="text-gray-300 text-lg" />
              )}
            </button>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-500 to-emerald-600 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                Login
              </button>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="relative inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-500 to-emerald-600 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <FaShoppingCart className="text-sm group-hover:rotate-12 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold rounded-full px-1.5">
                {totalItems}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-white/20 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium text-sm tracking-wide">
              {["home", "about", "Shoes", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={handleMenuClick}
                    className="block py-2 px-3 rounded-md font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent hover:bg-gradient-to-r hover:text-transparent hover:from-blue-200 hover:to-purple-800 hover:shadow-lg hover:shadow-blue-300/60 transition-all duration-300 ease-in-out"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}

              <div className="flex sm:hidden flex-col gap-2 mt-2">
                <button
                  onClick={handleMenuClick}
                  className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Login
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <AddToCartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Navbar;
