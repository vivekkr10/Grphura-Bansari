import "./App.css";
import Sidebar from "./components/salesExecutive/sidebar";
import SalesReport from "./pages/salesExec/SalesReport";
import {Routes, Route } from "react-router-dom";



function App() {
  return (
    <div style={{ display: "flex", justifyContent: 'space-between' }}>
      <Sidebar />
      <div style={{ flex: 1,width:'100%' }}>

        <Routes>
          <Route path="/"  />
          <Route path="/sales-report" element={<SalesReport />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;