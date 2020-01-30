import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function StudentForm() {
  function handleSubmit(values, actions) {
    console.log(values);

    axios
      .post('https://reqres.in/api/users/', values)
      .then(res => {
        console.log(res.data);
        actions.resetForm();
      })
      .catch(e => console.log(e))
  }
  return (
    <div className="StudentForm">
      <h1>Lambda Student Form</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="student_first_name">First Name</label>
          <Field
            type="text"
            id="student_first_name"
            name="first_name"
            placeholder="Enter your first name here"
          />
          <ErrorMessage name="first_name" component="div" className="error"/>
          <label htmlFor="student_last_name">Last Name</label>
          <Field
            type="text"
            id="student_last_name"
            name="last_name"
            placeholder="Enter your last name here"
          />
          <ErrorMessage name="last_name" component="div" className="error"/>
          <label htmlFor="student_username">Username</label>
          <Field
            type="text"
            id="student_username"
            name="username"
            placeholder="Enter your username here"
          />
          <ErrorMessage name="username" component="div" className="error"/>
          <label htmlFor="student_password">Password</label>
          <Field
            type="password"
            id="student_password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error"/>
          <label htmlFor="student_remember_pass">Remember password?</label>
          <Field
            type="checkbox"
            id="student_remember_pass"
            name="remember_pass"
          />
          <ErrorMessage name="remember_pass" component="div" className="error"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Please enter your first name'),
  last_name: Yup.string().required('Please enter your lastname name'),
  username: Yup.string().required('Please enter a username'),
  password: Yup.string().required('Please enter a password'),
  remember_pass: Yup.boolean()
});

const initialState = {
  first_name: '',
  last_name: '',
  username: '',
  password: '',
  remember_pass: false
}