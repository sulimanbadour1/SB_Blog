import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/karl.webp" alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2.11.2023 -</span>
          <span className={styles.category}> Travel</span>
        </div>
        <Link href="/post">
          <h1>Karlštejn Castle</h1>
        </Link>

        <p className={styles.desc}>
          Perched near Prague, Karlštejn Castle is a Gothic gem from the 14th
          century. Commissioned by Emperor Charles IV, it once safeguarded crown
          jewels. Today, its medieval charm makes it a top Czech attraction.
        </p>
        <Link href="/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
