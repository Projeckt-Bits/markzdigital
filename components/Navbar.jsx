'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// We are not using the Image component in this version yet, so it can be removed if you want.
// import Image from 'next/image'; 
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  }

  const navbarClasses = `${styles.navbar} ${scrolled ? styles.scrolled : ''}`;
  // NOTE: This container now gets the mobile menu behavior
  const navLinksContainerClasses = `${styles.navLinksContainer} ${menuOpen ? styles.navOpen : ''}`;
  const hamburgerClasses = `${styles.hamburger} ${menuOpen ? styles.isOpen : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className={styles.logoContainer}>
        <div className={styles.logoPlaceholder}></div>
        <h2 className={styles.logoText}>markz digital</h2>
      </div>

      <div className={navLinksContainerClasses}>
        <ul className={styles.navLinks}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <Link href="/get-quote" className={styles.ctaButton} onClick={closeMenu}>
          Get a Quote
        </Link>
      </div>

      <div className={hamburgerClasses} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;