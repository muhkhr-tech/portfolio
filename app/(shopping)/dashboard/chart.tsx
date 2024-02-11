'use client'

import { useEffect } from "react"
import { Chart } from "chart.js/auto";

function Example() {
  useEffect(() => {
    var canvas = (document.getElementById('myChart') as HTMLCanvasElement)

    if (canvas) {
      var existingChart = Chart.getChart(canvas);
      if (existingChart) {
        existingChart.destroy();
      }
      
      var ctx = canvas.getContext('2d');
  
      if (ctx) {
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agust", "Sep", "Nov" , "Des"],
            datasets: [{
              data: [66, 144, 146, 116, 107, 131, 43],
              label: "Applied",
              borderColor: "rgb(109, 253, 181)",
              backgroundColor: "rgb(109, 253, 181,0.5)",
              borderWidth: 2
            }, {
              data: [40, 100, 44, 70, 63, 30, 10],
              label: "Accepted",
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgb(75, 192, 192,0.5)",
              borderWidth: 2
            }, {
              data: [20, 24, 50, 34, 33, 23, 12],
              label: "Pending",
              borderColor: "rgb(255, 205, 86)",
              backgroundColor: "rgb(255, 205, 86,0.5)",
              borderWidth: 2
            }, {
              data: [6, 20, 52, 12, 11, 78, 21],
              label: "Rejected",
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgb(255, 99, 132,0.5)",
              borderWidth: 2
            }
            ]
          },
        });
      } else {
          console.error('Konteks canvas tidak ditemukan.');
      }
  } else {
      console.error('Elemen canvas tidak ditemukan.');
  }
  }, [])


  return (
    <>
      {/* Bar chart */}
      {/* <h1 className="w-[150px] mx-auto text-xl font-semibold capitalize ">Bar Chart</h1> */}
      <div className="h-screen flex mx-auto">
        <div className='border pt-0 rounded-xl w-full h-fit shadow-sm'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;