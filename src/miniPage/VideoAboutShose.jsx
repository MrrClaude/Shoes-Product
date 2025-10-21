import React, { useState, useEffect } from "react";
import "../Style.css/videoStyle.css";

const VideoAboutShoe = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const video = document.getElementById("nikeVideo");
    if (video) {
      if (modalOpen) video.play();
      else video.pause();
    }
  }, [modalOpen]);

   const fullText = "Experience the New Nike Air Max 2025";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const current = fullText.substring(0, displayedText.length + (isDeleting ? -1 : 1));

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
    <section
      id="about"
      className="py-24 sm:py-32 bg-black"
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-300 mb-4">
          
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-pink-500">
            {displayedText}
          </span>
          <span className="animate-blink">|</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the perfect blend of innovation and style. Watch our launch
          video and explore how the <strong>Nike Air Max 2025</strong> sets new
          standards for comfort, performance, and design.
        </p>
      </div>

      {/* Video Preview */}
      <div className="flex justify-center">
        <button
          onClick={() => setModalOpen(true)}
          aria-label="Watch the Nike Air Max 2025 video"
          className="group transition-transform transform hover:scale-105"
        >
          <div className="video-thumbnail-container relative">
            <img
              className="rounded-2xl shadow-2xl w-full max-w-3xl object-cover"
              src="https://i.ytimg.com/vi/tJuonATKYd4/maxresdefault.jpg"
              alt="Nike Air Max 2025"
            />
            <div className="flex justify-center items-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
              <div className="p-4 bg-white/90 rounded-full shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-600"
                >
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="flex justify-end w-[50%] mb-4 text-right  ">
            <button
              onClick={() => setModalOpen(false)}
              className=" transition-colors p-2"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="w-[50%]  aspect-video rounded-2xl overflow-hidden shadow-2xl ">
            <video
              id="nikeVideo"
              width="1920"
              height="1080"
              loop
              controls
              className="w-full h-full object-cover"
            >
              <source
                src="https://rr1---sn-hx3voboxu-2oil.googlevideo.com/videoplayback?expire=1761056533&ei=tUL3aIytNquAkucPwrqWmQg&ip=23.27.209.172&id=o-AKLpop6WzYYumXDr7yQ9eVngicmC4JVf-fXc52E2XEBU&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=0&rms=au%2Cau&bui=ATw7iSWq3p10AYlx6F1GcyzZDFBFrO4WTYCbr8tlrG06JdHi7E7-4rA1x716IEuGY0q3kOlMYdpILTq1&vprv=1&svpuc=1&mime=video%2Fmp4&ns=gsKrqVPcswYbzFfthjP4gbcQ&rqh=1&cnr=14&ratebypass=yes&dur=8.777&lmt=1678964637664404&lmw=1&fexp=24350737,24350827,24351316,24351318,24351528,24352157,24352916,24352918,24352961,24353009,24353011,24353029,24353031,24353127,24353151,24353227,24353229,24353287,24353289,24353701,24353703,24353795,24353797,24353959,24353961,24354051,24354053,24354127,24354129,51557447,51565116,51565681,51580970&c=TVHTML5&sefc=1&txp=5319224&n=qfX2LVxrYp80QA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgDF_pBj8VDA9THBvzsIPvpaZkVgqrPf41mfTV-KmTgfECIBPPT9F1ht7rppSaTHTxlWIWYjsMiYHG8lv_6R6ZsS8w&redirect_counter=1&rm=sn-p5qels7e&rrc=104&req_id=64d45663a93da3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1761034948,&mh=Z7&mip=116.212.130.189&mm=31&mn=sn-hx3voboxu-2oil&ms=au&mt=1761033095&mv=u&mvi=1&pl=24&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRgIhALmVwr-l2tLJGH_HdK6nukUS1N_xMys6iZWDXaq02sC4AiEA6An2s7wxvuqjwv5Y0UcX4vOnHNp0SqDwJCSNsWW_DB4%3D"
                type="video/mp4"
              />
              Your browser does not support videos.
            </video>
          </div>
        </div>
      )}

      <p className="text-center text-sm mt-10 text-gray-500">
        © 2025 Nike — Designed with ❤️ by <span className="text-purple-600">Shoe Studio</span>
      </p>
    </section>
  );
};

export default VideoAboutShoe;
