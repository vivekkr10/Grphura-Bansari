import React, { useState } from "react";
import "../../style/finance/financereport.css";
import { DollarSign, ShoppingBag, TrendingUp, CreditCard } from "lucide-react";

function Financereport() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  return (
    <div className="reports-container">
      <h2 className="reports-title">Reports</h2>

      {/* Dropdowns */}
      <div style={{ display: "flex" }}>
        <div style={{
        }}>
          <div className="filters">
            <div className="filter-item">
              <label>Year</label>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Select</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <div className="filter-item">
              <label>Month</label>
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">Select</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
              </select>
            </div>
          </div>

          {/* KPI Boxes */}
          <div className="kpi-cards">
            <div className="kpi-card green">
              <DollarSign size={28} />
              <div>
                <p className="kpi-title">Revenue</p>
                <h3>2.37M</h3>
              </div>
            </div>
            <div className="kpi-card orange">
              <ShoppingBag size={28} />
              <div>
                <p className="kpi-title">COGS</p>
                <h3>2.37M</h3>
              </div>
            </div>

            <div className="kpi-card purple">
              <TrendingUp size={28} />
              <div>
                <p className="kpi-title">Gross Profit</p>
                <h3>2.37M</h3>
              </div>
            </div>
            <div className="kpi-card pink">
              <CreditCard size={28} />
              <div>
                <p className="kpi-title">Expenses</p>
                <h3>2.37M</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="freports-tables">
          <div className="ftable-box">
            <h4>Top Team</h4>
            <table>
              <thead>
                <tr>
                  <th>Sr no.</th>
                  <th>Departments</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>Bold text column</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="ftable-box">
            <h4>Top Services</h4>
            <table>
              <thead>
                <tr>
                  <th>Sr no.</th>
                  <th>Services</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>Bold text column</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          {/* <div className="ftable-box">
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Revenue</th>
                  <th>Net Profit</th>
                  <th>Gross Profit</th>
                  <th>Expenses</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i}>
                    <td>Bold text column</td>
                    <td>Bold text column</td>
                    <td>Bold text column</td>
                    <td>Bold text column</td>
                    <td>Bold text column</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
      {/* <div className="table-box">
          <h4>Top Sales Executive</h4>
          <table>
            <thead>
              <tr>
                <th>Sr no.</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>Bold text column</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
    </div>
  );
}

export default Financereport;
