import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(res.statusText, { message: "Failed to fetch post" });
  }
  return res.json();
};
const page = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.detail}>
            <span className={styles.date}> Views: {data.views} -</span>
            <span className={styles.category}> {data.catSlug}</span>
          </div>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImage}>
                <Image
                  src={data.user.image}
                  fill
                  className={styles.avatar}
                  alt="Hero"
                />
              </div>
            )}

            <div className={styles.userTextContainer}>
              <span className={styles.userName}>{data?.user.name}</span>
              <span className={styles.date}>
                {data.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              fill
              className={styles.image}
              alt="Hero Image"
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        {/* <Menu postSlug={slug} /> */}
      </div>
    </div>
  );
};

export default page;
