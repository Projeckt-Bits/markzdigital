import Image from "next/image";
import styles from "./page.module.scss";
import NavBar from "./components/navbar/page";

async  function fetchResult() {
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI("AIzaSyBCMmBQrYr97Uo-BXzW65nG2E7sCaZo0Vw");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Explain how AI works";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

async function HomePage() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default HomePage;  // Export the HomePage component