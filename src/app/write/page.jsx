"use client";
import Image from "next/image";
import styles from "./Write.module.css";
import { useEffect, useState } from "react";
// import ReactQuill from "react-quill";

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
import dynamic from "next/dynamic";

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
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // No server side rendering

  const router = useRouter();
  // files upload
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  // files upload
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [summ, setSumm] = useState("");
  const [catSlug, setCatSlug] = useState("");
  // auth check

  // upload image to firebase
  useEffect(() => {
    const upload = () => {
      // check the file is not null and has a type of image or video
      if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
        toast.error("Only images and videos are allowed.");
        return;
      }
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          toast.success("Upload is " + parseInt(progress) + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              toast.error("Upload is paused");
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
    return (
      <>
        <div className={styles.loading}>Loading...</div>
      </>
    );
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
    if (title.length < 10) {
      toast.error("Title must be at least 10 characters long.");
      return;
    }
    if (!media) {
      toast.error("Please upload a photo.");
      return;
    }
    if (!catSlug) {
      toast.error("Please select a category.");
      return;
    }
    if (!summ) {
      toast.error("Please write a small descritpion.");
      return;
    }

    if (!value) {
      toast.error("Please write something.");
      return;
    }
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        smallDesc: summ,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });
    // console.log(res);

    if (res.status === 200) {
      const data = await res.json();
      {
        toast.success("Post Published");
      }
      router.push(`/posts/${data.slug}`);
    }
  };
  const notify = () => toast.success("Please select a category");
  const image = () => toast.success("Please select a category");

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Title..."
        required
        min={6}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.intro}>
        <div className={styles.intro1}>
          <span id="span" className={styles.options}>
            select category
          </span>
          <div>
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
      <input
        className={styles.descInput}
        type="text"
        placeholder="Add Small Description here..."
        required
        min={6}
        onChange={(e) => setSumm(e.target.value)}
      />
      {/* {status === "unauthenticated" && router.push("/login")} */}

      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="snow"
          modules={modules}
          value={value}
          min={10}
          required
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
