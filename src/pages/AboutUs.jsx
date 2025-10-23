import React, { useContext } from "react";
import {
  FaShoePrints,
  FaLightbulb,
  FaShieldAlt,
  FaBolt,
  FaHeadphonesAlt,
} from "react-icons/fa";
import ThemeContext from "../context/ThemeProvider";
import VideoAboutShoe from "../miniPage/VideoAboutShose";
const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        id="about"
        className={`relative  w-screen min-h-screen overflow-hidden ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black "
            : "bg-gray-300 text-gray-900"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80"
          alt="Nike Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-gray-900/90"></div>

        <section className="relative z-10  mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1
              className={`text-5xl font-extrabold ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  : "text-black-600"
              }`}
            >
              About Us
            </h1>
            <div
              className={`w-24 h-1 mx-auto my-5 rounded-full ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : "bg-blue-400"
              }`}
            ></div>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } max-w-2xl mx-auto`}
            >
              At
              <span
                className={`${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                } font-semibold`}
              >
                Nike Shoes Co.
              </span>
              , we deliver authentic, stylish, and comfortable sneakers that
              empower athletes and enthusiasts worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {[
              {
                icon: (
                  <FaShoePrints
                    size={36}
                    className={
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }
                  />
                ),
                title: "Our Journey",
                desc: "From humble beginnings to a global icon, we’ve built trust with millions of sneaker lovers around the world.",
                img: "https://images.asos-media.com/products/nike-running-journey-run-trainers-in-white-and-light-green/206103752-1-white?$n_640w$&wid=513&fit=constrain",
              },
              {
                icon: (
                  <FaLightbulb
                    size={36}
                    className={
                      theme === "dark" ? "text-yellow-400" : "text-yellow-500"
                    }
                  />
                ),
                title: "Innovation & Style",
                desc: "Each pair of Nike shoes blends cutting-edge technology with fashion, ensuring every step is a statement.",
                img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border ${
                  theme === "dark"
                    ? "bg-white/10 border-white/10"
                    : "bg-white/50 border-gray-200/30"
                } hover:scale-105 transition-all duration-500`}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="rounded-xl w-full h-56 object-cover mb-6"
                />
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3
                    className={`${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    } text-2xl font-bold`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`rounded-2xl p-10 mb-20 border ${
              theme === "dark"
                ? "bg-white/10 border-white/10"
                : "bg-white/50 border-gray-200/30"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Years of Experience", value: "10+" },
                { label: "Happy Customers", value: "100k+" },
                { label: "Product Authenticity", value: "99.9%" },
                { label: "Support", value: "24/7" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className={`${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    } text-4xl font-extrabold`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-2xl p-10 border ${
              theme === "dark"
                ? "bg-white/10 border-white/10"
                : "bg-white/50 border-gray-200/30"
            }`}
          >
            <h3
              className={`text-3xl font-bold text-center mb-10 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : "text-blue-600"
              }`}
            >
              Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <FaShieldAlt
                      size={32}
                      className={`${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      } mx-auto`}
                    />
                  ),
                  title: "Authenticity",
                  desc: "We guarantee all Nike products are 100% genuine and certified.",
                },
                {
                  icon: (
                    <FaBolt
                      size={32}
                      className={`${
                        theme === "dark" ? "text-yellow-400" : "text-yellow-500"
                      } mx-auto`}
                    />
                  ),
                  title: "Performance",
                  desc: "Every shoe is optimized for ultimate comfort and durability.",
                },
                {
                  icon: (
                    <FaHeadphonesAlt
                      size={32}
                      className={`${
                        theme === "dark" ? "text-green-400" : "text-green-600"
                      } mx-auto`}
                    />
                  ),
                  title: "Support",
                  desc: "Our dedicated team is ready to assist you 24/7 with your orders.",
                },
              ].map((val, i) => (
                <div
                  key={i}
                  className={`text-center p-6 rounded-xl hover:scale-105 transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-black/20 hover:bg-white/10"
                      : "bg-white/30 hover:bg-gray-200/30"
                  }`}
                >
                  <div className="mb-4">{val.icon}</div>
                  <h4
                    className={`${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    } text-xl font-semibold mb-2`}
                  >
                    {val.title}
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-800"
                    } text-sm`}
                  >
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <VideoAboutShoe />
    </div>
  );
};

export default AboutUs;
