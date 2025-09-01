import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Userdashboard from "./pages/dashboard/userdashboard";
import Appointment from "./pages/user/appointment";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/auth/Signup";
import Doctorsdb from "./pages/dashboard/Doctorsdashboadr";
import About from "./pages/user/about";
import Emergency from "./pages/user/emergency";
import { ThemeProvider } from "./components/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  const [isloging, setloging] = useState<boolean>(false);
  const handleLogin = (status: boolean) => {
    setloging(status);
  };
  // Render the home component
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/login"
              element={
                isloging ? (
                  <Navigate to="/home"></Navigate>
                ) : (
                  <Login onlogin={handleLogin} />
                )
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/doc" element={<Doctorsdb />} />
            <Route path="/home" element={<Userdashboard />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/About" element={<About />} />
            <Route path="/emergency" element={<Emergency />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
