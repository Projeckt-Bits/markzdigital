import Image from "next/image";
import React from "react";
import Link from "next/link";
import Styles from "../navbar/navbar.module.scss";
const LogoUrl =
  "../../../../public/assets/photos/vectors/MarkzDigitalLogoTransparentBackground.svg";

function NavBar() {
  return (
    <div className={Styles.NavContainer}>
      <div className={Styles.NavBar}>
          <div className={Styles.LogoBackground}>
            <div className={Styles.Logo}>
              <Link href="/"></Link>
              <Image
                src="/assets/photos/vectors/MarkzDigitalLogoTransparentBackground.svg"
                fill={true}
                loading="lazy"
                alt="Markz Digital Logo"
              />
            </div>
          </div>
        <div className={Styles.NavLinks}>
          <Link href="/" className={Styles.NavLink}>
            home
          </Link>
          <Link href="/services" className={Styles.NavLink}>
            services
          </Link>
          <Link href="/aboutus" className={Styles.NavLink}>
            about us
          </Link>
        </div>
        <button className={Styles.LogInBtn}>Log In</button>
        <button className={Styles.SignUpBtn}>Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;
