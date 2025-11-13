"use client";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Rectangle,
} from "recharts";
// import { BarRectangleItem } from "recharts/types/cartesian/Bar";
import React, { useState } from "react";
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
  const [data] = useState([
    {
      name: "Jan",
      Revenue: 1000000,
      pv: 2400,
      amt: 2400,
      y2025: 2200000,
      y2026: 500000,
    },
    {
      name: "Feb",
      Revenue: 2000000,
      pv: 1398,
      amt: 2210,
      y2025: 2400000,
      y2026: 1200000,
    },
    {
      name: "Mar",
      Revenue: 1500000,
      pv: 9800,
      amt: 2290,
      y2025: 2600000,
      y2026: 800000,
    },
    {
      name: "Apr",
      Revenue: 2500000,
      pv: 3908,
      amt: 2000,
      y2025: 3000000,
      y2026: 1400000,
    },
    {
      name: "May",
      Revenue: 1590860,
      pv: 4800,
      amt: 2181,
      y2025: 3200000,
      y2026: 1600000,
    },
    {
      name: "Jun",
      Revenue: 100000,
      pv: 3800,
      amt: 2500,
      y2025: 1800000,
      y2026: 700000,
    },
    {
      name: "Jul",
      Revenue: 1300000,
      pv: 4300,
      amt: 2100,
      y2025: 2700000,
      y2026: 900000,
    },
    {
      name: "Aug",
      Revenue: 2800000,
      pv: 4300,
      amt: 2100,
      y2025: 3500000,
      y2026: 1700000,
    },
    {
      name: "Sep",
      Revenue: 5000000,
      pv: 4300,
      amt: 2100,
      y2025: 4200000,
      y2026: 2000000,
    },
    {
      name: "Oct",
      Revenue: 3500000,
      pv: 4300,
      amt: 2100,
      y2025: 3800000,
      y2026: 1500000,
    },
    {
      name: "Nov",
      Revenue: 4500000,
      pv: 4300,
      amt: 2100,
      y2025: 4400000,
      y2026: 1900000,
    },
    {
      name: "Dec",
      Revenue: 6000000,
      pv: 4300,
      amt: 2100,
      y2025: 5000000,
      y2026: 2500000,
    },
  ]);

  const fullMonths = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (_, index) => {
    setActiveIndex(index);
  };
  const activeItem = data[activeIndex];

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
              <div id="card" style={{ borderLeft: "5px solid #35CC7B" }}>
                <div id="text">
                  <h6 style={{ color: "#35CC7B" }}>SALES</h6>
                  <h3>2.37M</h3>
                </div>
                <img id="cards-img" src={sales} alt="" />
              </div>
              <div id="card" style={{ borderLeft: "5px solid #FF893F" }}>
                <div id="text">
                  <h6 style={{ color: "#FF893F" }}>
                    SELLING & GENERAL EXPENSE
                  </h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={sellingExpanse} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #B256FF" }}>
                <div id="text">
                  <h6 style={{ color: "#B256FF" }}>EBDITA</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={ebitda} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #FB57A1" }}>
                <div id="text">
                  <h6 style={{ color: "#FB57A1" }}>INTEREST</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={interest} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #42B3E9" }}>
                <div id="text">
                  <h6 style={{ color: "#42B3E9" }}>
                    DEPRECIATION / AMORTIZATION (NON - TANGIBLE)
                  </h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={deprecation} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #35CC7B" }}>
                <div id="text">
                  <h6 style={{ color: "#35CC7B" }}>REVENUE</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={revenue} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #FF893F" }}>
                <div id="text">
                  <h6 style={{ color: "#FF893F" }}>COGS</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={cogs} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #B256FF" }}>
                <div id="text">
                  <h6 style={{ color: "#B256FF" }}>GROSS PROFIT</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={grossProfit} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #FB57A1" }}>
                <div id="text">
                  <h6 style={{ color: "#FB57A1" }}>EXPENSES</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={expenses} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #42B3E9" }}>
                <div id="text">
                  <h6 style={{ color: "#42B3E9" }}>NET PROFIT</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={netProfit} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #35CC7B" }}>
                <div id="text">
                  <h6 style={{ color: "#35CC7B" }}>EARNINGS BEFORE TAX</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={earningBeforeTax} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #FF893F" }}>
                <div id="text">
                  <h6 style={{ color: "#FF893F" }}>TAX</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={tax} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #B256FF" }}>
                <div id="text">
                  <h6 style={{ color: "#B256FF" }}>NO. OF EQUITY SHARES</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={equityShares} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #FB57A1" }}>
                <div id="text">
                  <h6 style={{ color: "#FB57A1" }}>EARNING PER SHARE</h6>
                  <h3>2.37M</h3>
                </div>
                <div id="vector-img">
                  <img id="cards-img" src={earningPerShare} alt="" />
                </div>
              </div>
              <div id="card" style={{ borderLeft: "5px solid #42B3E9" }}>
                <div id="text">
                  <h6 style={{ color: "#42B3E9" }}>DIVIDEND PER SHARE</h6>
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
                <li>
                  XYZ company has done payment of 4000/- on 29 th June at 01:08
                  pm.
                </li>
                <li>
                  XYZ company has done payment of 4000/- on 29 th June at 01:08
                  pm.
                </li>
                <li>
                  XYZ company has done payment of 4000/- on 29 th June at 01:08
                  pm.
                </li>
                <li>
                  XYZ company has done payment of 4000/- on 29 th June at 01:08
                  pm.
                </li>
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
        <section id="charts">
          <div id="charts-container">
            <h3>Revenue Comparison by Month</h3>

            {/* RESPONSIVE WRAPPER */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                {/* Y AXIS LEFT */}
                <YAxis
                  orientation="left"
                  tickFormatter={(value) => (value / 1000000).toFixed(1) + "M"}
                />

                {/* X AXIS BOTTOM */}
                <XAxis dataKey="name" orientation="bottom" />

                <Tooltip
                  formatter={(value) => [
                    `${(value / 1000000).toFixed(1)}M`,
                    "Revenue",
                  ]}
                  labelFormatter={(label) => fullMonths[label]}
                />

                <Bar dataKey="Revenue" onClick={handleClick}>
                  {data.map((_entry, index) => (
                    <Cell
                      cursor="pointer"
                      key={`cell-${index}`}
                      fill={index === activeIndex ? "#CECCCF" : "#31D076"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <p className="content">
              {`Revenue of "${activeItem.name}": ${activeItem.Revenue}`}
            </p>
          </div>
        </section>
        <section id="charts">
          <div id="charts-container">
            <h3>Retained Earnings Comparison (2025 vs 2026)</h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis
                  tickFormatter={(value) => (value / 1000000).toFixed(1) + "M"}
                />

                <Tooltip
                  formatter={(value) => `${(value / 1000000).toFixed(2)}M`}
                  labelFormatter={(label) => fullMonths[label]}
                />

                <Legend />

                <Bar
                  dataKey="y2025"
                  name="2025"
                  fill="#2F80ED"
                  barSize={40}
                  activeBar={<Rectangle fill="#6CA8FF" stroke="#225EBD" />}
                />

                <Bar
                  dataKey="y2026"
                  name="2026"
                  fill="#EB5757"
                  barSize={40}
                  activeBar={<Rectangle fill="#FF8A8A" stroke="#C43535" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
