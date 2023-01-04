import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Laurie Roy</h1>
      <p>707.407.5074 | laurieroy.dev@gmail.com</p>
      <div className={styles.socials}>
        <img
          src="/assets/socials/linkedin.png"
          alt="social-icon"
          className={styles.icon}
        />
        <img
          src="/assets/socials/github.png"
          alt="social-icon"
          className={styles.icon}
        />
      </div>
    </footer>
  );
};

export default Footer