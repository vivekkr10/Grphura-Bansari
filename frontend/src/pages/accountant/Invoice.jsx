import React from "react";
import "../../style/accountant/Invoice.css";

const Invoice = () => {
    const data = Array(8).fill({
        company: "Bold text column",
        client: "Bold text column",
        email: "Bold text column",
        contact: "Bold text column",
        payment: "Bold text column",
        date: "Bold text column",
    });

    return (
        <div className="invoice-container">
            <h1 className="invoice-title">Invoice</h1>

            <div className="table-wrapper">
                <table className="invoice-table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Client Name</th>
                            <th>Email_id</th>
                            <th>Contact No.</th>
                            <th>Total Payment</th>
                            <th>Starting Date</th>
                            <th>More Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.company}</td>
                                <td>{row.client}</td>
                                <td>{row.email}</td>
                                <td>{row.contact}</td>
                                <td>{row.payment}</td>
                                <td>{row.date}</td>
                                <td>
                                    <button className="view-btn">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invoice;
