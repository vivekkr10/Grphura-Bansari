// src/routes/index.js
import SE_Dashboard from "../pages/salesExecutive/Dashboard";
import SE_Prospect from "../pages/salesExecutive/Prospect";
import SE_Report from "../pages/salesExecutive/Report";
import SE_SalesReport from "../pages/salesExecutive/SalesReport";

import TL_Dashboard from "../pages/salesTeamLead/Dashboard";
import TL_TransferData from "../pages/salesTeamLead/TransferData";
import TL_UntouchedData from "../pages/salesTeamLead/UntouchedData";
import TL_TeamMember from "../pages/salesTeamLead/TeamMember";
import TL_ProspectForm from "../pages/salesTeamLead/ProspectForm";
// import TL_TeamReport from "../pages/salesTeamLead/TeamReport";
// import TL_Prospect from "../pages/salesTeamLead/Prospect";

import SM_Dashboard from "../pages/salesManager/Dashboard"
import SM_ManagerReport from "../pages/salesManager/managerReport";
import TotalSales from "../pages/salesManager/TotalSales";
import Salary from "../pages/salesManager/Salary";

import M_Dashboard from "../pages/managementTL/Dashboard";
import M_TeamMember from "../pages/managementTL/TeamMember";
import M_Review from "../pages/managementTL/Review";
import M_Report from "../pages/managementTL/Report";

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
  { path: "/team-member", element: <TL_TeamMember /> },
  { path: "/prospect-form", element: <TL_ProspectForm /> },
  // { path: "/team-report", element: <TL_TeamReport /> },
  ],

  salesManager: [
  { path: "/dashboard", element: <SM_Dashboard /> },
  { path: "/manager-report", element: <SM_ManagerReport /> },
  { path: "/total-sales", element: <TotalSales /> },
  { path: "/salary", element: <Salary /> },
  ],
  
  managementTL: [
  { path: "/dashboard", element: <M_Dashboard /> },
  { path: "/team-member", element: <M_TeamMember /> },
  { path: "/review", element: <M_Review /> },
  { path: "/report", element: <M_Report /> },
  ],
  
};
