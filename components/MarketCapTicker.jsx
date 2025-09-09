// components/MarketCapTicker.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
// We don't need to import the CSS module here as the styling is handled by the parent container's class

// The maximum number of data points to display on the chart
const MAX_DATA_POINTS = 60; // Show 60 seconds of data

const MarketCapTicker = () => {
  // Initialize state with some starting data
  const [data, setData] = useState(() => {
    const initialData = [];
    const startTime = Date.now();
    for (let i = MAX_DATA_POINTS - 1; i >= 0; i--) {
      initialData.push({
        time: startTime - i * 1000,
        // Start with a base market cap of $450 Billion
        marketCap: 450 + Math.random() * 10 - 5,
      });
    }
    return initialData;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const lastDataPoint = currentData[currentData.length - 1];
        
        // Simulate a new market cap movement
        const newMarketCap = lastDataPoint.marketCap + (Math.random() - 0.5) * 1.5;
        
        const newPoint = {
          time: Date.now(),
          marketCap: newMarketCap,
        };

        // Add the new point and remove the oldest one
        return [...currentData.slice(1), newPoint];
      });
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Determine the min and max for the Y-axis to give it some padding
  const capRange = data.reduce((acc, val) => {
    return {
      min: Math.min(acc.min, val.marketCap),    
      max: Math.max(acc.max, val.marketCap)
    };
  }, { min: Infinity, max: -Infinity });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis 
          dataKey="time"
          // We can format the time tick to be more readable
          tickFormatter={(unixTime) => new Date(unixTime).toLocaleTimeString()}
          dy={10} // Push the ticks down a bit
        />
        <YAxis 
          domain={[capRange.min - 10, capRange.max + 10]} // Give a larger padding
          label={{ value: 'Market Cap (USD Billions)', angle: -90, position: 'insideLeft', dy: 90, dx: -30 }}
          tickFormatter={(value) => `$${value.toFixed(0)}B`} 
        />
        {/*
          NOTICE THE TOOLTIP COMPONENT IS GONE!
          This is how you disable the hover effect.
        */}
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="marketCap"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ ResponsiveContainer>
  );
};

export default MarketCapTicker;