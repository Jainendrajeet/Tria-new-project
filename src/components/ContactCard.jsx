import React from "react";
import "./ContactCard.css";

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <div className="avatar">{contact.name.charAt(0).toUpperCase()}</div>
      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>📞 {contact.phone}</p>
        <p>📧 {contact.email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
