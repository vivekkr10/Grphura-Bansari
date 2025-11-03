import React from "react";
import "../../style/salesTeamLead/transferdata.css";

function Teamreport() {
  // const [day, setDay] = useState("");
  // const [teamLeader, setTeamLeader] = useState("");

  // const handleDayChange = (e) => setDay(e.target.value);
  // const handleTeamLeaderChange = (e) => setTeamLeader(e.target.value);

  const transferdata = [
    ...Array(6).fill({
      EmployeeName: "Bold text column",
      Transferdatainno: "Bold text column",
      Date: "Bold text column",
      Transferby: "Bold text column",
      Totaldata: "Bold text column",
    }),
  ];

  return (
    <div className="report-container">
      <div>
        <h2 className="report-title">Transfer Data</h2>
      </div>
      <div className="filters">
         
        <select className="dropdown">
          <option value="">TL/Member Name </option>
          <option value="Monday">Team 1</option>
          <option value="Tuesday">Team 2</option>
          {/* Add more days as needed */}
        </select>
        <select className="dropdown">
          <option value="">Transfer Data in No</option>
          <option value="TL1">TL1</option>
          <option value="TL2">TL2</option>
          {/* Add real team leader names as needed */}
        </select>
      </div>
        <div className="search"><button className="search-btn">Search</button></div>
      <div className="report-table-container">
          <div>
        <h2 className="report-title">Transfer Data History</h2>
      </div>
        <table className="report-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Transfer data in no</th>
              <th>Date</th>
              <th>Transfer By</th>
              <th>Total data in account</th>
            </tr>
          </thead>
          <tbody>
            {transferdata.map((row, idx) => (
                <tr key={idx}>
                  <td className="bold">{row.EmployeeName}</td>
                  <td className="bold">{row.Transferdatainno}</td>
                  <td className="bold">{row.Date}</td>
                  <td className="bold">{row.Transferby}</td>
                  <td className="bold">{row.Totaldata}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teamreport;
