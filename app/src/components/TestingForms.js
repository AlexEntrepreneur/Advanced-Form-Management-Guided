import React from "react";
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';

export default function TestingForms() {
  function submitHandler(values, actions) {
    console.log(values, actions);
    // Sending our form data to a server
    axios
      .post('https://reqres.in/api/users/', values)
      .then(res => {
        console.log(res);
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log('Axios request finished.');
      });
  }
  
  return (
    <div className="TestingForms">
      <Formik
        onSubmit={submitHandler}
        initialValues={initialTestingFormValues}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="testform_username">Username</label>
          <Field
            type="text"
            id="testform_username"
            name="username"
            placeholder="Enter your username here"
          />
          <ErrorMessage name="username" component="div" className="error"/>
          <label htmlFor="testform_password">Password</label>
          <Field
            type="password"
            id="testform_password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error"/>
          <label htmlFor="testform_remember_pass">Remember password?</label>
          <Field
            type="checkbox"
            id="testform_remember_pass"
            name="remember_pass"
          />
          <ErrorMessage name="remember_pass" component="div" className="error"/>
          {/* <Field
            as="textarea"
            // id="testform_remember_pass"
            // name="remember_pass"
          /> */}
          <label htmlFor="testform_account_type">Select An Account Type: </label>
          <Field
            as="select"
            name="account_type"
            id="testform_account_type"
          >
            <option value="">Select an option</option>
            <option value="gold">Gold Account</option>
            <option value="slvr">Silver Account</option>
            <option value="brnz">Bronze Account</option>
          </Field>
          <ErrorMessage name="account_type" component="div" className="error"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please enter a username'),
  password: Yup.string().required('Please enter a password'),
  remember_pass: Yup.boolean(),
  account_type: Yup.string().required('Please select an account type')
});

// Clearing the values in our form inputs
const initialTestingFormValues = {
  username: '',
  password: '',
  remember_pass: false,
  account_type: ''
}
