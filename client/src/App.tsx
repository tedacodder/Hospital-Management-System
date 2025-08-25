import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Userdashboard from "./pages/dashboard/userdashboard";
import Appointment from "./pages/user/appointment";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/auth/Signup";
import Doctorsdb from "./pages/dashboard/Doctorsdashboadr";
import About from "./pages/user/about";
function App() {
  // Render the home component
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doc" element={<Doctorsdb />} />
          <Route path="/home" element={<Userdashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
