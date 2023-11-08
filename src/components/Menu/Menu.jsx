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
  const sortedPosts = posts.sort((a, b) => b.views - a.views); // Sorts in descending order of views
  if (page > 1) {
    return null;
  }
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>Trending</h2>
        <h1 className={styles.title}>Most Viewed</h1>
        {/* <MenuPosts withImages={false} />
      <h2 className={styles.subtitle}>Editor Choice</h2>
      <h1 className={styles.title}>Intersting Articles</h1> */}
        {sortedPosts?.map((item) => (
          <MenuPosts withImages={true} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Menu;
