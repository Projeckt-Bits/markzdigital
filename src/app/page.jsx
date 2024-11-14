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
        <div className={Styles.Container}>
          <div className={Styles.Marquee}>
            <div className={Styles.MarqueeInner}aria-hidden="true">
              <span>Your Messenger To The World!</span>
            </div>
          </div>
          <div className={Styles.MacBookAnim}>
            <video className={Styles.AnimVideo} playsInline muted autoPlay loop>
              <source src="/assets/videos/MacBookAnim.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className={Styles.QuestionToUser}>
            want your dashboard to look like this?
          </h2>
          <p className={Styles.LandingDesc}>
            Well, now it&aposs possible!<br></br> Kudos to Markz Digital Team,
            featuring personalised marketing and scaling plans for their
            esteemed clients.
          </p>
          <button className={Styles.LogInBtn}>Log In</button>
          <button className={Styles.SignUpBtn}>Sign Up</button>
        </div>
      </div>
      <div className={Styles.IntroductionSection}></div>
    </>
  );
}

export default HomePage; // Export the HomePage component
