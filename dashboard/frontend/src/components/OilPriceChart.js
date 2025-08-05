import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OilPriceChart = () => {
  const [priceData, setPriceData] = useState([]);
  const [changePoints, setChangePoints] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/price_series')
      .then((res) => res.json())
      .then((data) => setPriceData(data));

    fetch('http://localhost:5000/api/changepoints')
      .then((res) => res.json())
      .then((data) => setChangePoints(data));
  }, []);

  const dates = priceData.map(d => d.date);
  const prices = priceData.map(d => d.price);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Brent Oil Price (USD)',
        data: prices,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        pointRadius: 0,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Brent Oil Prices with Change Points' },
    },
    scales: {
      x: {
        type: 'category',
        ticks: {
          maxTicksLimit: 10,
        }
      }
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Oil Price Timeline</h2>
      <Line data={chartData} options={options} />

      <ul>
        {changePoints.map((cp, i) => (
          <li key={i}>
            <strong>{cp.change_point_date}</strong>: μ changed from {cp.mu_before.toFixed(2)} → {cp.mu_after.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OilPriceChart;
