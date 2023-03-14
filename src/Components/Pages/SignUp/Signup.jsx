import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import YupPassword from "yup-password";
import Gmail from "../Gmail/Gmail";
YupPassword(Yup);

const initialValues = {
  username: "",
  email: "",
  password: null,
  cemail: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().password().required("Required"),
  cemail: Yup.string()
    .email()
    .oneOf([Yup.ref("email"), null], 'Must match "email" field value'),
  email: Yup.string().email("Invalid Email Format").required("Required"),
});
const Signup = () => {
  return (
    <div>
      <div>
        <h2>Sign up for free to start listening.</h2>
        <div>
          <Gmail />
          <h4>-------or--------</h4>
        </div>
      </div>
      <h2>Sign up with your email address</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        <Form>
          <div className="names">
            <div className="form-control">
              <label htmlFor="email" />
              <h4>What's your email?</h4>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email."
              />
              <div className="err">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="cemail" />
              <h4>Confirm your email</h4>
              <Field
                type="email"
                id="cemail"
                name="cemail"
                placeholder="Enter your email again"
              />
              <div className="err">
                <ErrorMessage name="cemail" />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="password" />
            <h4>Create a password.</h4>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
            />
            <div className="err">
              <ErrorMessage name="password" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="username" />
            <h4>What should we call you?</h4>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter a profile name."
            />
            <h5>This appears on your profile.</h5>
            <div className="err">
              <ErrorMessage name="username" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="dob" />
            <h4>What's your date of birth?</h4>
            <Field type="date" id="dob" name="dob" />
            <div className="err">
              <ErrorMessage name="dob" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="gender" />
            <h4>What's your gender?</h4>
            <label>
              <Field type="radio" name="picked" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="picked" value="female" />
              Female
            </label>
            <label>
              <Field type="radio" name="picked" value="none" />
              Prefer not to say
            </label>
          </div>
          <button>Sign up</button>
          <h5>Have an account?</h5>
          {/* <a href="">Log in</a> */}
          {/* <div className="btn">
            <button type="submit" id="signed-up">
              <Link to="/login"></Link>
              Sign Up
            </button>
          </div> */}
        </Form>
      </Formik>
    </div>
  );
};
export default Signup;
