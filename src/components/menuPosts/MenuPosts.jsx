import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./MenuPosts.module.css";

const MenuPosts = ({ withImages }) => {
  return (
    <>
      <div className={styles.items}>
        <Link href="/blog" className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              <Image
                src="/karl.webp"
                alt="Karl"
                fill
                className={styles.image}
              />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Perched near Prague, Karlštejn Castle is a Gothic gem from the
              14th century.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}> - 2.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/blog" className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              <Image
                src="/karl.webp"
                alt="Karl"
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Perched near Prague, Karlštejn Castle is a Gothic gem from the
              14th century.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}> - 2.11.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/blog" className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              <Image
                src="/karl.webp"
                alt="Karl"
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.art}`}>Art</span>
            <h3 className={styles.postTitle}>
              Perched near Prague, Karlštejn Castle is a Gothic gem from the
              14th century.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}> - 2.11.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuPosts;
