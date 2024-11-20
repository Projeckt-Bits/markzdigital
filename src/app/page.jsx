"use client";
import Image from "next/image";
import Styles from "./page.module.scss";
import NavBar from "./components/navbar/page";

const texts = [
  "are you a content creator?",
  "do you own a business?",
  "want more leads?",
];
const speed = 100; // Typing speed in milliseconds
const pause = 1000; // Pause before typing/backspacing in milliseconds
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const element = document.getElementById("typeWriter");
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Typing forward
    element.innerHTML += currentText.charAt(charIndex);
    charIndex++;

    if (charIndex === currentText.length) {
      // Finished typing, pause, and then start deleting
      isDeleting = true;
      setTimeout(typeWriter, pause);
      return;
    }
  } else {
    // Typing backward (deleting)
    element.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // Finished deleting, move to the next text
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Loop back to the first text
      setTimeout(typeWriter, pause);
      return;
    }
  }
  // Continue typing or deleting
  setTimeout(typeWriter, speed);
}

function HomePage() {
  return (
    <>
      <NavBar />
      <div className={Styles.LandingSection}>
        <div className={Styles.Container}>
          <div className={Styles.Marquee}>
            <div className={Styles.MarqueeInner} aria-hidden="true">
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
            Well, now it&apos;s possible!<br></br> Kudos to Markz Digital Team,
            featuring personalised marketing and scaling plans for their
            esteemed clients.
          </p>
          <button className={Styles.LogInBtn}>Log In</button>
          <button className={Styles.SignUpBtn}>Sign Up</button>
        </div>
      </div>
      <div className={Styles.IntroductionSection}>
        <div className={Styles.ColumnPlaceholder}>
          <div className={Styles.MarketingGraphic}>
            <Image
              src="/assets/photos/vectors/MarketingGraphic.svg"
              fill={true}
              loading="lazy"
              alt="Markketing Graphic"
              onLoad={typeWriter}
            />
          </div>
          <div className={Styles.TextPlaceholder}>
            <div className={Styles.ProfessionQuestion} id="typeWriter"></div>
            <p className={Styles.ProfessionDesc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, temporibus praesentium fuga, autem architecto
              perferendis nesciunt perspiciatis dolorem, officiis ab soluta
              laborum veniam! Id earum dicta qui quasi facilis numquam?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage; // Export the HomePage component
