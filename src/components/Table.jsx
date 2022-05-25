import React, { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const searchCB = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  let filteredContacts = [];
  if (filter === "All") {
    filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }

  // let filteredContacts =
  // 	filter === 'All'
  // 		? contacts
  // 		: contacts.reduce((acc, cur) => {
  // 				if (
  // 					cur.group === filter &&
  // 					(cur.name.includes(searchTerm) ||
  // 						cur.email.includes(searchTerm))
  // 				) {
  // 					acc.push(cur);
  // 				}
  // 				return acc;
  // 		  }, []);

  /**
   * 1.
   */

  return (
    <>
      <h3>Contact Details</h3>
      <div>
        <br />
        <label>Filters </label>
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          type="search"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <h4>Contacts</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
