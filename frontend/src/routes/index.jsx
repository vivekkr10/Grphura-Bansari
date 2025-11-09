// src/routes/index.js

// salesExecutive
import SE_Dashboard from "../pages/salesExecutive/Dashboard";
import SE_Prospect from "../pages/salesExecutive/Prospect";
import SE_Report from "../pages/salesExecutive/Report";
import SE_SalesReport from "../pages/salesExecutive/SalesReport";
import SE_UserData from "../pages/salesExecutive/UserData";

// salesTeamLead
import TL_Dashboard from "../pages/salesTeamLead/Dashboard";
import TL_TransferData from "../pages/salesTeamLead/TransferData";
import TL_UntouchedData from "../pages/salesTeamLead/UntouchedData";
import TL_TeamMember from "../pages/salesTeamLead/TeamMember";
import TL_ProspectForm from "../pages/salesTeamLead/ProspectForm";
import TL_Prospect from "../pages/salesTeamLead/Prospect";
import TL_Report from "../pages/salesTeamLead/Report"

// salesManager
import SM_Dashboard from "../pages/salesManager/Dashboard"
import SM_ManagerReport from "../pages/salesManager/managerReport";
import SM_TotalSales from "../pages/salesManager/TotalSales";
import SM_Salary from "../pages/salesManager/Salary";
import SM_UntouchedData from "../pages/salesManager/UntouchedData";
import SM_ProspectForm from "../pages/salesManager/ProspectForm";
import SM_TeamMember from "../pages/salesManager/TeamMember";
import SM_TeamReport from "../pages/salesManager/Report"
import SM_TransferData from "../pages/salesManager/Transferdata"

// managementTL
import M_Dashboard from "../pages/managementTL/Dashboard";
import M_MyProjects from "../pages/managementTL/MyProjects";
import M_TransferProjects from "../pages/managementTL/TransferProject";
import M_TeamMember from "../pages/managementTL/TeamMember";
import M_Report from "../pages/managementTL/Report";
import M_Payout from "../pages/managementTL/Payout";
import M_Review from "../pages/managementTL/Review";


// managementEmployee
import ME_Dashboard from "../pages/managementEmployee/Dashboard"
import ME_CompleteProjects from "../pages/managementEmployee/CompleteProjects";
import ME_PayOut from "../pages/managementEmployee/PayOut";
import ME_Help from "../pages/managementEmployee/Help"

// managerManagement
import MM_Dashboard from "../pages/managerManagement/Dashboard";
import MM_ManagerReport from "../pages/managerManagement/managerReport";
import MM_TeamReport from "../pages/managerManagement/Mgmtteamreport";
import MM_ManagerSalary from "../pages/managerManagement/ManagerSalary";

import MM_RecieveData from "../pages/managerManagement/RecieveData";
import MM_Review from "../pages/managerManagement/Review";
import MM_TotalProjects from "../pages/managerManagement/TotalProjects";
import MM_TransferDataFDBK from "../pages/managerManagement/TransferDataFDBK";
import MM_WorkingProject from "../pages/managerManagement/WorkingProject";

// feedbackManager
import FM_Dashboard from "../pages/feedbackManager/Dashboard";
import FM_Report from "../pages/feedbackManager/Fteamreport"
import FM_Feedbacks from "../pages/feedbackManager/Feedbacks";
import FM_Salary from "../pages/feedbackManager/FeedbackSalary";



// feedbackEmployee
import FE_Dashboard from "../pages/feedBackEmployee/Dashboard";
import FE_Salary from "../pages/feedBackEmployee/Salary"
import FE_Feedbacks from "../pages/feedBackEmployee/Feedbacks";

//feedbackManager
import FM_Complaint from "../pages/feedbackManager/complaints";

export const roleBasedRoutes = {
  salesExecutive: [
    { path: "/dashboard", element: <SE_Dashboard /> },
    { path: "/prospect", element: <SE_Prospect /> },
    { path: "/sales-report", element: <SE_SalesReport /> },
    { path: "/report", element: <SE_Report /> },
    { path: "/user-data", element: <SE_UserData /> },
    { path: "*", element: <h2>Page Not Found</h2> },
  ],

  salesTeamLead: [
  { path: "/dashboard", element: <TL_Dashboard /> },
  { path: "/transfer-data", element: <TL_TransferData /> },
  { path: "/untouched-data", element: <TL_UntouchedData /> },
  { path: "/prospect", element: <TL_Prospect /> },
  { path: "/team-member", element: <TL_TeamMember /> },
  { path: "/prospect-form", element: <TL_ProspectForm /> },
  { path: "/report", element: <TL_Report /> },
  ],

  salesManager: [
  { path: "/dashboard", element: <SM_Dashboard /> },
  { path: "/manager-report", element: <SM_ManagerReport /> },
  { path: "/total-sales", element: <SM_TotalSales /> },
  { path: "/salary", element: <SM_Salary /> },
  { path: "/untouched-data", element: <SM_UntouchedData /> },
  { path: "/prospect-form", element: <SM_ProspectForm /> },
  { path: "/team-member", element: <SM_TeamMember /> },
  { path: "/report", element: <SM_TeamReport /> },
  { path: "/transfer-data", element: <SM_TransferData /> },
  ],
  
  managementTL: [
  { path: "/dashboard", element: <M_Dashboard /> },
  { path: "/projects", element: <M_MyProjects /> },
  { path: "/transfer-projects", element: <M_TransferProjects /> },
  { path: "/report", element: <M_Report /> },
  { path: "/team-member", element: <M_TeamMember /> },
  { path: "/payout", element: <M_Payout /> },
  { path: "/review", element: <M_Review /> },
  ],

  managementEmployee: [
  { path: "/dashboard", element: <ME_Dashboard /> },
  { path: "/completed-projects", element: <ME_CompleteProjects /> },
  { path: "/payout", element: <ME_PayOut /> },
  { path: "/help", element: <ME_Help /> },
  ],

  managerManagement: [
  { path: "/dashboard", element: <MM_Dashboard /> },
  { path: "/manager-report", element: <MM_ManagerReport /> },

  // { path: "/team-member", element: <M_TeamMember /> },
  // { path: "/review", element: <M_Review /> },
    { path: "/report", element: <MM_TeamReport /> },
    { path: "/salary", element: <MM_ManagerSalary /> },
  { path: "/recived-data", element: <MM_RecieveData /> },
  { path: "/review", element: <MM_Review /> },
  { path: "/total-projects", element: <MM_TotalProjects /> },
  { path: "/transfer-data-to-feedback", element: <MM_TransferDataFDBK /> },
  { path: "/working-projects", element: <MM_WorkingProject /> },
  ],

  feedbackManager: [
  { path: "/dashboard", element: <FM_Dashboard /> },
  { path: "/salary", element: <FM_Salary /> },
  { path: "/report", element: <FM_Report /> },
  { path: "/feedbacks", element: <FM_Feedbacks /> },
  {path: "/complaints", element: <FM_Complaint/>}
  ],

  feedbackEmployee: [
  { path: "/dashboard", element: <FE_Dashboard /> },
    { path: "/salary", element: <FE_Salary /> },
    { path: "/feedbacks", element: <FE_Feedbacks /> },
  ],

};
