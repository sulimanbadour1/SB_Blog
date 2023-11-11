import Featured from "@/components/Featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import ScrollBar from "@/components/Isights/ScrollBar";
export const dynamic = "force-dynamic";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu page={page} />
      </div>
      <ScrollBar />
    </div>
  );
}
