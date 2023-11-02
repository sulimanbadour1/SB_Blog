import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import styles from "./CardList.module.css";
import Card from "../card/Card";

const CardList = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </header>
  );
};

export default CardList;
