import Image from "next/image";
import styles from "./CategoryList.module.css";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(res.statusText, { message: "Failed to fetch categories" });
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured Categories</h2>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.title}`}
            className={`${styles.category} ${styles.style}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                width={32}
                height={32}
                alt="category"
                className={styles.image}
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
