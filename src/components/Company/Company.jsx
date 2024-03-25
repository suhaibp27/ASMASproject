import { useEffect } from "react";
import "./Company.css";
import company1 from "../../media/company1.jpg";
import company2 from "../../media/company2.jpg";
import company3 from "../../media/company3.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { GiCrane } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Company = () => {
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 5000);
  }, []);
  useGSAP(() => {
    gsap.from(".company-top-right h3", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".company-top-right h3",
        start: "top bottom",
        end: "top 70%",
        scrub: true,
      },
    });
    gsap.from(".company-middle-item h4", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".company-middle-item h4",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.from(".company-bottom-left h3", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".company-bottom-left h3",
        start: "top bottom",
        end: "top 70%",
        scrub: true,
      },
    });
    gsap.from(".company-bottom-list-item p", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".company-bottom-list-item p",
        start: "top bottom",
        end: "top 70%",
        scrub: true,
      },
    });
    gsap.from(".company-top-right p, .company-top-right img", {
      x: 500,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".company-top-right p, .company-top-right img",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
      },
      stagger: 0.4,
    });
  });
  return (
    <div className="company-wrapper" id="company">
      <div className="company-container">
        <div className="company-backdrop"></div>
        <div className="company-top">
          <div className="company-top-left">
            <img className="companyImg1" src={company1} alt="Building image" />
          </div>
          <div className="company-top-right">
            <div className="title-container">
              <h3>About the company</h3>
            </div>
            <p>
              With a passion for quality craftsmanship and a commitment to
              delivering exceptional results, Asmas Infrastructure Group take
              pride in transforming visions into reality. As a leading
              construction company, we specialize in building structures that
              stand the test of time.
            </p>
            <p>
              Our dedicated team of architects, engineers, and skilled craftsmen
              work collaboratively to ensure that each structure is not just a
              building but a testament to our unwavering commitment to
              excellence.
            </p>
            <p>
              Home is where the heart is, and we understand the importance of
              creating spaces that reflect your unique lifestyle. Whether it's a
              cozy family residence or a luxurious dream home, we are dedicated
              to crafting living spaces that blend functionality with aesthetic
              appeal.
            </p>
            {/* <p>
              So, we value each and every customer of ours, and reward them with
              a wonderful home. Yes, we are here to create blessed homes, just
              for you!
            </p> */}
            <img className="companyImg2" src={company2} alt="Building image" />
          </div>
        </div>
        <div className="company-middle">
          <div className="company-middle-item border-right">
            <h4>38</h4>
            <p>projects</p>
          </div>
          <div className="company-middle-item border-right">
            <h4>102</h4>
            <p>employees</p>
          </div>
          <div className="company-middle-item">
            <h4>13</h4>
            <p>
              years <span className="company-middle-hide">on the market</span>
            </p>
          </div>
        </div>
        <div className="company-bottom">
          <div className="company-bottom-left">
            <div className="title-container">
              <h3>Why we are right for you</h3>
            </div>
            <div className="company-bottom-list-item">
              <IoHomeOutline size={40} />
              <p>
                We have extensive experience in the field of construction,
                design. Our seasoned professionals bring a wealth of expertise
                to every project.
              </p>
            </div>
            <div className="company-bottom-list-item">
              <GiCrane size={40} />
              <p>
                We adhere to the highest standards of craftsmanship, using
                premium materials for lasting results.
              </p>
            </div>
            <div className="company-bottom-list-item">
              <GrStatusGood size={40} />
              <p>
                Your satisfaction is our priority. We listen, collaborate, and
                deliver results that exceed your vision.
              </p>
            </div>
          </div>
          <div className="company-bottom-right">
            <div className="company-bottom-mask"></div>
            <img className="companyImg3" src={company3} alt="Building image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
