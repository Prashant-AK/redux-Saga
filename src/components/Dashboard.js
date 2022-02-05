import React, { useState, useEffect } from "react";
import Table from "./Table";
import { Select } from "react-materialize";
import { useDispatch } from "react-redux";
import { createUsersStart, loadUsersStart } from "../Saga/action";
const Dashboard = () => {
  const dispatch = useDispatch();
  const initialStat = {
    cakeFlavour: "",
    cakeSize: "",
    firstname: "",
    lastname: "",
    cakeFlavour: "",
    email: "",
    address: "",
    dob: "",
  };

  const [data, setData] = useState(initialStat);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUsersStart(data));
    dispatch(loadUsersStart());
    setData(initialStat);
  };

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  const handleChange = (e) => {
    var { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Dashboard</h3>
      <section className="card" style={{ width: "500px" }}>
        <h5 className="center">Add Friend</h5>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  className="validate"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="first_name">First Name</label>
                <span
                  className="helper-text"
                  data-error="Enter First name"
                  data-success="Good to go"
                ></span>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="last_name">Last Name</label>
                <span
                  className="helper-text"
                  data-error="Enter Last name"
                  data-success="Good to go"
                ></span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                {/* <DatePicker
                  onChange={(dob) => dateChange(dob)}
                  name="dob"
                  value={data.dob}
                /> */}
                <input
                  type="date"
                  placeholder="Select dob"
                  name="dob"
                  onChange={handleChange}
                  value={data.dob}
                  required
                />
                <label>DOB</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
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
                  id="address"
                  type="text"
                  onChange={handleChange}
                  name="address"
                  value={data.address}
                />
                <label htmlFor="address">Address</label>
                <span
                  className="helper-text"
                  data-error="Enter Address"
                  data-success="Good to go"
                ></span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <Select
                  id="Select-40"
                  multiple={false}
                  onChange={handleChange}
                  name="cakeFlavour"
                  options={{
                    classes: "",
                    dropdownOptions: {
                      alignment: "left",
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250,
                    },
                  }}
                  value=""
                >
                  <option disabled value="">
                    Cake Flavour
                  </option>
                  <option value="Vanila">Vanila</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Pineapple">Pineapple</option>
                </Select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="cakesize"
                  type="number"
                  onChange={handleChange}
                  name="cakeSize"
                  value={data.cakeSize}
                  required
                />
                <label htmlFor="cakesize">Size in pond</label>
              </div>
            </div>
            <div className="row center">
              <button type="submit" className="btn red accent-2">
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Table
      // handleDelete={handleDelete}
      // users={users}
      />
    </div>
  );
};

export default Dashboard;
