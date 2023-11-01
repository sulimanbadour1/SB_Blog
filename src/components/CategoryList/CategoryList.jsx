import Link from "next/link";
import styles from "./CategoryList.module.css";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.travel}`}
          >
            <Image
              src="/travel.svg"
              width={32}
              height={32}
              className={styles.image}
            />
            Travel
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.it}`}
          >
            <Image
              src="/code.svg"
              width={32}
              height={32}
              className={styles.image}
            />
            IT
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.academia}`}
          >
            <Image
              src="/academia.svg"
              width={32}
              height={32}
              className={styles.image}
            />
            Academia
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.engineering}`}
          >
            <Image
              src="/engineering.svg"
              width={32}
              height={32}
              className={styles.image}
            />
            Engineering
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.art}`}
          >
            <Image
              src="/camera.svg"
              width={32}
              height={32}
              className={styles.image}
            />
            Art
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
