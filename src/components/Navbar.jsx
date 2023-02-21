import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

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
