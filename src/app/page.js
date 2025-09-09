// app/page.js
"use client";
import dynamic from "next/dynamic";

const DigitalMarketingGrowthChart = dynamic(
  () => import("../../components/MarketCapTicker"),
  {
    ssr: false,
    // --- THIS IS THE FIX ---
    // Before (Incorrect): loading: <p>Loading market data...</p>
    // After (Correct):  Wrap the JSX in a function () => ...
    loading: () => <p>Loading market data...</p>,
  }
);
import { useState, useEffect } from "react";
import VideoIntro from "../../components/VideoIntro"; // Adjust the import path as necessary
import styles from "./page.module.css"; // Assuming you have some page styles

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // A simple function to be called by the component when it's done
  const handleIntroFinished = () => {
    setShowIntro(false);
  };

  // Optional: Prevent scrolling while the intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup style on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    <>
      {/* Conditionally render the VideoIntro component */}
      {showIntro && (
        <VideoIntro src="/videos/intro.mp4" onFinished={handleIntroFinished} />
      )}

      {/* Your main website content */}
      {/* This content will only be 'visible' after the intro is gone */}
      <main className={styles.main}>
        <section className={styles.contentWrapper}>
          <div>
            <h1>
              Marketing with<br></br> 20/20 Foresight
            </h1>
            <p>
              From noisy data into high-fidelity simulations, turning market
              uncertainty into your greatest competitive advantage.
            </p>
            <div>
              <button className={styles.ctaBtn}>See Your Future ROI</button>
              <button className={styles.demoBtn}>Watch Demo</button>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <DigitalMarketingGrowthChart />
          </div>
        </section>
        <section className={styles.challengeWrapper}>
          <div>
            <h2>Your Data is Lying to You</h2>
            <p>
              The marketing landscape is drowning in data, but most of it leads
              you astray rather than toward success.
            </p>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Unstructured Data Chaos</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>False Direction</h3>
              <p>
                Vanity metrics and poor attribution models create a false sense
                of direction, steering you away from actionable insights.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Wasted Investment</h3>
              <p>
                Millions are wasted on campaigns built on guesswork, not
                predictable reality, draining your marketing budget.
              </p>
            </div>
          </div>
          <h4>
            Sounds Familiar? <a href="">Let&apos;s fix this.</a>
          </h4>
        </section>
        <section className={styles.thoughtProcess}>
          <div>
            <h2>From Chaos to Clarity</h2>
            <h3>Our Process</h3>
            <p>
              We transform your marketing chaos into predictable success through
              our proven four-step refinement process.
            </p>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Step 1</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Step 2</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Step 3</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Step 4</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
          </div>
          <button className={styles.ctaBtn}>Experience Our Process</button>
        </section>
        <section className={styles.results}>
          <div>
            <h2>Results, Predicted and Delivered</h2>
            <p>Our predictive simulations don&apos;t just forecast success—they deliver it. See how we&apos;ve transformed marketing outcomes for our clients.</p>
          </div>
          <div className={styles.cardCarousel}>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Project 1: We Launched!</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Project 2: We Handled!</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Project 3</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Project 4</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Project 5</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h3>Project 6</h3>
              <p>
                90% of marketing data is unstructured &quot;noise&quot;, leading
                to flawed strategies and misguided decisions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
