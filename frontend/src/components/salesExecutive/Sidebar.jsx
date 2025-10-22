import React from "react";
import logo from "../../assets/salesExecutive/logo.png";
import profile from "../../assets/salesExecutive/profile.png";
import dashboard from "../../assets/salesExecutive/dashboard.png";
import prospect from "../../assets/salesExecutive/prospect.png";
import report from "../../assets/salesExecutive/report.png";
import salesReport from "../../assets/salesExecutive/salesReport.png";
import userData from "../../assets/salesExecutive/userData.png";
import "../salesExecutive/sidebar.css";

const Sidebar = () => {
  return (
    <div id="sidebar-container">
      <div id="sidebar-header">
        <img src={logo} alt="Graphura Logo" id="logo-img" />
      </div>

      <div id="profile-section">
        <img src={profile} alt="Profile Icon" id="profile-img" />
        <div id="profile-details">
          <h1 id="profile-name">Name</h1>
          <p id="profile-title">Sales Executive</p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul id="nav-menu">
        <li className="nav-item">
          <img src={dashboard} alt="Dashboard Icon" id="nav-icon" />
          <a href="#dashboard">Dashboard</a>
        </li>

        <li className="nav-item">
          <img src={userData} alt="User Data Icon" id="nav-icon" />
          <a href="#userData">User Data</a>
        </li>
        <li className="nav-item">
          <img src={prospect} alt="Prospect Icon" id="nav-icon" />
          <a href="#prospect">Prospect</a>
        </li>
        <li className="nav-item">
          <img src={report} alt="Report Icon" id="nav-icon" />
          <a href="#report">Report</a>
        </li>
        <li className="nav-item">
          <img src={salesReport} alt="Sales Report Icon" id="nav-icon" />
          <a href="#salesReport">Sales Report</a>
        </li>
      </ul> 
    </div>
  );
};

export default Sidebar;
