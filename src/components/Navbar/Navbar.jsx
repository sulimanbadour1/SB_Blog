import Image from "next/image";
import Logo from "../Logo/logo";
import styles from "./Navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://github.com/sulimanbadour1" target="_blank">
          <Image src="/github.svg" alt="github" width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/sulimanbadour/" target="_blank">
          <Image src="/linkedin.svg" alt="linkedin" width={30} height={30} />
        </a>
        <a href="https://www.behance.net/sulimanbadour" target="_blank">
          <Image src="/behance.svg" alt="behance" width={30} height={30} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCU2AGYmAQM4jw4wezPOFhIA"
          target="_blank"
        >
          <Image src="/youtube.svg" alt="youtube" width={30} height={30} />
        </a>
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          HOME
        </Link>
        <Link href="/" className={styles.link}>
          CONTACT
        </Link>
        <Link href="/" className={styles.link}>
          ABOUT
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
