import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PendingRequests from "./pages/PendingRequests";
import In_touchRequests from "./pages/In_touchRequests";
import ApprovedRequests from "./pages/ApprovedRequets";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pending-req" element={<PendingRequests />} />
        <Route path="/approved-req" element={<ApprovedRequests />} />
        <Route path="/in-touch-req" element={<In_touchRequests />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
