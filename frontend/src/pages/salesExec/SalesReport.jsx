import React from "react";


const SalesReport = () => {
  const data = [
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Select",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email: "Bold text column",
      contact: "Bold text column",
      services: "Bold text column",
      date: "Bold text column",
    },
  ];

  return (
    <div className="p-4" style={{ backgroundColor: "#fff" }}>
      {/* Top right buttons */}
      <div className="d-flex justify-content-end gap-2 mb-4">
        <button className="btn text-white" style={{backgroundColor: "#3158c9"}}>Proposals</button>
        <button className="btn text-white" style={{backgroundColor: "#3158c9"}}>Custom Plan</button>
        <button className="btn text-white" style={{backgroundColor: "#3158c9"}}>Work Order</button>
        <button className="btn text-white" style={{backgroundColor: "#3158c9"}}>My Profile</button>
      </div>

      {/* Heading */}
      <h3 className="fw-bold mb-4 text-secondary ">Sales Report</h3>

      {/* Table container */}
      <div className="d-flex justify-content-start w-100">
        <div
          className="table-responsive shadow-lg p-4 bg-white rounded w-100"
          style={{
            width: "100%"
          }}
        >
          <table className="table table-bordered align-middle text-center text-secondary opacity-75 mb-0 w-100">
            <thead className="table-light">
              <tr>
                <th className="fw-bold">Company Name</th>
                <th className="fw-bold">Client Name</th>
                <th className="fw-bold">Email_id</th>
                <th className="fw-bold">Contact no.</th>
                <th className="fw-bold">Services</th>
                <th className="fw-bold">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{row.companyName}</td>
                  <td className="fw-semibold">{row.clientName}</td>
                  <td className="fw-semibold">{row.email}</td>
                  <td className="fw-semibold">{row.contact}</td>
                  <td className="fw-semibold">{row.services}</td>
                  <td className="fw-semibold">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;