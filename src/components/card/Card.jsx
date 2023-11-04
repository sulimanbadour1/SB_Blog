import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ key, post }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.11.2023</span>
          <span className={styles.category}> {post.catSlug}</span>
        </div>
        <Link href="/post">
          <h1>{post.title}</h1>
        </Link>

        <p className={styles.desc}>{post.smallDesc}</p>
        <Link href="/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
