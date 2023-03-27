import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import YupPassword from "yup-password";
import Gmail from "../Gmail/Gmail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

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
       <div class="signUpContainer">
      <div class="spotifyLogo">
      <FontAwesomeIcon icon={faSpotify} size="2x" />
      <span className="spotifyText">Spotify</span>
      <span className="regTradeMark">&reg;</span>
</div>
</div>
<hr className="loginHr"/>
      <div>
        <p className="loginSubHeading">To continue, log in to Spotify.</p>
        <div className="googleSignUpBtn">
          <Gmail />
        </div>
      </div>
      {/* <h2>Login</h2> */}
      <div className="signUpHrContainer">
  <hr className="logInHrLine logInHrLeft" />
  <span className="logInHrText">OR</span>
  <hr className="logInHrLine logInHrRight" />
</div >
<div className="signUpFormik">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        <Form>
          
          <div className="form-control">
            <label htmlFor="email" />
            <h5>Email address or username</h5>
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
            <h5>Password</h5>
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
          <div className="signUpBtn">
            <button type="submit" id="logged=in">
              Login
            </button></div>
            <hr className="loginHr"/>
            {/* <Link to={"/signup"}> */}
          <h4 className="alreadyUser">Don't have an account? </h4>
            <button className="loginPageSignUp">SIGN UP FOR SPOTIFY</button>
            {/* </Link> */}
          </div>
        </Form>
      </Formik>
    </div></div>
  );
};
export default LogIn;
