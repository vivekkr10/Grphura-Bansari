// src/routes/index.js
import SE_Dashboard from "../pages/salesExecutive/Dashboard";
import SE_Prospect from "../pages/salesExecutive/Prospect";
import SE_Report from "../pages/salesExecutive/Report";
import SE_SalesReport from "../pages/salesExecutive/SalesReport";

import TL_Dashboard from "../pages/salesTeamLead/Dashboard";
import TL_TransferData from "../pages/salesTeamLead/TransferData";
import TL_UntouchedData from "../pages/salesTeamLead/UntouchedData";
// import TL_TeamReport from "../pages/salesTeamLead/TeamReport";
// import TL_Prospect from "../pages/salesTeamLead/Prospect";

import SM_Dashboard from "../pages/salesManager/Dashboard"
import SM_ManagerReport from "../pages/salesManager/managerReport";

export const roleBasedRoutes = {
  salesExecutive: [
    { path: "/dashboard", element: <SE_Dashboard /> },
    { path: "/prospect", element: <SE_Prospect /> },
    { path: "/sales-report", element: <SE_SalesReport /> },
    { path: "/report", element: <SE_Report /> },
    { path: "*", element: <h2>Page Not Found</h2> },
  ],

  salesTeamLead: [
  { path: "/dashboard", element: <TL_Dashboard /> },
  { path: "/transfer-data", element: <TL_TransferData /> },
  { path: "/untouched-data", element: <TL_UntouchedData /> },
  // { path: "/team-report", element: <TL_TeamReport /> },
  ],

  salesManager: [
  { path: "/dashboard", element: <SM_Dashboard /> },
  { path: "/manager-report", element: <SM_ManagerReport /> },
  ],
  
};
