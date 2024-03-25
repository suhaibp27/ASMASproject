import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Loading.css";

const Loading = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".loading-label-container",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    )
      .fromTo(
        ".loading-page-content",
        { opacity: 1 },
        { opacity: 0, display: "none", duration: 0.5 }
      )
      .fromTo(
        ".loading-page",
        { opacity: 1 },
        { opacity: 0, display: "none", duration: 1.5 }
      )
      .fromTo(
        ".loading-two-title",
        { opacity: 1 },
        { opacity: 0, display: "none", duration: 0.5 }
      )
      .fromTo(
        ".loading-two",
        { opacity: 1 },
        { opacity: 0, display: "none", duration: 0.5 }
      )
      .fromTo(
        ".hero-left-glass-content",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: true }
      );
    gsap.fromTo(
      ".app-screens",
      { display: "none" },
      { display: "block", delay: 4.5 }
    );
  });
  return (
    <div className="loading-container">
      <div className="loading-page">
        <div className="loading-page-content">
          <svg id="svg" stroke="#dca70a" fill="none" viewBox="0 0 190 120">
            <path
              className="line"
              d="m 20 100 h 30 v -60 l 30 -10 l 20 5 v 15 l 15 -4 l 15 5 v 49 h 40 m -55 0.5 v -54 m -7 1 v 53 m -7.9 0 v -50.5 l -7 2 v 48.5 m -12.9 0 v -70 m -10 3 v 67 m -10 0 v -64 m 21 -6 v 70 m 1 0 v -70 m 1 0.5 v 69.5 m 1 0 v -69.5 m 1 0.5 v 69 m 1 0 v -69 m 1 0.5 v 68.5 m 1 0 v -68.5 m 1 0.5 v 68 m 1 0 v -68 m 1 0.5 v 67.5 m 1 0 v -67.5 m 1 0.5 v 18.5 m 1 0 v -18.5 m 1 0.5 v 17.5 m 1 0 v -17.5 m 1 0.5 v 16.5 m 1 0 v -16.5 m 1 0.5 v 15.5 m 1 0 v -15.5 m 15 11 v 54.5 m 1 0 v -54.5 m 1 1 v 53.5 m 1 0 v -53.5 m 1 0.5 v 53 m 1 0 v -53 m 1 0.5 v 52.5 m 1 0 v -52.5 m 1 1 v 51.5 m 1 0 v -51.5 m 1 0.5 v 51 m 1 0 v -51 m 1 0.5 v 50.5 m 1 0 v -50.5 m 1 0.5 v 50 m 1 0 v -50"
            />
          </svg>
          <div className="loading-label-container">
            <h1 className="loading-label">
              <span>A</span>
              <span>S</span>
              <span>M</span>
              <span>A</span>
              <span>S</span>
            </h1>
            <p className="loading-title">INFRASTRUCTURE</p>
          </div>
        </div>
      </div>
      <div className="loading-two">
        <p className="loading-two-title">FOCUS ON THE POSITIVE</p>
      </div>
    </div>
  );
};

export default Loading;
