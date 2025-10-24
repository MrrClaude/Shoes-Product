import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeProvider";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const fullText = "NIKE BRAND";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const current = fullText.substring(
        0,
        displayedText.length + (isDeleting ? -1 : 1)
      );

      setDisplayedText(current);

      if (!isDeleting && current === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && current === "") {
        // Start typing again
        setIsDeleting(false);
        setLoop(loop + 1);
      }

      // Adjust typing/deleting speed
      setSpeed(isDeleting ? 60 : 120);
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting]);

  return (
    <div>
      <div
        id="home"
        className="relative  w-full min-h-screen bg-hero bg-cover bg-center overflow-hidden"
      >
        <div className="absolute inset-0">
          {theme === "dark" ? (
            <img
              src="https://wallpapers.com/images/hd/solid-black-4k-black-platforms-cmhse13n38qpqhnk.jpg "
              className="w-full h-full object-cover bg-black/60"
            />
          ) : (
            <img
              src="https://e0.pxfuel.com/wallpapers/674/1010/desktop-wallpaper-plain-white.jpg"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen max-w-7xl mx-auto px-4 md:px-8 gap-8 md:gap-16">
          <div className="text-center md:text-left space-y-5 max-w-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  leading-tight">
              {displayedText}
              <span className="animate-blink">|</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl ">
              Welcome to{" "}
              <span className="font-semibold text-blue-400">ShoeStore</span> –
              find the best shoes for your style and comfort.
            </p>
            <div className=" flex justify-center gap-3.5  md:justify-start  mt-6 mb-4 ">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                Shop Now
              </button>
              <button className="px-6 py-3 bg-white/20 hover:bg-white/30 font-semibold rounded-lg shadow-lg border border-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Explore More
              </button>
            </div>
          </div>

          <div className="relative max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg">
            <img
              src="https://i.gifer.com/O4ch.gif"
              alt=""
              className="w-[100%] animate-float transition-transform duration-500 hover:scale-105 rounded-4xl "
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 sm:w-52 md:w-64 h-5 sm:h-6 bg-black/40 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
