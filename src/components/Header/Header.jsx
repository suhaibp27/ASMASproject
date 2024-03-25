import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = ({ showNav, setShowNav }) => {
  const navRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleToggle = () => {
    navRef.current.classList.toggle("responsive-nav");
    toggleButtonRef.current.classList.toggle("active");
  };

  const handleClose = () => {
    navRef.current.classList.remove("responsive-nav");
    toggleButtonRef.current.classList.remove("active");
  };

  const handleNavBackgroundChange = () => {
    if (window.scrollY > 120) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavBackgroundChange);
    return () => {
      window.removeEventListener("scroll", handleNavBackgroundChange);
    };
  }, []);

  return (
    <div
      className={showNav ? "header-wrapper dark-background" : "header-wrapper"}
    >
      <div className="header-container">
        <div className="header-left">
          <Link
            className="header-link"
            to="app"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            {/* <button to="/" onClick={handleClose} className="header-link"> */}
            <div className="header-logo">
              <svg
                stroke="#000"
                strokeWidth={4}
                fill="none"
                viewBox="0 20 150 100"
              >
                <path
                  className="line"
                  d="m 0 100 h 30 v -60 l 30 -10 l 20 5 v 15 l 15 -4 l 15 5 v 49 h 40 m -55 0.5 v -54 m -7 1 v 53 m -7.9 0 v -50.5 l -7 2 v 48.5 m -12.9 0 v -70 m -10 3 v 67 m -10 0 v -64 m 21 -6 v 70 m 1 0 v -70 m 1 0.5 v 69.5 m 1 0 v -69.5 m 1 0.5 v 69 m 1 0 v -69 m 1 0.5 v 68.5 m 1 0 v -68.5 m 1 0.5 v 68 m 1 0 v -68 m 1 0.5 v 67.5 m 1 0 v -67.5 m 1 0.5 v 18.5 m 1 0 v -18.5 m 1 0.5 v 17.5 m 1 0 v -17.5 m 1 0.5 v 16.5 m 1 0 v -16.5 m 1 0.5 v 15.5 m 1 0 v -15.5 m 15 11 v 54.5 m 1 0 v -54.5 m 1 1 v 53.5 m 1 0 v -53.5 m 1 0.5 v 53 m 1 0 v -53 m 1 0.5 v 52.5 m 1 0 v -52.5 m 1 1 v 51.5 m 1 0 v -51.5 m 1 0.5 v 51 m 1 0 v -51 m 1 0.5 v 50.5 m 1 0 v -50.5 m 1 0.5 v 50 m 1 0 v -50"
                />
              </svg>
              <h3>ASMAS</h3>
            </div>
          </Link>
        </div>
        <div className="header-right" ref={navRef}>
          <ul className="header-menu">
            <li className="header-menu-item">
              <Link
                to="app"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={handleClose}
              >
                {/* <NavLink to="/" onClick={handleClose} activeclassname="active"> */}
                Home
              </Link>
            </li>
            <li className="header-menu-item">
              <Link
                to="company"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                onClick={handleClose}
              >
                Company
              </Link>
            </li>
            <li className="header-menu-item">
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                onClick={handleClose}
              >
                Services
              </Link>
            </li>
            <li className="header-menu-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                onClick={handleClose}
              >
                Projects
              </Link>
            </li>
            <li className="header-menu-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                onClick={handleClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* <button className="header-button" onClick={handleToggle}>
          X
        </button> */}
        <button
          className="header-button"
          onClick={handleToggle}
          ref={toggleButtonRef}
          // class="button-three"
          // aria-controls="primary-navigation"
          // aria-expanded="false"
        >
          <svg
            stroke="white"
            fill="none"
            className="hamburger"
            viewBox="-10 -10 120 120"
            width="50"
          >
            <path
              className="line"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </button>
        {/* <button className="header-button" onClick={handleToggle}>
        </button> */}
        {/* <FaTimes size={30} onClick={handleToggle} /> */}
        {/* <FaBars size={30} onClick={handleToggle} /> */}
      </div>
    </div>
  );
};

export default Header;
