import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import YupPassword from "yup-password";
import Gmail from "../Gmail/Gmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
YupPassword(Yup);

const initialValues = {
  name: "",
  email: "",
  password: "",
  cemail: "",
};

const validationSchema = Yup.object({
  password: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
});
const Signup = () => {
  const navigate = useNavigate();
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
        </div>
      </div>
      <h2 className="signUpSmallHeading">Sign up with your email address</h2>
      <div className="signUpFormik">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log("values", values);
            const body = {
              email: values.email,
              name: values.name,
              gender: values.gender,
              password: values.password,
            };
            const res = await axios.post(
              "http://localhost:4000/users/createUser",
              body
            );

            if (res) {
              navigate("/login");
              return res;
            }

            return "maa chudao";
          }}
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
              <label htmlFor="name" />
              <h5>What should we call you?</h5>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter a profile name."
              />
              <h6>This appears on your profile.</h6>
              <div className="err">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="gender" />
              <h5>What should we call you?</h5>
              <Field
                type="text"
                id="gender"
                name="gender"
                placeholder="Khusra"
              />
              <h6>This appears on your profile.</h6>
              <div className="err">
                <ErrorMessage name="name" />
              </div>
            </div>

            {/* <div className="form-control">
              <label htmlFor="dob" />
              <h5>What's your date of birth?</h5>
              <Field type="date" id="dob" name="dob" />
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
            </div> */}
            <div className="signUpBtn">
              <button type="submit">Sign up</button>
            </div>
            <h5 className="alreadyUser">Have an account? Log In</h5>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Signup;
