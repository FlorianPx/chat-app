import React from "react";
import "./Contact.css";

function Contact() {
  const picture = "https://randomuser.me/api/portraits/men/39.jpg";
  const firstName = "Murray";
  const name = "Paul";
  const online = true;

  return (
    <div className="Contact">
      <img className="avatar" src={picture} alt="Picture of Paul Murray" />
      <div className="text">
        <h1 className="name">{`${firstName} ${name}`}</h1>
        <div className="status">
          <span className={online ? "status-online" : "status-offline"}></span>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
