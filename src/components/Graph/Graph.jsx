import React from "react";
import { Chart } from "react-google-charts";
import "./Graph.scss";

const Graph = () => {
  const options = {
    //horizontal axis variables
    hAxis: {
      title: "N° OF ATTEMPTS",
      minValue: 0,
      maxValue: 6,
      textStyle: { color: "#FFFFFF" },
      titleTextStyle: { color: "#FFFFFF" },
    },
    //vertical axis variables
    vAxis: {
      title: "SCORE(%)",
      minValue: 0,
      maxValue: 100,
      textStyle: { color: "#FFFFFF" },
      titleTextStyle: { color: "#FFFFFF" },
    },
    //curved line
    curveType: "function",
    //size of the points displaying data values
    pointSize: 10,
    backgroundColor: "#1e2332",
    //color of the legend
    legend: {
      textStyle: {
        color: "#FFFFFF",
      },
    },
  };

  return (
    <div role="graph">
      <Chart
        //type of chart
        chartType="LineChart"
        //data - the first number in each pair is the horizontal axis value - the other is the vertical axis value(score %)
        data={[
          ["N° of Attempts", "Jack"],
          [1, 40],
          [2, 70],
          [3, 60],
          [4, 80],
        ]}
        options={options}
        legendToggle
        className="chart"
      />
    </div>
  );
};

export default Graph;
