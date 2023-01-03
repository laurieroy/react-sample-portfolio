import styles from "./Projects.modules.css";

import { projects } from "../content/projects";

export const Projects = () => {
  return (
    <section className={styles.wrapper}>
      {projects.map((project, i) => {
        return (
          <div className={styles.card} key={i}>
            <div className={styles.info}>
              <img className={styles.image} src={project.image} alt="cover" />
            </div>

            <div className={styles.info}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
