import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "../Logo/logo";
import Socials from "../SocialIcons/Socials";
import SocialsFooter from "../SocialIcons/SocialsFooter";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.desc}>
            ⭐ Suliman's Personal Blog ⭐<br />
            <br />
            This is my digital sanctuary, a canvas for thoughts, ideas.
            <br />
            <br />
            📣 Your Words, Our Canvas. Write, Share, Inspire.✍️
            <br />
            <br />
            <Link href="/login" className={styles.join}>
              Join
            </Link>{" "}
            the community where your voice becomes an art piece.
          </p>
          <div className={styles.icons}>
            <SocialsFooter />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/" className={styles.linkStyle}>
              Home
            </Link>
            <Link href="/" className={styles.linkStyle}>
              Blog
            </Link>
            <Link href="/" className={styles.linkStyle}>
              About
            </Link>
            <Link href="/" className={styles.linkStyle}>
              Contact
            </Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/" className={styles.linkStyle}>
              Coding
            </Link>
            <Link href="/" className={styles.linkStyle}>
              Art
            </Link>
            <Link href="/" className={styles.linkStyle}>
              Engineering
            </Link>
            <Link href="/" className={styles.linkStyle}>
              Travel
            </Link>
            <Link href="/" className={styles.linkStyle}>
              Science
            </Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Socials</span>
            <Link className={styles.linkStyle} href="/">
              Github
            </Link>
            <Link className={styles.linkStyle} href="/">
              LinkedIn
            </Link>
            <Link className={styles.linkStyle} href="/">
              Behance
            </Link>
            <Link className={styles.linkStyle} href="/">
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <p>2023 © All rights reserved.</p>
        <p>
          Made with ✨ by{" "}
          <a href="https://sulimanbadour.com/" target="_blank">
            <b className={styles.underline}>Suliman Badour</b>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
