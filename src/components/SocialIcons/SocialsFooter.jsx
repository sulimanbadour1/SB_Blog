"use client";
import { useContext } from "react";
import styles from "./SocialsFooter.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const SocialsFooter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {theme === "light" ? (
        <div className={styles.social}>
          <a href="https://github.com/sulimanbadour1" target="_blank">
            <Image src="/githubBlack.svg" alt="github" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/sulimanbadour/" target="_blank">
            <Image
              src="/linkedinBlack.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.behance.net/sulimanbadour" target="_blank">
            <Image
              src="/behanceBlack.svg"
              alt="behance"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCU2AGYmAQM4jw4wezPOFhIA"
            target="_blank"
          >
            <Image
              src="/youtubeBlack.svg"
              alt="youtube"
              width={30}
              height={30}
            />
          </a>
        </div>
      ) : (
        <div className={styles.social}>
          <a href="https://github.com/sulimanbadour1" target="_blank">
            <Image src="/githubWhite.svg" alt="github" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/sulimanbadour/" target="_blank">
            <Image
              src="/linkedinWhite.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.behance.net/sulimanbadour" target="_blank">
            <Image
              src="/behanceWhite.svg"
              alt="behance"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCU2AGYmAQM4jw4wezPOFhIA"
            target="_blank"
          >
            <Image
              src="/youtubeWhite.svg"
              alt="youtube"
              width={30}
              height={30}
            />
          </a>
        </div>
      )}
    </>
  );
};

export default SocialsFooter;
