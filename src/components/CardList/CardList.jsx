import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import styles from "./CardList.module.css";
import Card from "../card/Card";

// Fetch data from external API
const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText, { message: "Failed to fetch categories" });
  }
  return res.json();
};
const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  // Sort posts by createdAt in descending order (newest first)
  // Sort posts by createdAt in descending order (most recent first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  console.log(Date(sortedPosts.createdAt));

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          {sortedPosts?.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </header>
  );
};

export default CardList;
