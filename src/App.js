// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import { contactsData } from "./data";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContactForm from "./components/AddContactForm";

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="title">📞 My Contact List</h1>
      <SearchBar onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
      <AddContactForm onAdd={handleAddContact} />
    </div>
  );
}

export default App;
