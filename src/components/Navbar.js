import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUsersStart, logoutUsersStart } from "../Saga/action";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { login } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUsersStart());
  };
  const handleLogin = () => {
    dispatch(loginUsersStart());
  };

  useEffect(() => {}, [handleLogin, handleLogout]);

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              Bash
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {login ? (
                <li>
                  <Link onClick={handleLogout} to="#">
                    {" "}
                    Sign Out
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link onClick={handleLogin} to="#">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign UP</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
