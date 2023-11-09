import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
// share buttons

import ShareButtons from "@/components/ShareButtons/ShareButtons";
// share buttons
const getData = async (slug) => {
  const res = await fetch(`${process.env.URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(res.statusText, { message: "Failed to fetch post" });
  }
  return res.json();
};
export const dynamic = "force-dynamic";
const page = async ({ params, searchParams }) => {
  const { slug } = params;
  const data = await getData(slug);
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  const isVideo = data.img && data.img.includes("Video");
  // share buttons

  // share buttons
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <ShareButtons slug={slug} />
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
                  loading="lazy"
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

        {isVideo ? (
          <video controls muted autoPlay loop className={styles.videoCont}>
            <source src={data.img} type="video/mp4" loading="lazy" />
          </video>
        ) : (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt="item"
              fill
              className={styles.image}
              loading="lazy"
            />
          </div>
        )}
      </div>
      {data?.smallDesc && (
        <h4 className={styles.smallDesc}>{data?.smallDesc}</h4>
      )}
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
        <Menu cat={cat} page={page} />
      </div>
    </div>
  );
};

export default page;
