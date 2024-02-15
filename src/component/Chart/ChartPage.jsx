import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar, Pie, Doughnut, PolarArea, Radar, Bubble, Scatter } from "react-chartjs-2";
function ChartPage({data}) {

// console.log(data)

const orderStatusAmounts = data.reduce((acc, order) => {
    if (!acc[order.order_status]) {
      acc[order.order_status] = 0;
    }
    acc[order.order_status] += order.order_amount;
    return acc;
  }, {});

  // Step 2: Extract labels and data arrays
  const labels = Object.keys(orderStatusAmounts);
  const datas = Object.values(orderStatusAmounts);

// console.log(labels, totals)

  return (
    <div>
            <h2 style={{textAlign:"center",fontFamily:"system-ui",color:"darkblue"}} > Total Order Amount per Order Status</h2>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Total Order Amount',
              data: datas,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                // Add more colors if needed
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                // Add more colors if needed
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  )
}

export default ChartPage