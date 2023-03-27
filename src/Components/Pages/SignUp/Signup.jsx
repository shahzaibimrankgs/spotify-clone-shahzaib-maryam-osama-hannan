import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import YupPassword from "yup-password";
import Gmail from "../Gmail/Gmail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
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
    <div class="signUpContainer">
      <div class="spotifyLogo">
      <FontAwesomeIcon icon={faSpotify} size="2x" />
      <span className="spotifyText">Spotify</span>
      <span className="regTradeMark">&reg;</span>
</div>
</div>
      <div>
        <h2 className="signUpHeading">Sign up for free to start listening.</h2>
        <div className="googleSignUpBtn">
          <Gmail />
        </div>
        <div className="signUpHrContainer">
  <hr className="logInHrLine logInHrLeft" />
  <span className="logInHrText">OR</span>
  <hr className="logInHrLine logInHrRight" />
</div >
      </div>
      <h2 className="signUpSmallHeading">Sign up with your email address</h2>
      <div className="signUpFormik">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        <Form>
          <div className="names">
            <div className="form-control">
              <label htmlFor="email" />
              <h5>What's your email?</h5>
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
              <h5>Confirm your email</h5>
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
            <h5>Create a password</h5>
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
            <h5>What should we call you?</h5>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter a profile name."
            />
            <h6>This appears on your profile.</h6>
            <div className="err">
              <ErrorMessage name="username" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="dob" />
            <h5>What's your date of birth?</h5>
            <Field type="date" id="dob" name="dob" />
            <div className="err">
              <ErrorMessage name="dob" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="gender" />
            <h5>What's your gender?</h5>
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
          <div className="signUpBtn">
          <button >Sign up</button>
          </div>
          <h5 className="alreadyUser">Have an account? Log In</h5>
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
    </div>
  );
};
export default Signup;
