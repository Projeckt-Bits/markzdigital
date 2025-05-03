"use client";
import { useState } from "react";
import Styles from "./SEOCheckup.module.scss";

export default function SEOCheckup() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [seoReport, setSeoReport] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSeoReport(null);

    try {
      const response = await fetch("/api/seo-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze website.");
      }

      setSeoReport(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Styles.seoContainer}>
      <h2 className={Styles.heading}>Website Health Checkup</h2>
      <p className={Styles.description}>
        Enter your website URL to get an SEO analysis report.
      </p>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <input
          type="url"
          className={Styles.inputField}
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" className={Styles.submitButton} disabled={loading}>
          {loading ? "Checking..." : "Analyze"}
        </button>
      </form>

      {error && <p className={Styles.error}>❌ {error}</p>}

      {seoReport && (
        <div className={Styles.report}>
          <h3>SEO Report for {url}</h3>
          <p><strong>Organic Search Results:</strong></p>
          <ul>
            {seoReport.organic_results?.map((result, index) => (
              <li key={index}>
                <a href={result.link} target="_blank" rel="noopener noreferrer">
                  {result.title}
                </a>
                <p>{result.snippet}</p>
              </li>
            )) || <p>No organic results found.</p>}
          </ul>
        </div>
      )}
    </div>
  );
}
