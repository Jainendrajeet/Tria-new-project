import React from "react";
import ContactCard from "./ContactCard";
import "./ContactList.css";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.length > 0 ? (
        contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)
      ) : (
        <p className="no-results">No contacts found 🙁</p>
      )}
    </div>
  );
};

export default ContactList;
