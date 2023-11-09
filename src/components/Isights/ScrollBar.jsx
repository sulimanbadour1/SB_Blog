import styles from "./insights.module.css";

const insights = [
  "10+ Projects Completed 🏆",
  "Still Learning Everyday 📝",
  "Product Designer 🖌️",
  "Frontend Developer",
  "UI UX Designer",
  "Design Engineer",
];
const ScrollBar = () => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        {insights.map((insight, index) => (
          <div key={index}>
            {insight} <span className={styles.spanClass}>|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
