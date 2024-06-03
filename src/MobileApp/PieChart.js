import React from 'react';
import Chart from "react-apexcharts";

function SolarCalculatorPieChart() {
  const data = [
    { year: 1, energyGenerated: 100 },
    { year: 2, energyGenerated: 200 },
    { year: 3, energyGenerated: 300 },
    { year: 4, energyGenerated: 400 },
    { year: 5, energyGenerated: 500 },
    { year: 6, energyGenerated: 600 },
    { year: 7, energyGenerated: 700 },
    { year: 8, energyGenerated: 800 },
    { year: 9, energyGenerated: 900 },
    { year: 10, energyGenerated: 1000 }
  ]; // Sample data for energy generated over 10 years, you can replace it with your own data

  const seriesData = data.map(item => item.energyGenerated);

  const options = {
    chart: {
      type: 'pie',
      height: 350
    },
    labels: data.map(item => `Year ${item.year}`),
  };

  return (
    <div className='container-fluid'>
      <h3>Solar Energy Generated Over 10 Years</h3>
      <Chart
        options={options}
        series={seriesData}
        type='pie'
        width={400}
      />
    </div>
  );
}

export default SolarCalculatorPieChart;
