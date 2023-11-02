import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <header className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </header>
  );
};

export default Pagination;
