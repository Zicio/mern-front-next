// "use client";

import MenuItem from "~/components/MenuItem/MenuItem";
import { IMenuItem } from "~/types/menuItem";
import { FC } from "react";
import styles from "./Menu.module.scss";

interface IMenuProps {
  title: string;
  items: IMenuItem[];
}

const Menu: FC<IMenuProps> = ({ title, items }) => (
  <div className={styles.menu}>
    <div className={styles.blur} />
    <div className={styles.menu__content}>
      <div className={styles.menu__header}>{title}</div>
      <ul className={styles.menu__list}>
        {items.map((item) => (
          <MenuItem key={items.indexOf(item)} item={item} />
        ))}
      </ul>
    </div>
  </div>
);

export default Menu;
