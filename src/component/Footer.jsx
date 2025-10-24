import React, { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <footer
      className={`w-full relative backdrop-blur-lg bg-white/10  border shadow-lg   border-white/20 ${
        isDark ? " text-gray-300" : " text-gray-800"
      }`}
    >
      <div className="max-w-screen-xl mx-auto p-6 md:p-12">
        <div className="md:flex md:justify-between md:items-start">
          <div className="mb-6 md:mb-0 flex items-center gap-3">
            <img
              src="https://media.tenor.com/smjHE1Sh9qcAAAAj/nike.gif"
              alt="ShoeStore Logo"
              className="h-10 w-10 rounded-full shadow-lg"
            />
            <span
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              ShoeStore
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Our Pages */}
            <div>
              <h2
                className={`mb-4 text-sm font-bold uppercase ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Pages
              </h2>
              <ul className="space-y-2 font-semibold">
                <li>
                  <a
                    href="#home"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Shoes"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    Shoes
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2
                className={`mb-4 text-sm font-bold uppercase ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Us
              </h2>
              <ul className="space-y-2 font-semibold">
                  <li>
                    <a
                      href="https://www.facebook.com/mrr.claude"  
                      target="_blank"
                      className={`transition hover:scale-105 ${
                        isDark
                          ? "text-gray-400 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-500"
                      }`}
                    >
                      Facebook
                    </a>
                  </li>
                <li>
                  <a
                    href="#"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2
                className={`mb-4 text-sm font-bold uppercase ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Legal
              </h2>
              <ul className="space-y-2 font-semibold">
                <li>
                  <a
                    href="#"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition hover:scale-105 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr
          className={`my-6 border ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        />

        <div className="sm:flex sm:justify-between sm:items-center">
          <span
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-500"
            } sm:text-center`}
          >
            © 2025 <span className="font-semibold">ShoeStore™</span>. All rights
            reserved.
          </span>

          <div className="flex mt-4 sm:mt-0 gap-4">
            <a
              href="#"
              className={`p-2 rounded-full transition ${
                isDark
                  ? "bg-gray-800 hover:bg-blue-700 text-gray-300"
                  : "bg-gray-100 hover:bg-blue-200 text-gray-700"
              }`}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className={`p-2 rounded-full transition ${
                isDark
                  ? "bg-gray-800 hover:bg-pink-600 text-gray-300"
                  : "bg-gray-100 hover:bg-pink-200 text-gray-700"
              }`}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className={`p-2 rounded-full transition ${
                isDark
                  ? "bg-gray-800 hover:bg-blue-500 text-gray-300"
                  : "bg-gray-100 hover:bg-blue-200 text-gray-700"
              }`}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
