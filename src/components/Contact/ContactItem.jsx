import "./ContactItem.css";

const ContactItem = ({ icon, title, desc }) => {
  return (
    <div className="contactItem-wrapper">
      {icon}
      <div className="contactItem-content">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ContactItem;
