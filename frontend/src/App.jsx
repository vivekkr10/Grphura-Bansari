import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { roleBasedRoutes } from "./routes";

// Import all role-based headers and sidebars
import SalesExecutiveHeader from "./components/salesExecutive/Header";
import SalesExecutiveSidebar from "./components/salesExecutive/Sidebar";

import SalesTeamLeadHeader from "./components/salesTeamLead/Header";
import SalesTeamLeadSidebar from "./components/salesTeamLead/Sidebar";

import SalesManagerSidebar from "./components/salesManager/Sidebar";
import SalesManagerHeader from "./components/salesManager/Header";

import ManagementTLSidebar from "./components/managementTL/sidebar";
import ManagementTLHeader from "./components/managementTL/header";

import ManagerManagementSidebar from "./components/managerManagement/Sidebar";
import ManagerManagementHeader from "./components/managerManagement/Header";

function App() {
  const role = localStorage.getItem("role") || "managerManagement"; // Example fallback
  const currentRoutes = roleBasedRoutes[role] || [];

  // Choose header and sidebar dynamically
  const renderLayout = () => {
    switch (role) {
      case "salesExecutive":
        return (
          <>
            <SalesExecutiveSidebar />
            <div>
              <SalesExecutiveHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "salesTeamLead":
        return (
          <>
            <SalesTeamLeadSidebar />
            <div>
              <SalesTeamLeadHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );
      case "salesManager":
        return (
          <>
            <SalesManagerSidebar />
            <div>
              <SalesManagerHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "managementTL":
        return (
          <>
            <ManagementTLSidebar />
            <div>
              <ManagementTLHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      case "managerManagement":
        return (
          <>
            <ManagerManagementSidebar />
            <div>
              <ManagerManagementHeader />
              <Routes>
                {currentRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </>
        );

      // 🧩 Add other 9 roles below in the same pattern
      default:
        return <div>Role not found</div>;
    }
  };

  return <Router>{renderLayout()}</Router>;
}

export default App;
