import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersStart } from "../Saga/action";
const Table = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const handleDelete = (id) => {
    dispatch(deleteUsersStart(id));
  };
  return (
    <div className="container">
      <h5 className="center">List of Friends</h5>
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Email id</th>
              <th>Address</th>
              <th>Cake Flavour</th>
              <th>Size</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {/* <tr>
              <td>Prashant Singh</td>
              <td>12 april 1999</td>
              <td>ak@gmail.com</td>
              <td>Bareilly Up</td>
              <td>Vanilla</td>
              <td>3 pond</td>
              <td>
                <i className="small material-icons">delete</i>
              </td>
            </tr> */}
            {users &&
              users.map((data) => (
                <tr key={data.id}>
                  <td>
                    {data.firstname} {data.lastname}
                  </td>
                  <td>{data.dob}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                  <td>{data.cakeFlavour}</td>
                  <td>{data.cakeSize} pond</td>
                  <td>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="btn-small red accent-2"
                    >
                      <i className="small material-icons ">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
