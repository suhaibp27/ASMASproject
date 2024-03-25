import { useState } from "react";
import "./App.css";
import { Link } from "react-scroll";
import Company from "./components/Company/Company";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Loading from "./components/Loading/Loading";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [showNav, setShowNav] = useState(false);
  useGSAP(() => {
    gsap.to(".scroll-to-top a", {
      y: -4,
      ease: "power1.inOut",
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div className="app" id="app">
      <Loading />
      <div className="app-screens">
        <Header showNav={showNav} setShowNav={setShowNav} />
        <Hero />
        <Company />
        <Services />
        {/* <Projects /> */}
        <Contact />
      </div>
      <div className={showNav ? "scroll-to-top" : "scroll-to-top hidden"}>
        <Link to="app" smooth={true} duration={500} spy={true} exact="true">
          <FaArrowUp size={20} />
        </Link>
      </div>
    </div>
  );
}

export default App;
