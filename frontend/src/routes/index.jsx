// src/routes/index.js
import SE_Dashboard from "../pages/salesExecutive/Dashboard";
import SE_Prospect from "../pages/salesExecutive/Prospect";
import SE_SalesReport from "../pages/salesExecutive/SalesReport";
import Report from "../pages/salesExecutive/Report"

import TL_Dashboard from "../pages/salesTeamLead/Dashboard";
import Teamreport from "../pages/salesTeamLead/Teamreport";
import Transferdata from "../pages/salesTeamLead/Transferdata"
// import Teamreport from "../pages/salesTeamLead/Teamreport";
// import TL_Prospect from "../pages/salesTeamLead/Prospect";

export const roleBasedRoutes = {
  salesExecutive: [
    { path: "/dashboard", element: <SE_Dashboard /> },
    { path: "/prospect", element: <SE_Prospect /> },
    { path: "/sales-report", element: <SE_SalesReport /> },
    { path: "/report", element: <Report/> },
  ],

  salesTeamLead: [
  { path: "/dashboard", element: <TL_Dashboard /> },
    { path: "/teamreport", element: <Teamreport/> },
  { path: "/transfer-data", element: <Transferdata /> },
  { path: "/report", element: <Teamreport /> },
  ],

  // ... add remaining 9 roles here in the same way
};
