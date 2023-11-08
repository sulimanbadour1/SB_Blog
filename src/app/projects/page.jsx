/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import ProjectsCard from "@/components/projectCard/card";
import styles from "./projects.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { app } from "@/utils/firebase";
import { getStorage } from "firebase/storage";
import ScrollBar from "@/components/Isights/Insights";
const storage = getStorage(app);
const page = () => {
  // const { status } = useSession();

  // const router = useRouter();
  // files upload
  // const [file, setFile] = useState(null);
  // const [media, setMedia] = useState("");
  // files upload

  // const [value, setValue] = useState("");
  // const [title, setTitle] = useState("");
  // const [catSlug, setCatSlug] = useState("");
  // const [desc, setDesc] = useState("");
  // auth check

  // upload image to firebase
  // useEffect(() => {
  //   const upload = () => {
  //     const name = new Date().getTime() + file.name;
  //     const storageRef = ref(storage, name);

  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (error) => {},
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setMedia(downloadURL);
  //         });
  //       }
  //     );
  //   };

  //   file && upload();
  // }, [file]);
  // upload image to firebase
  // auth check
  // if (status === "loading") {
  //   return <div className={styles.loading}>Loading...</div>;
  // }
  // if (status === "unauthenticated") {
  //   router.push("/login");
  // }
  // turn the title into a slug
  // const slugify = (str) =>
  //   str
  //     .toLowerCase()
  //     .trim()
  //     .replace(/[^\w\s-]/g, "")
  //     .replace(/[\s_-]+/g, "-")
  //     .replace(/^-+|-+$/g, "");
  // publish post
  // const handleSubmit = async () => {
  //   const res = await fetch("/api/projects", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title,
  //       desc: value,
  //       img: media,
  //       slug: slugify(title),
  //     }),
  //   });
  //   console.log(res);

  //   if (res.status === 200) {
  //     const data = await res.json();
  //     router.push(`/projects/${data.slug}`);
  //   }
  // };
  return (
    <div className={styles.container}>
      <ScrollBar />
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.desc}>Here are some of my projects:</p>
      {/* /* Here you have add a post func */}
      {/* <>
        <input
          className={styles.input}
          required
          type="text"
          placeholder="Add a title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className={styles.list}>
          <span id="span" className={styles.options}>
            Project Category:
          </span>
          <select
            required
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
        </div>
        <span className={styles.span}>Upload Image</span>
        <div className={styles.editor}>
          <div className={styles.add}>
            <input
              type="file"
              id="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              style={{ display: "none" }}
              required
            />

            <button className={styles.addButton}>
              <label htmlFor="file">
                <Image src="/image.png" width={18} height={18} alt="image" />
              </label>
            </button>
          </div>

          <input
            className={styles.input}
            type="text"
            placeholder="Add a description"
            onChange={value}
            required
          />
        </div>
        <button onClick={handleSubmit} className={styles.publish}>
          Publish
        </button>
      </> */}
      <ProjectsCard />
    </div>
  );
};

export default page;
