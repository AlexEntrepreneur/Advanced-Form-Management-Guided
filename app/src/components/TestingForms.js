import React, { useState } from 'react';

export default function TestingForms() {
  const [testForm, setTestForm] = useState({
    username: "",
    password: "",
    remember_pass: false,
    account_type: ""
  });

  const handleFormChange = (e) => {
    if (e.target.type === "checkbox") {
      setTestForm({
        ...testForm,
        [e.target.name]: e.target.checked
      });
    } else {
      // Testing our input value for whether it contains letters or is an empty string
      if (/^[A-Za-z0-9]+$/.test(e.target.value) || e.target.value === "") {
        setTestForm({
          ...testForm,
          [e.target.name]: e.target.value
        });
      }
    }
  }
  
  const handleSubmit = e => {
    // Preventing the form submit from refreshing the page
    // preventing default form submission behaviour
    e.preventDefault();
    // For seeing all the event properties in the console
    e.persist();
    console.log(e);
    // We can log the values of each input within the form
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    console.log(e.target.remember_pass.value);
  };

  return (
    <div className="TestingForms">
      <form onSubmit={handleSubmit}>
        <label htmlFor="testform_username">Username </label>
        <input
          type="text"
          name="username"
          id="testform_username"
          placeholder="Enter your username here"
          onChange={handleFormChange}
          // We are telling our input what its value should be
          // It's value corresponds to its property in state
          value={testForm.username}
        />

        <label htmlFor="testform_password">Password</label>
        <input
          type="password"
          name="password"
          id="testform_password"
          placeholder="Enter your password here"
          onChange={handleFormChange}
          value={testForm.password}
        />
        <label htmlFor="testform_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          name="remember_pass"
          id="testform_remember_pass"
          onChange={handleFormChange}
          value={testForm.remember_pass}
        />
        <label htmlFor="testform_account_type">Select an account type: </label>
        <select
          name="account_type"
          id="testform_account_type"
          onChange={handleFormChange}
          value={testForm.account_type}
        >
          <option>Gold Account</option>
          <option>Silver Account</option>
          <option>Bronze Account</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
