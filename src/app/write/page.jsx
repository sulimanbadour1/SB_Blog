"use client";
import Image from "next/image";
import styles from "./Write.module.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
};
const storage = getStorage(app);
const Write = () => {
  const { status } = useSession();

  const router = useRouter();
  // files upload
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  // files upload
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  // auth check

  // upload image to firebase
  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);
  // upload image to firebase
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/login");
  }
  // turn the title into a slug
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  // publish post
  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });
    console.log(res);

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      {/* {status === "unauthenticated" && router.push("/login")} */}
      <input
        className={styles.input}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="Coding" className={styles.option}>
          Coding
        </option>
        <option value="Travel" className={styles.option}>
          Travel
        </option>
        <option value="Science">Science</option>
        <option value="Art">Art</option>
        <option value="Engineering">Engineering</option>
        <option value="Life">Life</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            width={24}
            height={24}
            className={styles.plusBtn}
            alt="plus"
          />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              style={{ display: "none" }}
            />

            <button className={styles.addButton}>
              <label htmlFor="file">
                <Image src="/image.png" width={18} height={18} alt="image" />
              </label>
            </button>

            <button className={styles.addButton}>
              <label htmlFor="file">
                <Image src="/external.png" width={18} height={18} alt="image" />
              </label>
            </button>
            <button className={styles.addButton}>
              <label htmlFor="file">
                <Image src="/video.png" width={18} height={18} alt="image" />
              </label>
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
      <button onClick={handleSubmit} className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default Write;
