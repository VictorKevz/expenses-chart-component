import React, { useState } from "react";
import Data from "../Data";
import Bottom from "./Bottom";
import "./css/chart.css";
import "./css/bottom.css";

function Chart() {
  const [clickedBarId, setClickedBarId] = useState(null);

  function handleClick(id) {
    setClickedBarId(clickedBarId === id ? null : id);
  }

  const checkClassName = (id) => {
    return id === 3 ? "bar cyan" : "bar soft-red";
  };
  return (
    <div className="chart-container">
      <h2>Spending - Last 7 days</h2>
      <div className="chart-items">
        {Data.map(({ id, day, amount }) => (
          <div className="chart-item" key={id}>
            {clickedBarId === id && (
              <span className="amount">{`$${amount}`}</span>
            )}
            <div
              onClick={() => handleClick(id)}
              className={checkClassName(id)}
              style={{ height: `${amount * 2.855}px` }}
            ></div>
            <p>{day}</p>
          </div>
        ))}
      </div>
      <Bottom />
    </div>
  );
}

export default Chart;
