"use client";
import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          {/* <div className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={() => setList(!list)}>
              Write
            </button>
            {list && (
              <div
                className={styles.dropdownContent}
                style={{ display: list ? "block" : "none" }}
              >
                <div className={styles.items}>
                  <Link href="/write" className={styles.link1}>
                    Post
                  </Link>
                  <Link href="/projects" className={styles.link1}>
                    Project
                  </Link>
                </div>
              </div>
            )}
          </div> */}

          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "logged out" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              {/* <Link href="/profile">Profile</Link> */}
              <span className={styles.link1} onClick={signOut}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
