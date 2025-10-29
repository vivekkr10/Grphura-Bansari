// src/routes/index.js
import SE_Dashboard from "../pages/salesExecutive/Dashboard";
import SE_Prospect from "../pages/salesExecutive/Prospect";
import SE_SalesReport from "../pages/salesExecutive/SalesReport";

import TL_Dashboard from "../pages/salesTeamLead/Dashboard";
// import TL_TeamReport from "../pages/salesTeamLead/TeamReport";
// import TL_Prospect from "../pages/salesTeamLead/Prospect";

export const roleBasedRoutes = {
  salesExecutive: [
    { path: "/dashboard", element: <SE_Dashboard /> },
    { path: "/prospect", element: <SE_Prospect /> },
    { path: "/sales-report", element: <SE_SalesReport /> },
    { path: "*", element: <h2>Page Not Found</h2> },
  ],

  salesTeamLead: [
  { path: "/dashboard", element: <TL_Dashboard /> },
  // { path: "/prospect", element: <TL_Prospect /> },
  // { path: "/team-report", element: <TL_TeamReport /> },
  ],

  // ... add remaining 9 roles here in the same way
};
