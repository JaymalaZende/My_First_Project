import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

function SolarCalculatorPieChart() {
  const [efficiency] = useState(0.18); // Default efficiency
  const [area] = useState(20); // Default panel area in square meters
  const [radiation] = useState(5); // Default solar radiation in kWh/m²/day
  const [seriesData, setSeriesData] = useState([]); // Series data for the pie chart
  const [usageType, setUsageType] = useState('commercial');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [roofSpace, setRoofSpace] = useState('');
  const [electricityBill, setElectricityBill] = useState('');
  const [estimatedSavings, setEstimatedSavings] = useState(null);
  const [systemSize, setSystemSize] = useState(null);
  const [error, setError] = useState('');

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

  useEffect(() => {
    // Calculate energy savings per year
    const energySavingsPerYear = data.map(item => {
      const energyPerDay = item.energyGenerated / 365;
      return energyPerDay * radiation * area * efficiency;
    });
    
    setSeriesData(energySavingsPerYear);
  }, [efficiency, area, radiation]); // Recalculate when inputs change

  const options = {
    chart: {
      type: 'pie',
      height: 350
    },
    labels: data.map(item => `Year ${item.year}`),
  };

  const handleCalculate = () => {
    if (!validateInputs()) return;

    // Calculate estimated savings
    const savings = calculateSavings(usageType, energyConsumption, roofSpace, electricityBill);
    setEstimatedSavings(savings);

    // Calculate required system size
    const size = calculateSystemSize(usageType, energyConsumption);
    setSystemSize(size);
  };

  const validateInputs = () => {
    if (!energyConsumption || !roofSpace || !electricityBill) {
      setError('All fields are required.');
      return false;
    }

    if (isNaN(Number(energyConsumption)) || isNaN(Number(roofSpace)) || isNaN(Number(electricityBill))) {
      setError('Please enter valid numbers for energy consumption, roof space, and electricity bill.');
      return false;
    }

    setError('');
    return true;
  };

  const calculateSavings = (usageType, energyConsumption, roofSpace, electricityBill) => {
    // Example calculation (replace with actual calculations)
    let savings = 0;
    if (usageType === 'commercial') {
      savings = parseInt(electricityBill) * 0.1;
    } else if (usageType === 'industrial') {
      savings = parseInt(electricityBill) * 0.15;
    } else if (usageType === 'residential') {
      savings = parseInt(electricityBill) * 0.05;
    }
    return savings.toFixed(2);
  };

  const calculateSystemSize = (usageType, energyConsumption) => {
    // Example calculation (replace with actual calculations)
    let size = 0;
    if (usageType === 'commercial') {
      size = parseInt(energyConsumption) / 10;
    } else if (usageType === 'industrial') {
      size = parseInt(energyConsumption) / 15;
    } else if (usageType === 'residential') {
      size = parseInt(energyConsumption) / 20;
    }
    return size.toFixed(2);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-96 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Solar Calculator</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1">Usage Type:</label>
          <select value={usageType} onChange={(e) => setUsageType(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full">
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="residential">Residential</option>
          </select>
        </div>
        <Chart
          options={options}
          series={seriesData}
          type='pie'
          width={400}
        />
        <div>
          <div className="mb-4">
            <label className="block mb-1">Energy Consumption (kWh per month):</label>
            <input type="number" value={energyConsumption} onChange={(e) => setEnergyConsumption(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Roof Space (sq. ft):</label>
            <input type="number" value={roofSpace} onChange={(e) => setRoofSpace(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Electricity bill (Rs):</label>
            <input type="number" value={electricityBill} onChange={(e) => setElectricityBill(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <button onClick={handleCalculate} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Calculate</button>
          </div>
          <div className="flex flex-col w-96 p-4 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Result</h2>
            <div className="mb-4">
              <p className="text-lg"><strong>Total Savings:</strong> Rs{estimatedSavings !== null ? estimatedSavings : '-'}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg"><strong>System Size (kW):</strong> {systemSize !== null ? `${systemSize} kW` : '-'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarCalculatorPieChart;
