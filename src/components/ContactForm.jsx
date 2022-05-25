import React, { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  phone: "",
  group: "",
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, phone, group } = values;
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    //check input fiels is emply pr not
    if (!name || !email) {
      alert("Please enter a valid name and Email Field!");
      return;
    }

    getContact(values);
    setValues({ ...CONTACT_FORM_INIT_STATE }); //clear input field

    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone: </label>
        <input
          type="number"
          id="number"
          value={phone}
          name="phone"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label>Group: </label>
        <select id="group" value={group} name="group" onChange={handleChange}>
          <option value=""> Select Group </option>
          <option value="All"> All </option>
          <option value="Home"> Home </option>
          <option value="Office"> Office </option>
        </select>
      </div>
      <br />
      <div>
        <input type="submit" value={"Create New Contact"} />
      </div>
    </form>
  );
};

export default ContactForm;
