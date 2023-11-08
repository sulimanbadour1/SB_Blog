import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  const isVideo = item.img && item.img.includes("Video");
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imgContainer}>
          {isVideo ? (
            <video controls muted autoPlay loop className={styles.video}>
              <source src={item.img} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={item.img}
              alt="item"
              layout="fill"
              className={styles.image}
            />
          )}
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -
          </span>
          <span className={styles.category}> {item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>

        <p className={styles.desc}>{item.smallDesc}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
