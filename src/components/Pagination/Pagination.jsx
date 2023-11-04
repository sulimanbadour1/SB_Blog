"use client";
import { useRouter } from "next/navigation";
import styles from "./Pagination.module.css";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <header className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => {
          router.push(`?page=${page + 1}`);
        }}
      >
        Next
      </button>
    </header>
  );
};

export default Pagination;
