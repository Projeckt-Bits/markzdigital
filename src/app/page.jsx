import Image from "next/image";
import Styles from "./page.module.scss";
import NavBar from "./components/navbar/page";

async function fetchResult() {
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(
    "AIzaSyBCMmBQrYr97Uo-BXzW65nG2E7sCaZo0Vw"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Explain how AI works";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

async function HomePage() {
  return (
    <>
      <NavBar />
      <div className={Styles.LandingSection}>
      <div className={Styles.VideoContainer}>
        <div className={Styles.MacBookAnim}>
          <video className={Styles.AnimVideo} playsInline muted autoPlay loop>
            <source src="/assets/videos/MacBookAnim.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className={Styles.QuestionToUser}>want your dashboard to look like this?</h2>
      </div>
      </div>
    </>
  );
}

export default HomePage; // Export the HomePage component
