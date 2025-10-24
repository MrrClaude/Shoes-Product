import React, { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="contact"
      className={`relative min-h-screen w-screen overflow-hidden py-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gray-200 text-gray-900"
      }`}
    >
      <img
        src="https://media.voguebusiness.com/photos/62cf0a1d32660068c1ddf2d3/master/w_1600%2Cc_limit/Nike%2520-%2520West%2520London%2520-%2520%2520KEY%2520SELECTS%2520-%2520JORDAN.jpg"
        alt="Nike Contact Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-gray-900/90"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-extrabold ${
              theme === "dark"
                ? "bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                : "text-blue-700"
            }`}
          >
            Contact Nike
          </h2>
          <div
            className={`w-24 h-1 mx-auto my-5 rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-500 to-purple-600"
                : "bg-blue-500"
            }`}
          ></div>
          <p
            className={`max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            We’re here to help you find your perfect fit. Reach out for support,
            feedback, or collaboration — the Nike team is ready to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              {
                title: "Nike Headquarters",
                desc: ["One Bowerman Dr", "Beaverton, OR 97005, USA"],
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                ),
              },
              {
                title: "Contact Support",
                desc: ["Phone:+885 19 999 666", "Email: support@nike.com"],
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                ),
              },
              {
                title: "Business Hours",
                desc: ["Mon - Fri: 9 AM - 6 PM", "Sat - Sun: Closed"],
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
                  theme === "dark"
                    ? "bg-white/10 border-white/10 hover:bg-white/20"
                    : " border-gray-300 hover:bg-gray-200/70"
                } backdrop-blur-lg shadow-lg`}
              >
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-full ${
                    theme === "dark"
                      ? "bg-blue-600/50 text-blue-300"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.desc.map((line, i) => (
                    <p
                      key={i}
                      className={`${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:shadow-xl ${
              theme === "dark"
                ? "bg-white/10 border-white/10 hover:bg-white/20"
                : " border-gray-300 hover:bg-gray-200/80"
            }`}
          >
            <h3
              className={`text-3xl font-bold mb-6 text-center ${
                theme === "dark"
                  ? "bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : "text-blue-700"
              }`}
            >
              Get in Touch
            </h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full py-3 px-4 rounded-lg border bg-transparent ${
                    theme === "dark"
                      ? "border-white/30 text-white placeholder-gray-400"
                      : "border-gray-400 text-gray-900 placeholder-gray-500"
                  } focus:outline-none focus:border-blue-400 transition`}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full py-3 px-4 rounded-lg border bg-transparent ${
                    theme === "dark"
                      ? "border-white/30 text-white placeholder-gray-400"
                      : "border-gray-400 text-gray-900 placeholder-gray-500"
                  } focus:outline-none focus:border-blue-400 transition`}
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className={`w-full py-3 px-4 rounded-lg border bg-transparent ${
                    theme === "dark"
                      ? "border-white/30 text-white placeholder-gray-400"
                      : "border-gray-400 text-gray-900 placeholder-gray-500"
                  } focus:outline-none focus:border-blue-400 transition`}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold shadow-lg transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
