import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [100, 200, 300, 400, 500, 600],
        backgroundColor: ["red", "green", "orange", "purple", "cyan", "blue"],
      },
      {
        data: [20, 44, 300, 33, 500, 600],
        backgroundColor: ["red", "green", "orange", "purple", "cyan", "blue"],
      },
      {
        data: [22, 200, 444, 400, 500, 30],
        backgroundColor: ["red", "green", "orange", "purple", "cyan", "blue"],
      },
    ],
  };
  return <Pie data={data}></Pie>;
}

export default PieChart;
