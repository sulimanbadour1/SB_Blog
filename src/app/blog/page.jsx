import Menu from "@/components/Menu/Menu";
import styles from "./BlogPage.module.css";
import CardList from "@/components/CardList/CardList";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Travel Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
