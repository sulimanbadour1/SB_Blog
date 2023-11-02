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
          <h1>Title</h1>
        </Link>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          odio nulla at qui vero rerum possimus odit tempore magni vel eius
          quas! Unde facere hic officiis, vel ipsa amet commodi.
        </p>
        <Link href="/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
