import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

const ClientCharts = () => {
  const [chartData, setChartData] = useState({
    series: [{
      data: [21, 22, 10, 28, 16, 21, 13, 30]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'], 
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <Chart 
        options={chartData.options} 
        series={chartData.series} type="bar" 
        height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ClientCharts;