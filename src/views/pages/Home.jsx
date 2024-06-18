import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const chartRef = useRef(null); // Ref to store chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (window.myPieChart !== undefined) {
      window.myPieChart.destroy(); // Destroy existing chart if it exists
    }
    window.myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Present", "Absent"],
        datasets: [{
          data: [5, 2],
          backgroundColor: ["#55efc4", "#ff7675",],
          hoverBackgroundColor: ["#00b894", "#d63031"]
        }]
      },
      options: {
        responsive: true
      }
    });
  }, []);

  return (
    <div className='container-fulid'>
      <div className='row'>
        <div className='col-sm-7'>
          <div className="card p-3">
            <div className="row">
              <div className="col-sm-6">
                <canvas ref={chartRef}></canvas>
                <h4>Attendance</h4>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
        <div className='col-sm-5'></div>
      </div>
    </div>
  );
};

export default Dashboard;
