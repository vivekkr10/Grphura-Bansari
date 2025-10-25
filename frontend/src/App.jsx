import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/salesExecutive/sidebar";
import Dashboard from "./pages/salesExecutive/Dashboard";
import Header from "./components/salesExecutive/Header";
import Prospect from "./pages/salesExecutive/Prospect";
import SalesReport from "./pages/salesExecutive/SalesReport";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/prospect" element={<Prospect />} />
            <Route path="/sales-report" element={<SalesReport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
