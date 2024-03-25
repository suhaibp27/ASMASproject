import { Link } from "react-scroll";
import "./Hero.css";
import heroImg from "../../media/heroRightImg.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={heroImg} alt="" />
      <div className="hero-left">
        <div className="hero-left-glass">
          <div className="hero-left-glass-content">
            <h1>ASMAS</h1>
            <h3>INFRASTRUCTURE</h3>
            <p>Your trusted partner in construction excellence</p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
