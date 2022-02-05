import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "materialize-css";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux";
const App = () => {
  const { login } = useSelector((state) => state.data);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {!login ? <Home /> : <Dashboard />}
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar /> {!login ? <SignUp /> : <Dashboard />}
            </>
          }
        />

        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              {!login ? <Home /> : <Dashboard />}
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
