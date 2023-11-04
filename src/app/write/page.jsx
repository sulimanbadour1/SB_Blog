"use client";
import Image from "next/image";
import styles from "./Write.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// modules
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
const Write = () => {
  const { status } = useSession();

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  // auth check
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <div className={styles.container}>
      {/* {status === "unauthenticated" && router.push("/login")} */}
      <input className={styles.input} type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            width={24}
            height={24}
            className={styles.plusBtn}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" width={18} height={18} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" width={18} height={18} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={18} height={18} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="snow"
          modules={modules}
          value={value}
          onChange={setValue}
          placeholder="Write your Post..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Write;
