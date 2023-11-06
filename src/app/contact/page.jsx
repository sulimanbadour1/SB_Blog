"use client";
/* eslint-disable react/no-unescaped-entities */
import ScrollBar from "@/components/Isights/Insights";
import styles from "./contact.module.css";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <>
      <ScrollBar />
      <div className={styles.container}>
        <form className={styles.form} onClick={handleSubmit}>
          <h1 className={styles.title}>Get In Touch</h1>
          <input
            name="name"
            type="text"
            className={styles.feedbackInput}
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className={styles.feedbackInput}
            placeholder="Email"
          />
          <textarea
            name="text"
            className={styles.feedbackInput}
            placeholder="Message"
            rows={4}
          ></textarea>
          <input type="submit" value="Send" className={styles.button} />
        </form>
      </div>
    </>
  );
};

export default page;
