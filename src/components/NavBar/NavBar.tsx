"use client";

import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { toggleMenu } from "~/store/slices/menuSlice";
import styles from "./NavBar.module.scss";

const NavBar: FC = () => {
  const isOpenMenu = useSelector((state: RootState) => state.isOpenMenu.value);
  const dispatch = useDispatch();
  return (
    <section className={styles.section}>
      <button
        type="button"
        className={styles.menu}
        onClick={() => dispatch(toggleMenu())}
      >
        {isOpenMenu ? (
          <svg
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <div className={styles.title}>ZicApp</div>
      <div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </div>
    </section>
  );
};

export default NavBar;
