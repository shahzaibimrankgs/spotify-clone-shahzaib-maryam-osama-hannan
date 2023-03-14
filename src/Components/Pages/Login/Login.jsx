import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import YupPassword from "yup-password";
import Gmail from "../Gmail/Gmail";

// import { useNavigate, useLocation } from "react-router-dom";
YupPassword(Yup);

const initialValues = {
  emailUserName: "",
  password: null,
};

const validationSchema = Yup.object({
  password: Yup.string().password().required("Required"),
  emailUserName: Yup.string("Enter your Email/Phone Number")
    .required("Email/userName is required")
    .test("test-name", "Enter Valid UserName/Email", function (value) {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      const userNameRegex =
        /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
      let isValidEmail = emailRegex.test(value);
      let isValidPhone = userNameRegex.test(value);
      if (!isValidEmail && !isValidPhone) {
        return false;
      }
      return true;
    }),
});
const LogIn = () => {
  return (
    <div>
      <div>
        <h4>To continue, log in to Spotify</h4>
        <div>
          <Gmail />
        </div>
      </div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="email" />
            <h4>Email address or username</h4>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email address or username"
            />
            <div className="err">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="password" />
            <h4>Password</h4>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <div className="err">
              <ErrorMessage name="password" />
            </div>
          </div>
          <div className="btn">
            <button type="submit" id="logged=in">
              Login
            </button>
            {/* <Link to={"/signup"}> */}
            <button>Sign Up</button>
            {/* </Link> */}
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default LogIn;
