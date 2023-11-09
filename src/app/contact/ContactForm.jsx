"use client";
import toast from "react-hot-toast";
import styles from "./contact.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateForm = () => {
    if (name.length < 5 || name.length > 20) {
      toast.error("Name must be between 5 and 20 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (message.length < 10 || message.length > 500) {
      toast.error("Message must be between 10 and 500 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const formData = {
      name,
      email,
      message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (response.ok) {
      toast.success("Message sent successfully");
      e.target.reset(); // Reset the form after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.error("Error sending message");
      toast.error("Error sending message");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Get In Touch</h1>
        <input
          name="name"
          type="text"
          className={styles.feedbackInput}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          className={styles.feedbackInput}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          className={styles.feedbackInput}
          placeholder="Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Loading..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
