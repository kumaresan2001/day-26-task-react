import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditForm from "./pages/EditForm";
import AddForm from "./pages/AddForm";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import Paper from "@mui/material/Paper";

export const url = "https://63ef4f91c59531ccf16ca737.mockapi.io/Products";

function App() {
  const bgstyles = {
    borderRadius: "0px",
    minHeight: "100vh",
    backgroundColor: "pink",
  };
  return (
    <div className="App">
      <Paper sx={bgstyles} elevation={4}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </Paper>
    </div>
  );
}

export default App;
