"use client";
import Image from "next/image";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LineShareButton,
  // ... other buttons as needed
} from "react-share";
import styles from "./share.module.css";
const ShareButtons = ({ slug }) => {
  const shareUrl = `/posts/${slug}`; // modify this to the actual url
  return (
    <div className={styles.container}>
      <div className={styles.socialShare}>
        <FacebookShareButton url={shareUrl}>
          <span className={styles.span}>
            <Image
              src="/buttons/face.svg"
              width={28}
              height={28}
              alt="face"
              className={styles.span}
            />
          </span>
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl}>
          <span className={styles.span}>
            <Image
              src="/buttons/twitter.svg"
              width={28}
              height={28}
              alt="face"
              className={styles.span}
            />
          </span>
        </TwitterShareButton>

        <EmailShareButton url={shareUrl}>
          <span className={styles.span}>
            <Image
              src="/buttons/mail.svg"
              width={28}
              height={28}
              alt="face"
              className={styles.span}
            />
          </span>
        </EmailShareButton>

        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default ShareButtons;
