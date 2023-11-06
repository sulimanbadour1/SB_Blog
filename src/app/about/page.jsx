/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./about.module.css";
import Skills from "@/components/Skills/Skills";
import Link from "next/link";
import ScrollBar from "@/components/Isights/insights";

const page = () => {
  return (
    <>
      <ScrollBar />
      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/logos/logo-white.svg"
            width={200}
            height={200}
            alt="sbCode"
            className={styles.image}
          />
        </div>

        <div className={styles.contentContainer}>
          <h2>Reach for the Stars, Persevere, Excel!</h2>
          <p>
            Hello, I'm Suliman, a front-end developer based in Prague, Czechia.
            <br />
            Passionate about UI effects and animations, I strive to create
            intuitive and dynamic user experiences. Committed to continual
            learning, I consistently hone my skills to deliver innovative and
            exceptional digital solutions.
          </p>
        </div>
      </section>
      <Skills />
      <h2 className={styles.heading}>
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className={styles.contactLink}>
          here
        </Link>{" "}
        and lets make it happen.
      </h2>
    </>
  );
};

export default page;
