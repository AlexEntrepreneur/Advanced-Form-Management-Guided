import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';


function TestingForms(props) {
  console.log(props);
  
  return (
    <div className="TestingForms">
      <Form>
        <label htmlFor="testform_username">Username</label>
        <ErrorMessage
          name="username"
          render={msg => <div className="error">{msg}</div>}
        />
        <Field
          type="text"
          name="username"
          id="testform_username"
          placeholder="Enter your username here"
        />

        <label htmlFor="testform_password">Password</label>
        <ErrorMessage
          name="password"
          render={msg => <div className="error">{msg}</div>}
        />
        <Field
          type="password"
          name="password"
          id="testform_password"
          placeholder="Enter your password here"
        />
        <label htmlFor="testform_remember_pass">Remember password?</label>
        <Field
          type="checkbox"
          name="remember_pass"
          id="testform_remember_pass"
        />
        <label htmlFor="testform_account_type">Select an account type: </label>
        <ErrorMessage
          name="account_type"
          render={msg => <div className="error">{msg}</div>}
        />
        <Field as="select" name="account_type" id="testform_account_type">
          <option>Gold Account</option>
          <option>Silver Account</option>
          <option>Bronze Account</option>
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

const FormikTestingForms = withFormik({
  mapPropsToValues({ username, password, remember_pass, account_type }) {
    return {
      username: username || "",
      password: password || "",
      remember_pass: remember_pass || false,
      account_type: account_type || "Gold Account"
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Please enter a password"),
    remember_pass: Yup.boolean(),
    account_type: Yup.string()
      .oneOf(["Gold Account", "Silver Account", "Bronze Account"])
      .required("Please select an account type")
  }),

  handleSubmit(values, tools) {
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
})(TestingForms);

export default FormikTestingForms;