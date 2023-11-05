import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";

// Fetch data from external API
const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/menu?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText, { message: "Failed to fetch categories" });
  }
  return res.json();
};
const Menu = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Trending</h2>
      <h1 className={styles.title}>Editor Choice</h1>
      {/* <MenuPosts withImages={false} />
      <h2 className={styles.subtitle}>Editor Choice</h2>
      <h1 className={styles.title}>Intersting Articles</h1> */}
      {posts?.map((item) => (
        <MenuPosts withImages={true} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
