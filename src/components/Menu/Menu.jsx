import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Trending</h2>
      <h1 className={styles.title}>Most Recent</h1>
      <MenuPosts withImages={false} />
      <h2 className={styles.subtitle}>Editor Choice</h2>
      <h1 className={styles.title}>Intersting Articles</h1>
      <MenuPosts withImages={true} />
    </div>
  );
};

export default Menu;
