/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "../Logo/logo";
import Socials from "../SocialIcons/Socials";
import SocialsFooter from "../SocialIcons/SocialsFooter";
import Link from "next/link";
import Button from "../button/Button";

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
            <Link href="/blog" className={styles.linkStyle}>
              Blog
            </Link>
            <Link href="/about" className={styles.linkStyle}>
              About
            </Link>
            <Link href="/contact" className={styles.linkStyle}>
              Contact
            </Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/blog?cat=Coding" className={styles.linkStyle}>
              Coding
            </Link>
            <Link href="/blog?cat=Art" className={styles.linkStyle}>
              Art
            </Link>
            <Link href="/blog?cat=Engineering" className={styles.linkStyle}>
              Engineering
            </Link>
            <Link href="/blog?cat=Travel" className={styles.linkStyle}>
              Travel
            </Link>
            <Link href="/blog?cat=Science" className={styles.linkStyle}>
              Science
            </Link>
            <Link href="/blog?cat=Style" className={styles.linkStyle}>
              Style
            </Link>
            <Link href="/blog?cat=Life" className={styles.linkStyle}>
              Life
            </Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Socials</span>
            <Link
              target="_blank"
              className={styles.linkStyle}
              href="https://github.com/sulimanbadour1"
            >
              Github
            </Link>
            <Link
              target="_blank"
              className={styles.linkStyle}
              href="https://www.linkedin.com/in/sulimanbadour/"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              className={styles.linkStyle}
              href="https://www.behance.net/sulimanbadour"
            >
              Behance
            </Link>
            <Link
              target="_blank"
              className={styles.linkStyle}
              href="https://www.youtube.com/channel/UCU2AGYmAQM4jw4wezPOFhIA"
            >
              YouTube
            </Link>
            <Link
              target="_blank"
              className={styles.linkStyle}
              href="https://sulimanbadour.com/"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
      <Button />
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
