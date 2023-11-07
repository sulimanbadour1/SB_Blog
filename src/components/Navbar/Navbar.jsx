import Image from "next/image";
import Logo from "../Logo/logo";
import styles from "./Navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Socials from "../SocialIcons/Socials";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Socials />
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/projects" className={styles.link}>
          Projects
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
