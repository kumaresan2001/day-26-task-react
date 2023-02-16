import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-dark navbar-fixed-top p-2">
      <div className="container-fluid mx-5 px-5">
        <div className="navbar-header">
          <button
            className="navbar-brand btn btn-dark"
            onClick={() => navigate("/")}
          >
            Products
          </button>
        </div>

        <div className="nav navbar-nav flex-row gap-3">
          <button className="btn btn-dark" onClick={() => navigate("/")}>
            Home
          </button>
          <button
            className="btn btn-dark"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}
