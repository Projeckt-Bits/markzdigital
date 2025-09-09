// src/components/GraphAnimation.jsx
"use client";

import React from "react";
import styles from "./GraphAnimation.module.css";

const GraphAnimation = () => {
  // A new path with sharp, angular lines using the 'L' (lineto) command.
  // This creates the "stock ticker" or "data feed" look.
  const graphPathData =
    "M -10 50 L 10 80 L 30 40 L 50 75 L 70 60 L 90 20 L 110 90 L 130 30 L 150 65 L 170 45 L 190 55 L 210 10 L 230 40 L240 20 L 260 10";

  return (
    <>
      <div className={styles.yAxisContainer}>
        <ul className={styles.yAxis}>
          <li>100</li>
          <li>90</li>
          <li>80</li>
          <li>70</li>
          <li>60</li>
          <li>50</li>
          <li>40</li>
          <li>30</li>
          <li>20</li>
          <li>10</li>
          <li>0</li>
        </ul>
      </div>
      <div className={styles.graphContainer}>
        <svg
          className={styles.svg}
          viewBox="0 0 260 100"
          preserveAspectRatio="none"
        >
          <path className={styles.graphPath} d={graphPathData} />
        </svg>
      </div>
      <ul className={styles.xAxis}>
        <li>0</li>
        <li>10</li>
        <li>20</li>
        <li>30</li>
        <li>40</li>
        <li>50</li>
        <li>60</li>
        <li>70</li>
        <li>80</li>
        <li>90</li>
        <li>100</li>
      </ul>
    </>
  );
};

export default GraphAnimation;
