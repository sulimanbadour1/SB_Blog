"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./button.module.css";

const Button = () => {
  const [active, setActive] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <a
          href="#header"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src="/logos/white.png"
            fill
            alt="logo"
            className={styles.image}
          />
        </a>
      </div>
    </div>
  );
};

export default Button;
