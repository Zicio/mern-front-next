'use client';

import { FC } from 'react';
import styles from './Navbar.module.scss';

const Navbar: FC = () => (
  <section className={styles.section}>
    <div className={styles.title}>Zicio Blog</div>
    <div>
      <button type="submit" className={styles.button}>Login</button>
    </div>
  </section>
);

export default Navbar;
