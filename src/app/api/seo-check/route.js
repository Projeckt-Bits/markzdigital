import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    const apiKey = process.env.SERP_API_KEY;
    if (!apiKey) {
      console.error("Error: SERPAPI_KEY is missing.");
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    // Construct the SerpAPI request URL
    const apiUrl = `https://serpapi.com/search?engine=google&q=site:${encodeURIComponent(url)}&api_key=${apiKey}`;

    console.log("API Request URL:", apiUrl); // Debugging log

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("SerpAPI Response Error:", response.status, errorText);
      return NextResponse.json({ error: "Failed to fetch SEO data" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ result: data }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error.message);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
