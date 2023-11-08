import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./MenuPosts.module.css";

const MenuPosts = async ({ withImages, item, key }) => {
  const isVideo = item.img && item.img.includes("Video");
  return (
    <>
      <div className={styles.items} key={key}>
        <Link href={`/posts/${item.slug}`} className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              {isVideo ? (
                <video
                  controls={false}
                  muted
                  autoPlay
                  loop
                  className={styles.video}
                >
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
            <span className={`${styles.category} ${styles.travel}`}>
              {item?.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item?.title}</h3>
            <div className={styles.details}>
              <span className={styles.date}>
                {item.createdAt.substring(0, 10)}
              </span>
              <span className={styles.views}> Views : {item?.views}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuPosts;
