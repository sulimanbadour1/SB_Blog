import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
const projects = [
  {
    title: "Local Movie Streamer",
    description:
      "MERN-based application designed for streaming local movies through a sleek web interface. It enables users to search their movie collection, watch movies, add subtitles, and control streaming from any device connected to their local network.",
    image: "/local.jpg",
    source_code: "https://github.com/sulimanbadour1/local-stream-app/tree/main",
    live: "https://github.com/sulimanbadour1/local-stream-app/tree/main",
  },

  {
    title: "Little Lemon Restaurant",
    description:
      "A full responsive website for a restaurant in Prague, which allows users to browse the menu, reserve a table  order and checkout. Also, it has a dashboard for the restaurant owners to track expenses, reservarions and payrolls.",
    image: "/folio/lemon.webp",
    source_code: "https://github.com/sulimanbadour1/Meta_Capstone_Project",
    live: "https://meta-capstone-project-mocha.vercel.app/",
  },
  {
    title: "Reminder 4 u",
    description:
      " A full-stack reminder app leveraging modern technologies to provide an efficient and user-friendly platform for setting and managing reminders using NextJs.",
    image: "/folio/reminder1.jpg",
    source_code: "https://github.com/sulimanbadour1/local-stream-app/tree/main",
    live: "https://reminder4u.vercel.app/",
  },
  // {
  //   title: "Shirt Store AI",
  //   description:
  //     "Web-based platform that allows users to create and share their own custom t-shirt designs using DALL.E, change colors to save thier own choosen design, and order them for printing and delivery.",
  //   image: "/folio/shirt.png",
  //   source_code: "https://github.com/sulimanbadour1/AI_shirt_SAAS_3js",
  // },

  // {
  //   title: "3D portfolio",
  //   description:
  //     "A 3d portfolio created using vite, three js and three drei. with contact me form and resume download. Integrated with GSAP for animations, and react-three-fiber for 3d rendering.",
  //   image: "/folio/threefolio.webp",
  //   source_code: "https://github.com/sulimanbadour1/My_new_portfolio",
  //   live: "",
  // },
  {
    title: "TensoDrone",
    description:
      "Tensodrone that do not break Tensodrone is a multi-rotor UAV of a new design with collision protection, made on the principle of tensegrity. This approach allows for the combination of the protective cage and the airframe in one structure.",
    image: "/folio/tenso.webp",
    source_code: "https://youtu.be/4dEewzDinpA?si=mDr_0uGttM8NGZJ6",
    live: "https://youtu.be/4dEewzDinpA?si=mDr_0uGttM8NGZJ6",
  },
  {
    title: "My Portfolio",
    description: "My portfolio built with react and Tailwind CSS.",
    image: "/folio/site.gif",
    source_code: "https://github.com/sulimanbadour1/Sul_folio",
    live: "https://sulimanbadour.com/",
  },
];
const ProjectsCard = () => {
  return (
    <>
      <div className={styles.cards}>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <div className={styles.cardImage}>
              <Image
                src={project.image}
                alt="Picture of the author"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.links}>
                <Link
                  className={styles.link}
                  href={project.source_code}
                  target="_blank"
                >
                  <Image
                    src="/githubColor.svg"
                    width={36}
                    height={36}
                    alt="git"
                  />
                </Link>
                <Link
                  className={styles.link}
                  href={project.live}
                  target="_blank"
                >
                  <Image
                    src="/buttons/live.svg"
                    width={36}
                    height={36}
                    alt="git"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsCard;
