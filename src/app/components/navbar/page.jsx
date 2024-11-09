import Image from "next/image";
import React from "react";
import Styles from "../navbar/navbar.module.scss";
const LogoUrl =
  "../../../../public/assets/photos/vectors/MarkzDigitalLogoTransparentBackground.svg";

function NavBar() {
  return (
    <nav className={Styles.NavContainer}>
      <div className={Styles.NavBar}>
        <div className={Styles.LogoBackground}>
          <div className={Styles.Logo}>
            <Image
              src="/assets/photos/vectors/MarkzDigitalLogoTransparentBackground.svg"
              fill={true}
              loading="lazy"
              alt="Markz Digital Logo"
            />
          </div>
        </div>
        <div className={Styles.NavLinks}>
          <a href="#" className={Styles.NavLink}>
            home
          </a>
          <a href="#" className={Styles.NavLink}>
            services
          </a>
          <a href="#" className={Styles.NavLink}>
            about us
          </a>
        </div>
        <button className={Styles.LogInBtn}>Log In</button>
        <button className={Styles.SignUpBtn}>Sign Up</button>
      </div>
    </nav>
  );
}

export default NavBar;