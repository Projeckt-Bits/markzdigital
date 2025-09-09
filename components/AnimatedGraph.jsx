'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot, Label } from 'recharts';
// Make sure this import path is correct after renaming the CSS file
import styles from './AnimatedGraph.module.css'; 

const marketData = [
  { year: '2015', digitalSpend: 160, traditionalSpend: 345 },
  { year: '2016', digitalSpend: 195, traditionalSpend: 350 },
  { year: '2017', digitalSpend: 230, traditionalSpend: 355 },
  { year: '2018', digitalSpend: 280, traditionalSpend: 360 },
  { year: '2019', digitalSpend: 330, traditionalSpend: 362 },
  { year: '2020', digitalSpend: 375, traditionalSpend: 340, event: 'Digital Overtakes Traditional (Pandemic Acceleration)' },
  { year: '2021', digitalSpend: 440, traditionalSpend: 350 },
  { year: '2022', digitalSpend: 520, traditionalSpend: 365 },
  { year: '2023', digitalSpend: 570, traditionalSpend: 370 },
  { year: '2024', digitalSpend: 620, traditionalSpend: 372, isEstimate: true },
  { year: '2025', digitalSpend: 680, traditionalSpend: 375, isEstimate: true },
  { year: '2026', digitalSpend: 740, traditionalSpend: 370, isEstimate: true },
  { year: '2027', digitalSpend: 800, traditionalSpend: 365, isEstimate: true },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className={styles.customTooltip}> 
        <p style={{ fontWeight: 'bold' }}>{`Year: ${label}`}</p>
        <p style={{ color: '#8884d8' }}>{`Digital Spend: $${payload[0].value} Billion`}</p>
        <p style={{ color: '#82ca9d' }}>{`Traditional Spend: $${payload[1].value} Billion`}</p>
        {data.event && <p style={{ fontStyle: 'italic', marginTop: '5px' }}>{data.event}</p>}
        {data.isEstimate && <p style={{ color: '#999', marginTop: '5px' }}>(Estimate)</p>}
      </div>
    );
  }
  return null;
};

const DigitalMarketingGrowthChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={marketData}
        margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
      >
        {/* --- ALL THE MISSING PIECES ARE ADDED BACK HERE --- */}
        <defs>
          <linearGradient id="colorDigital" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis 
          label={{ value: 'Ad Spend (in Billions USD)', angle: -90, position: 'insideLeft' }}
          tickFormatter={(value) => `$${value}B`} 
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" height={36} />
        <Area 
          type="monotone" 
          dataKey="digitalSpend" 
          name="Digital Spend" 
          stroke="#8884d8" 
          fillOpacity={1} 
          fill="url(#colorDigital)" 
        />
        <Area 
          type="monotone" 
          dataKey="traditionalSpend" 
          name="Traditional Spend" 
          stroke="#82ca9d" 
          fillOpacity={1} 
          fill="url(#colorTraditional)" 
        />
        <ReferenceDot x="2020" y={375} r={8} fill="#ff0000" stroke="white">
           <Label value="The Crossover" position="top" offset={15} />
        </ReferenceDot>
        {/* --- END OF ADDED PIECES --- */}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DigitalMarketingGrowthChart;