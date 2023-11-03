import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Karlštejn Castle</h1>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image src="/p1.jpeg" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> 11.11.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/karl.webp" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure
              ut expedita! Ea dolor porro veritatis? Ipsa molestiae non magni
              soluta, repudiandae rem! Officiis distinctio maxime nemo, minus
              corrupti quibusdam.
            </p>
            <h2> Header </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure
              ut expedita! Ea dolor porro veritatis? Ipsa molestiae non magni
              soluta, repudiandae rem! Officiis distinctio maxime nemo, minus
              corrupti quibusdam.
            </p>
            <h3> Header </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure
              ut expedita! Ea dolor porro veritatis? Ipsa molestiae non magni
              soluta, repudiandae rem! Officiis distinctio maxime nemo, minus
              corrupti quibusdam.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
