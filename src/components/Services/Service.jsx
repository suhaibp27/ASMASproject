import "./Service.css";

const Service = ({ img, title, desc }) => {
  return (
    <div className="service-wrapper">
      <div className="service-container">
        <img className="service-img" src={img} alt="Service image" />
        <div className="service-content">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
