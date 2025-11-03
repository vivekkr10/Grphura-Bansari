import React from "react";

const TotalSales = () => {
  const data = [
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Select",
      Services: "Select",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
    {
      companyName: "Bold text column",
      clientName: "Bold text column",
      email_id: "Bold text column",
      contactNo: "Bold text column",
      Date: "Bold text column",
      Amount: "Bold text column",
      TLname: "Bold text column",
      SalesExecutive: "Bold text column",
      Services: "Bold text column",
      Activity: "Button",
    },
  ];

  return (
    <div
      className="p-1 mt-5"
      style={{
        backgroundColor: "#fff",
        marginLeft: "300px",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Transfer Data Section */}
      <h3 className="fw-bold mb-4 text-secondary">Total Sales</h3>

      {/* Centered dropdowns and button */}
      <div className="d-flex flex-column mb-5 mx-4">
        {/* Dropdowns Row */}
        <div
          className="d-flex align-items-center justify-content-between mb-4"
          style={{ gap: "20px" }}
        >
          <div className="d-flex" style={{ gap: "20px", flex: "1" }}>
            <select
              className="form-select shadow-sm fw-bold"
              style={{ width: "100%", maxWidth: "450px", height: "50px" }}
            >
              <option>Month</option>
            </select>

            <select
              className="form-select shadow-sm fw-bold"
              style={{ width: "100%", maxWidth: "450px", height: "50px" }}
            >
              <option>Team Leader Name</option>
            </select>
          </div>

          <button
            className="btn btn-primary px-4"
            style={{
              whiteSpace: "nowrap",
              backgroundColor: "#3158c9",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Total Sales */}

      <div className="d-flex justify-content-center mx-4">
        <div
          className="table-responsive shadow-lg p-4 bg-white rounded"
          style={{
            width: "98%",
            maxWidth: "1200px",
            padding: "0px 20px",
            maxHeight: "300px", // 👈 fixed height for 5 rows
            minHeight: "380px",
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            marginRight: "6.5%",
          }}
        >
          <table
            className="table table-bordered align-middle text-center text-secondary opacity-75 mb-0"
            style={{ minWidth: "1200px", lineHeight: "2.2" }}
          >
            <thead className="table-light">
              <tr>
                <th className="fw-bold">Company Name</th>
                <th className="fw-bold">Client Name</th>
                <th className="fw-bold">Email_id</th>
                <th className="fw-bold">Contact no.</th>
                <th className="fw-bold">Date</th>
                <th className="fw-bold">Amount</th>
                <th className="fw-bold">TL Name</th>
                <th className="fw-bold">Sales Executive</th>
                <th className="fw-bold">Services</th>
                <th className="fw-bold">Activity</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{row.companyName}</td>
                  <td className="fw-semibold">{row.clientName}</td>
                  <td className="fw-semibold">{row.email_id}</td>
                  <td className="fw-semibold">{row.contactNo}</td>
                  <td className="fw-semibold">{row.Date}</td>
                  <td className="fw-semibold">{row.Amount}</td>
                  <td className="fw-semibold">{row.TLname}</td>
                  <td className="fw-semibold">{row.SalesExecutive}</td>
                  <td className="fw-semibold">{row.Services}</td>
                  <td>
                    <button
                      className="btn btn-primary d-flex justify-content-center align-items-center"
                      style={{
                        padding: "1px 1px 1px 2px",
                        whiteSpace: "nowrap",
                        height: "28px", // height badha di
                        fontSize: "13px",
                        backgroundColor: "#0043fcff",
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
