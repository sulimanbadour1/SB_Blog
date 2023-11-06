/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./Featured.module.css";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}> Sup!, Suliman's Blog here.</b>
        <br />
        Your Words, Our Canvas. Write, Share, Inspire.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/karl.webp" alt="hero" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Karlštejn Castle</h1>
          <p className={styles.postDescription}>
            Perched near Prague, Karlštejn Castle is a Gothic gem from the 14th
            century. Commissioned by Emperor Charles IV, it once safeguarded
            crown jewels. Today, its medieval charm makes it a top Czech
            attraction.
          </p>
          <Link href="/posts/karl">
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
