import React from "react";
import "../../style/managementTL/PayOut.css";
import calender from "../../assets/managementTL/PayOut/calender.png"
import money from "../../assets/managementTL/PayOut/money.png"

function PayOut() {
  return (
    <>
      <main>
         <h1>Pay Out</h1>
        <div className="container">
          <div className="top">
            <div className="left">
              <div className="select">
                <select id="employee" name="employee">
                  <option value="" disabled selected>
                    Select Employee
                  </option>
                  <option value="emp1">Rahul Sharma</option>
                  <option value="emp2">Ajay Kumar</option>
                  <option value="emp3">Neha Verma</option>
                  <option value="emp4">Suresh Singh</option>
                </select>
              </div>

              <div class="filters">
                <div class="field">
                  <span>Start Date</span>
                  <span class="icon">
                    <img src={calender} alt="Calendar Icon" />
                  </span>
                </div>
                <div class="field">
                  <span>End Date</span>
                  <span class="icon">
                    <img src={calender} alt="Calendar Icon" />
                  </span>
                </div>
                <div class="actions">
                  <button class="field-btn">Search</button>
                </div>
              </div>
            </div>

            <aside class="stats">
              <div class="stat-card blue">
                <div class="stat-title">TOTAL PAY OUT</div>
                <div class="stat-body">
                  <div class="stat-number">400000</div>
                  <div class="rupee"><img src={money} alt="" /></div>
                </div>
              </div>

              <div class="stat-card green">
                <div class="stat-title">LAST MONTH PAY OUT</div>
                <div class="stat-body">
                  <div class="stat-number">500000</div>
                  <div class="rupee"><img src={money} alt="" /></div>
                </div>
              </div>
            </aside>
          </div>

          <div class="table-card">
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
  );
}

export default PayOut;
