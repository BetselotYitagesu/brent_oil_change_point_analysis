import React from 'react';
import ChangePoints from './components/ChangePoints';
import OilPriceChart from './components/OilPriceChart';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Brent Oil Price Change Point Dashboard</h1>
      <OilPriceChart />
      <ChangePoints />
    </div>
  );
}

export default App;
