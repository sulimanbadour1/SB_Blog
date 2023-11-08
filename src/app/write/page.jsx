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
import toast from "react-hot-toast";
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ header: 1 }, { header: 2 }], // custom button values
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    ["link"],

    [{ align: [] }],
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
      {
        toast.success("Post Published");
      }
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.intro1}>
          <span id="span" className={styles.options}>
            select category
          </span>

          <select
            className={styles.select}
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="Style" className={styles.option}>
              Style
            </option>
            <option value="Coding" className={styles.option}>
              Coding
            </option>
            <option value="Travel" className={styles.option}>
              Travel
            </option>
            <option value="Science" className={styles.option}>
              Science
            </option>
            <option value="Art" className={styles.option}>
              Art
            </option>
            <option value="Engineering" className={styles.option}>
              Engineering
            </option>
            <option value="Life" className={styles.option}>
              Life
            </option>
          </select>
        </div>
        <div className={styles.intro1}>
          <span className={styles.span}>Upload Image</span>
          <div className={styles.intro2}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
              <Image
                src="/buttons/add.svg"
                width={20}
                height={20}
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
                    <Image
                      src="/buttons/camera.svg"
                      width={18}
                      height={18}
                      alt="image"
                    />
                  </label>
                </button>

                <button className={styles.addButton}>
                  <label htmlFor="file">
                    <Image
                      src="/buttons/link.svg"
                      width={18}
                      height={18}
                      alt="image"
                    />
                  </label>
                </button>
                <button className={styles.addButton}>
                  <label htmlFor="file">
                    <Image
                      src="/buttons/video.svg"
                      width={18}
                      height={18}
                      alt="image"
                    />
                  </label>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {status === "unauthenticated" && router.push("/login")} */}
      <input
        className={styles.input}
        type="text"
        placeholder="Add Title..."
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="snow"
          modules={modules}
          value={value}
          onChange={setValue}
          placeholder="Write your Post..."
        />
      </div>

      <div className={styles.footer}>
        <button onClick={handleSubmit} className={styles.publish}>
          Post
        </button>
      </div>
    </div>
  );
};

export default Write;
