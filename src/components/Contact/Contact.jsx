import "./Contact.css";
import ContactItem from "./ContactItem";
import {
  IoLocationOutline,
  IoTimeOutline,
  IoMailOutline,
  IoLogoLinkedin,
} from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-logo">
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
          </div>
          <div className="contact-socials">
            <IoMailOutline size={16} />
            <IoLogoLinkedin size={16} />
            <FaInstagram size={16} />
          </div>
        </div>
        <div className="contact-content-container">
          <h3 className="contact-title">Contact Us</h3>
          <div className="contact-content">
            <div className="contact-middle">
              <ContactItem
                icon={<IoLocationOutline size={30} />}
                title="Our office is located at:"
                desc="1st floor, Pathoor Tower, Puthiyara Road, Calicut-673008"
              />
              <ContactItem
                icon={<IoTimeOutline size={30} />}
                title="Operating time:"
                desc="Mon-Fri from 9:00 to 18:00"
              />
            </div>
            <div className="contact-right">
              <ContactItem
                icon={<FiPhone size={30} />}
                title="Phone"
                desc="0495 4040 231"
              />
              <ContactItem
                icon={<IoMailOutline size={30} />}
                title="E-mail"
                desc="asmas4mail@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
