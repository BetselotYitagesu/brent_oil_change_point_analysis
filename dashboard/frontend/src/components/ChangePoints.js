import React, { useEffect, useState } from 'react';

const ChangePoints = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/changepoints')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading change points...</p>;

  return (
    <div>
      <h2>Detected Change Points</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Change Point Date</th>
            <th>Mu Before</th>
            <th>Mu After</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.change_point_date}</td>
              <td>{row.mu_before.toFixed(2)}</td>
              <td>{row.mu_after.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChangePoints;
