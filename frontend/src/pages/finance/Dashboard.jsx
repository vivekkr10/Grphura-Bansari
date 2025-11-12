import React from "react";
import "../../style/finance/dashboard.css";
import sales from "../../assets/finance/dashboard/sales.png";
import sellingExpanse from "../../assets/finance/dashboard/sellingExpanse.png";
import ebitda from "../../assets/finance/dashboard/ebitda.png";
import interest from "../../assets/finance/dashboard/interest.png";
import deprecation from "../../assets/finance/dashboard/deprecation.png";
import revenue from "../../assets/finance/dashboard/revenue.png";
import cogs from "../../assets/finance/dashboard/cogs.png";
import grossProfit from "../../assets/finance/dashboard/grossProfit.png";
import expenses from "../../assets/finance/dashboard/expenses.png";
import netProfit from "../../assets/finance/dashboard/netProfit.png";
import earningBeforeTax from "../../assets/finance/dashboard/earningBeforeTax.png";
import tax from "../../assets/finance/dashboard/tax.png";
import equityShares from "../../assets/finance/dashboard/equityShares.png";
import earningPerShare from "../../assets/finance/dashboard/earningPerShare.png";
import dividendPerShare from "../../assets/finance/dashboard/dividendPerShare.png";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  return (
    <div>
      <main id="finance-main-content">
        <section id="finance-dashboard">
          <div id="finance-container">
            <h1>Dashboard</h1>
            <div id="dropdowns">
              <div style={{ minWidth: "250px", flex: "1" }}>
                <select className="form-select">
                  <option>Year</option>
                </select>
              </div>
              <div style={{ minWidth: "250px", flex: "1" }}>
                <select className="form-select">
                  <option>Month</option>
                </select>
              </div>
              <div style={{ minWidth: "250px", flex: "1" }}>
                <select className="form-select">
                  <option>Department</option>
                </select>
              </div>
              <Button id="btn">Submit</Button>
            </div>
            <div id="dashboard-cards">
              <div id="card" style={{borderLeft:"5px solid #35CC7B"}}>
                <div id="text">
                  <h6 style={{color:"#35CC7B"}}>SALES</h6>
                  <h3>2.37M</h3>
                </div>
                <img id="cards-img" src={sales} alt="" />
              </div>
              <div id="card" style={{borderLeft:"5px solid #FF893F"}}>
                <div id="text">
                  <h6 style={{color:"#FF893F"}}>SELLING & GENERAL EXPENSE</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={sellingExpanse} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #B256FF"}}>
                <div id="text">
                  <h6 style={{color:"#B256FF"}}>EBDITA</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={ebitda} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #FB57A1"}}>
                <div id="text">
                  <h6 style={{color:"#FB57A1"}}>INTEREST</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={interest} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #42B3E9"}}>
                <div id="text">
                  <h6 style={{color:"#42B3E9"}}>DEPRECIATION / AMORTIZATION (NON - TANGIBLE)</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={deprecation} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #35CC7B"}}>
                <div id="text">
                  <h6 style={{color:"#35CC7B"}}>REVENUE</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={revenue} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #FF893F"}}>
                <div id="text">
                  <h6 style={{color:"#FF893F"}}>COGS</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={cogs} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #B256FF"}}>
                <div id="text">
                  <h6 style={{color:"#B256FF"}}>GROSS PROFIT</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={grossProfit} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #FB57A1"}}>
                <div id="text">
                  <h6 style={{color:"#FB57A1"}}>EXPENSES</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={expenses} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #42B3E9"}}>
                <div id="text">
                  <h6 style={{color:"#42B3E9"}}>NET PROFIT</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={netProfit} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #35CC7B"}}>
                <div id="text">
                  <h6 style={{color:"#35CC7B"}}>EARNINGS BEFORE TAX</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={earningBeforeTax} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #FF893F"}}>
                <div id="text">
                  <h6 style={{color:"#FF893F"}}>TAX</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={tax} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #B256FF"}}>
                <div id="text">
                  <h6 style={{color:"#B256FF"}}>NO. OF EQUITY SHARES</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={equityShares} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #FB57A1"}}>
                <div id="text">
                  <h6 style={{color:"#FB57A1"}}>EARNING PER SHARE</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={earningPerShare} alt="" />
                </div>
              </div>
              <div id="card" style={{borderLeft:"5px solid #42B3E9"}}>
                <div id="text">
                  <h6 style={{color:"#42B3E9"}}>DIVIDEND PER SHARE</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={dividendPerShare} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="texts">
          <div id="texts-container">
            <div id="point-text">
              <h3>Transction</h3>
              <ul>
                <li>XYZ company has done payment of 4000/- on 29 th June at 01:08 pm.</li>
                <li>XYZ company has done payment of 4000/- on 29 th June at 01:08 pm.</li>
                <li>XYZ company has done payment of 4000/- on 29 th June at 01:08 pm.</li>
                <li>XYZ company has done payment of 4000/- on 29 th June at 01:08 pm.</li>
              </ul>
            </div>
            <div id="point-text">
              <h3>Pending Payment</h3>
              <ul>
                <li>XYZ company's 4000/- payment is pending.</li>
                <li>XYZ company's 4000/- payment is pending.</li>
                <li>XYZ company's 4000/- payment is pending.</li>
                <li>XYZ company's 4000/- payment is pending.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
