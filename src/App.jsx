import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditForm from "./pages/EditForm";
import AddForm from "./pages/AddForm";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
export const url = "https://629884def2decf5bb744ac85.mockapi.io/products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
