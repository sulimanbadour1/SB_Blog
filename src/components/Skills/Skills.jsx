import styles from "./skills.module.css";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Next.js",
  "Bootstrap",
  "Three.js",
  "AWS",
  "Figma",
  "Blender",
  "and more...",
];
const Skills = () => {
  return (
    <section className={styles.section}>
      <span className={styles.heading}>I am good at...</span>
      <ul className={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
