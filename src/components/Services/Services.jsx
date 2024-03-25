import Service from "./Service";
import "./Services.css";
import service1 from "../../media/service1.jpg";
import service2 from "../../media/service2.jpg";
import service3 from "../../media/service3.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.from(".services-top h3", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".services-top h3",
        start: "top bottom",
        end: "top 70%",
        scrub: true,
      },
    });
    gsap.from(".services-items p", {
      x: 1000,
      opacity: 0,
      scrollTrigger: {
        trigger: ".services-items p",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      stagger: {
        each: 0.25,
        from: "random",
      },
    });
    const mm = gsap.matchMedia();
    mm.add("(min-width: 501px)", () => {
      gsap.from(".services-bottom > div > div", {
        x: 800,
        opacity: 0,
        scrollTrigger: {
          trigger: ".services-bottom > div > div",
          start: "top bottom",
          end: "top 40%",
          scrub: true,
        },
        stagger: 0.3,
      });
    });
    mm.add("(max-width: 500px)", () => {
      gsap.from(".services-bottom > div > div", {
        x: 800,
        opacity: 0,
        scrollTrigger: {
          trigger: ".services-bottom > div > div",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        stagger: 0.3,
      });
    });
  });
  return (
    <div className="services-wrapper" id="services">
      <div className="services-container">
        <div className="services-top">
          <div className="title-container">
            <h3>Our Services</h3>
          </div>
          <div className="services-items">
            <p>Planning and Designing</p>
            <p>Building Construction</p>
            <p>3D Modeling</p>
            <p>Interior Designing</p>
            <p>Interior Furnishing</p>
            <p>Landscaping</p>
            <p>Detailed Estimation</p>
            <p>Electrical Drawing</p>
            <p>Truss Works</p>
            <p>Remodelling</p>
          </div>
        </div>
        <div className="services-bottom">
          <Service
            img={service1}
            title="Building Construction"
            desc="With meticulous attention to detail and a passion for excellence, we transform blueprints into tangible reality."
          />
          <Service
            img={service2}
            title="Interior"
            desc="Elevate your living and working spaces with our bespoke Interior Design and Furnishing services."
          />
          <Service
            img={service3}
            title="Infrastructure"
            desc="Our dedicated team combines expertise, innovation, and a commitment to sustainability to deliver infrastructure solutions that stand the test of time."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
