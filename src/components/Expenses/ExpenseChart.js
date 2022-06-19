import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart =()=>{
    const chartDataPoint = [
      { label: "Jan", value: 199.9 },
      { label: "Feb", value: 299.9 },
      { label: "Mar", value: 399.9 },
      { label: "Apr", value: 499.9 },
      { label: "May", value: 599.9 },
      { label: "Jun", value: 699.9 },
      { label: "Jul", value: 799.9 },
      { label: "Aug", value: 899.9 },
      { label: "Sep", value: 999.9 },
      { label: "Oct", value: 199.9 },
      { label: "Nov", value: 299.9 },
      { label: "Dec", value: 399.9 },
    ];
    return <Chart dataPoints={chartDataPoint}/>
}

export default ExpenseChart;