import Link from "next/link";
import styles from "./Comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
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
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> 11.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> 11.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
