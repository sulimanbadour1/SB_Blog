"use client";
import Link from "next/link";
import styles from "./Comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
// fetch comments
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(res.statusText, { message: "Failed to fetch comments" });
  }
  return data;
};
const Comments = ({ postSlug }) => {
  // auth
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Write a comment" />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">
          <div className={styles.container}>
            <p className={styles.container}>Please, sign in to comment</p>
          </div>
        </Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt="Hero"
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
