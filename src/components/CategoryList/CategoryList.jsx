import Image from "next/image";
import styles from "./CategoryList.module.css";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured Categories</h2>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/code.svg"
            width={32}
            height={32}
            alt="category"
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/camera.svg"
            width={32}
            height={32}
            alt="category"
            className={styles.image}
          />
          Art
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/engineering.svg"
            width={32}
            height={32}
            alt="category"
            className={styles.image}
          />
          Engineering
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/travel.svg"
            width={32}
            height={32}
            alt="category"
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/academia.svg"
            width={32}
            height={32}
            alt="category"
            className={styles.image}
          />
          Science
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
