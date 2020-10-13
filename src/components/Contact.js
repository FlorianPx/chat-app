import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      online: this.props.online,
    }
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.picture} />
        <div className="text">
          <h1 className="name">{this.props.name}</h1>

          <div className="status" onClick={() => { 
               const newOnline = !this.state.online;
               this.setState({ online : newOnline });
               }}>
            <span className={this.state.online ? "status-online" : "status-offline"}></span>
            <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
          </div>

        </div>
      </div>
    );
  }
}
export default Contact;
