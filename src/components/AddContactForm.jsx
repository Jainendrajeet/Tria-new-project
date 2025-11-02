import React, { useState } from "react";
import "./AddContactForm.css";

const AddContactForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return alert("Name and Phone are required!");

    const existing = JSON.parse(localStorage.getItem("contacts")) || [];
    const updated = [...existing, form];
    localStorage.setItem("contacts", JSON.stringify(updated));

    onAdd(form);
    setForm({ name: "", phone: "", email: "" });
  };


  return (
    <form className="add-contact-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email (optional)"
      />
      <button type="submit">➕ Add Contact</button>
    </form>
  );
};

export default AddContactForm;
