import React from 'react';
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';


export default function TestingForms() {
  function submitHandler(values, tools) {
    // console.log(args);
    
    axios
      // values is our object with all our data on it.
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("server response: ", res.data);
        tools.resetForm();
      })
      .catch(err => console.log(err.response));
  }
  return (
    <div className="TestingForms">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialTestingFormValues}
        onSubmit={submitHandler}
        render={() =>
          <Form>
            <label htmlFor="testform_username">Username</label>
            <Field
              type="text"
              name="username"
              id="testform_username"
              placeholder="Enter your username here"
            />
            <ErrorMessage
              name="username"
              className="error"
              component="div"
            />
            <label htmlFor="testform_password">Password</label>
            <Field
              type="password"
              name="password"
              id="testform_password"
              placeholder="Enter your password here"
            />
            <ErrorMessage
              name="password"
              className="error"
              component="div"
            />
            <label htmlFor="testform_remember_pass">Remember password?</label>
            <Field
              type="checkbox"
              name="remember_pass"
              id="testform_remember_pass"
            />
            <label htmlFor="testform_account_type">
              Select an account type:{" "}
            </label>
            <Field as="select" name="account_type" id="testform_account_type">
              <option>Gold Account</option>
              <option>Silver Account</option>
              <option>Bronze Account</option>
            </Field>
            <ErrorMessage
              name="account_type"
              className="error"
              component="div"
            />
            <button type="submit">Submit</button>
          </Form>
        }
      />
    </div>
  );
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter a username"),
  password: Yup.string().required("Please enter a password"),
  remember_pass: Yup.boolean(),
  account_type: Yup.string()
    .oneOf(["Gold Account", "Silver Account", "Bronze Account"])
    .required("Please select an account type")
});

const initialTestingFormValues = {
  username: '',
  password: '',
  remember_pass: false,
  account_type: ''
};