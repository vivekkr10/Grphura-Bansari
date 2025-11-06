import React from 'react';
import "../../style/managementEmployee/PayOut.css";
import calender from "../../assets/managementEmployee/PayOut/calender.png";
import money from "../../assets/managementEmployee/PayOut/money.png";


function PayOut() {
  return (
    <>
    <main>
        <div className="container">
          <div className="top">
            <div className="left">
              <h1>Pay Out</h1>

              <div className="filters">
                <div className="field">
                  <span>Start Date</span>
                  <span className="icon"><img src={calender} alt="Calendar Icon" /></span>
                </div>
                <div className="field">
                  <span>End Date</span>
                  <span className="icon"><img src={calender} alt="Calendar Icon" /></span>
                </div>
                <div className="actions">
                  <button className="field-btn">Search</button>
                </div>
              </div>
            </div>

            <aside className="stats">
              <div className="stat-card blue">
                <div className="stat-title">TOTAL PAY OUT</div>
                <div className="stat-body">
                  <div className="stat-number">4</div>
                  <div className="rupee"><img src={money} alt="" /></div>
                </div>
              </div>

              <div className="stat-card green">
                <div className="stat-title">LAST MONTH PAY OUT</div>
                <div className="stat-body">
                  <div className="stat-number">5</div>
                  <div className="rupee"><img src={money} alt="" /></div>
                </div>
              </div>
            </aside>
          </div>

          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Invoice No.</th>
                  <th>Services</th>
                  <th>Total Amount</th>
                  <th>Completed Date</th>
                  <th>Project File</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>Bold Text Columns</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default PayOut