import React, { useState } from "react";

export default function StudentForm() {
  const [studentForm, setStudentForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    remember_password: false,
  });

  const studentFormChange = e => {
    if (/^[A-Za-z0-9]+$/.test(e.target.value) || e.target.value === "") {
      setStudentForm({
        ...studentForm,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      });
    } 
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.persist();
    console.log(e);
    console.log(studentForm);
  };
  
  return (
    <div className="StudentForm">
      <h1>Lambda Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            placeholder="Enter your first name here"
            onChange={studentFormChange}
            value={studentForm.first_name}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            placeholder="Enter your last name here"
            onChange={studentFormChange}
            value={studentForm.last_name}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={studentFormChange}
            value={studentForm.username}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={studentFormChange}
            value={studentForm.password}
          />
        </label>
        <label>
          Remember password?
          <input
            type="checkbox"
            name="remember_password"
            onChange={studentFormChange}
            value={studentForm.remember_password}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
