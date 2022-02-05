import React from "react";
import "./Style.css";
const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button pressed");
  };
  return (
    <div className="main_box">
      <div className="card" style={{ minWidth: "400px" }}>
        <h4 className="center"> Sign In</h4>
        <div className="card-content">
          <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="validate"
                  />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="password"
                    id="password"
                    type="password"
                    className="validate"
                  />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row center">
                <button type="submit" className="btn">
                  {" "}
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
