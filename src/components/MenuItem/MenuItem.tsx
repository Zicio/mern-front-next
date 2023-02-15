import { FC } from "react";
import Link from "next/link";
import { IMenuItem } from "~/types/menuItem";
import styles from "./MenuItem.module.scss";

interface IMenuItemProps {
  item: IMenuItem;
}

const MenuItem: FC<IMenuItemProps> = ({ item }) => (
  <li className={styles.list__el}>
    <Link href={item.href}>{item.value}</Link>
  </li>
);

export default MenuItem;
