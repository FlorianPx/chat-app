import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.picture} />
      <div className="text">
        <h1 className="name">{`${props.firstName} ${props.name}`}</h1>
        <div className="status">
          <span
            className={props.online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
