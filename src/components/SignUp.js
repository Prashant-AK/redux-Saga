import React, { useState } from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { loginUsersStart } from "../Saga/action";
import { useNavigate } from "react-router-dom";
import Recaptcha from "react-recaptcha";
import ReCAPTCHA from "react-google-recaptcha";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  // const recaptchaLoaded = () => {
  //   console.log("loaded");
  // };
  const verifyCallback = () => {
    setIsVerified(true);
  };
  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      dispatch(loginUsersStart());
      navigate("/dashboard");
    } else {
      alert("Please verify yourself");
    }
  };

  return (
    <div className="main_box">
      <div className="card large" style={{ minWidth: "400px" }}>
        <h4 className="center"> SignUp</h4>
        <div className="card-content">
          <div className="row">
            <form className="col s12" onSubmit={onhandleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="full_name"
                    type="text"
                    className="validate"
                    required
                  />
                  <label htmlFor="full_name">Full Name</label>
                  <span
                    className="helper-text"
                    data-error="Enter Your full name"
                    data-success="Good to go"
                  ></span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    // ref={register}
                    id="email"
                    type="email"
                    className="validate"
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <span
                    className="helper-text"
                    data-error="Enter valid Email"
                    data-success="right"
                  ></span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    // ref={register}
                    id="password"
                    type="password"
                    className="validate"
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>

              <div className="row center">
                <button type="submit" className="btn">
                  {" "}
                  Sign Up
                </button>
              </div>
            </form>
            <div className="row">
              <div className="input-field col s12">
                {/* <Recaptcha
                    sitekey="6LfqSFgeAAAAAIACC_Omg5JNuWhBd6ClO2FQXnhf"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verifyCallback}
                  /> */}
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={verifyCallback}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
