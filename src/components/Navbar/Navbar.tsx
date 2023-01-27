"use client";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <section className={styles.section}>
    <div className={styles.title}>Zicio Blog</div>
    <div>
      <button className={styles.button}>Login</button>
    </div>
  </section>
);

export default Navbar;
