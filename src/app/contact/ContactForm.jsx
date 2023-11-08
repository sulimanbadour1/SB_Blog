"use client";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Get In Touch</h1>
        <input
          min={5}
          max={20}
          name="name"
          required
          type="text"
          className={styles.feedbackInput}
          placeholder="Name"
          id="name"
        />
        {}
        <input
          min={5}
          max={20}
          name="email"
          id="email"
          required
          type="text"
          className={styles.feedbackInput}
          placeholder="Email"
        />
        <textarea
          required
          name="message"
          minLength={10}
          maxLength={500}
          className={styles.feedbackInput}
          placeholder="Message"
          rows={4}
        ></textarea>
        <button type="submit" className={styles.button}>
          {loading ? "Loading..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
