import React, { useContext } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import ThemeContext from "./context/ThemeProvider";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Shose from "./pages/Shose";
const App = () => {
  const{theme}=useContext(ThemeContext);
  return (
    <div className={`${theme === "dark"?"bg-black text-white": "bg-white text-black"}`}>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <AboutUs/>
        <Shose/>
        <ContactUs/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
