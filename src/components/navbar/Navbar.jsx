import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>

        <Link href="https://web.facebook.com/profile.php?id=100008853782648">
          <div className="relative   group ">
            <Image
              src="/facebook.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Link href="https://lahirudarshana.medium.com/">
          <div className="relative   group ">
            <Image
              src="/medium.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150 "
            />
          </div>
        </Link>
        <Link href="https://www.instagram.com/lahiru_____d/">
          <div className="relative   group ">
            <Image
              src="/instagram.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Link href="https://www.tiktok.com/@lahiru_d">
          <div className="relative   group ">
            <Image
              src="/tiktok.png"
              alt=""
              width={24}
              height={24}
              className="transition duration-300 ease-in-out transform group-hover:scale-150"
            />
          </div>
        </Link>
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;