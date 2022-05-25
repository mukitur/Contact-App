import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import Table from "./components/Table";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const getContact = (values) => {
    setContacts([].concat(contacts, values));
    /* console.log("clicked");
    console.log("get from app", values.name); */
  };
  return (
    <div className="App.css" style={{ width: "80%", margin: "0 auto" }}>
      <h2>Contact App</h2>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </div>
  );
};

export default App;
