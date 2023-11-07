"use client";

import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
const projects = [
  {
    title: "Better Ask PDF",
    description:
      " SAAS product designed to empower users by allowing them to upload and interactively engage with PDF files. Leveraging the power of Next.js, Tailwind CSS, NeonDB, Stripe, and OpenAI.",
    image: "/betterask.webp",
    source_code: "https://github.com/sulimanbadour1/betteraskpdf",
  },
  {
    title: "The North Face App",
    description:
      "An e-commerce mobile app for the brand The North Face, which allows users to browse the latest products, order and checkout. Also, It allow tracking the order and get notifications.",
    image: "/betterask.webp",
    source_code: "https://www.behance.net/gallery/141974421/3D-Mosaic",
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "A full responsive website for a restaurant in Prague, which allows users to browse the menu, reserve a table  order and checkout. Also, it has a dashboard for the restaurant owners.",
    image: "/betterask.webp",
    source_code: "https://github.com/sulimanbadour1/Meta_Capstone_Project",
  },
  {
    title: "3D portfolio",
    description:
      "A 3d portfolio created using vite, three js and three drei. with contact me form and resume download. Integrated with GSAP for animations, and react-three-fiber for 3d rendering.",
    image: "/betterask.webp",
    source_code: "https://github.com/sulimanbadour1/My_new_portfolio",
  },

  {
    title: "Shirt Store AI",
    description:
      "Web-based platform that allows users to create and share their own custom t-shirt designs using DALL.E, change colors to save thier own choosen design, and order them for printing and delivery.",
    image: "/betterask.webp",
    source_code: "https://github.com/sulimanbadour1/AI_shirt_SAAS_3js",
  },
  {
    title: "3D Mosaic",
    description:
      "E-Commerce Website for a Furniture Company which helps users to try, Scan its products in 3D via AR technology and take orders from clients, build products as the customer needs.",
    image: "/betterask.webp",
    source_code: "https://www.behance.net/gallery/141974421/3D-Mosaic",
  },
];
const ProjectsCard = () => {
  return (
    <>
      <div className={styles.card}>
        <Image
          src="/karl.webp"
          alt="Picture of the author"
          width={200}
          height={200}
          className={styles.image}
        />
        <div className={styles.cardImage}></div>
        <div className={styles.cardContent}>
          <h3 className={styles.title}>Project Title</h3>
          <p className={styles.desc}>Project Description</p>
          <Link
            className={styles.link}
            href="/projects/project"
            target="_blank"
          >
            <Image src="/githubColor.svg" width={36} height={36} alt="git" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
