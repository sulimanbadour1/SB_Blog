"use client";

import styles from "./style.module.css";
import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Link from "next/link";

const PersonalPage = () => {
  const { data: session } = useSession();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        try {
          const res = await fetch(`/api/profile`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session.accessToken}`, // Assuming accessToken is stored in session
            },
          });
          console.log(res);
          if (!res.ok) {
            throw new Error("Failed to fetch user data");
          }
          const data = await res.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session]);

  if (!session) {
    return (
      <div className={styles.container}>
        <h1 className={styles.container}>Please login to view this page</h1>
        <Link href="/login">
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Personal Page</h1>
      <p className={styles.desc}>Here you can find your personal info</p>
      {userData && (
        <div className={styles.user}>
          <img
            src={session.user.image}
            className={styles.image}
            alt="Profile"
          />

          <span className={styles.name}>Name : {session.user.name}</span>
          <span className={styles.name}>Email : {session.user.email}</span>
        </div>
      )}
    </div>
  );
};

export default PersonalPage;
