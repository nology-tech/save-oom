import React from 'react'
import { Chart } from "react-google-charts"
import './Graph.scss'

const Graph = () => {

    const options = {
        hAxis: {title: "N° OF ATTEMPTS",minValue: 0, maxValue: 6, textStyle:{color:"#FFFFFF"},titleTextStyle:{color:"#FFFFFF"}},
        vAxis: {title: "SCORE(%)",minValue: 0, maxValue: 100,textStyle:{color:"#FFFFFF"},titleTextStyle:{color:"#FFFFFF"}},
        curveType: "function",
        pointSize:10,
        backgroundColor: "#1e2332",
        legend: {
          textStyle: {
            color: '#FFFFFF',
          }
      },
    }

  return (
    <div role='graph'>
        <Chart
  chartType="LineChart"
  data={[["N° of Attempts", "Jack"], [1, 40], [2,70 ], [3, 60], [4, 80]]}
  options={options}
  legendToggle
  className='chart'
  />
    </div>
  )
}

export default Graph