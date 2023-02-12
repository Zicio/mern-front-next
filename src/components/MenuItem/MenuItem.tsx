import { FC } from 'react';
import Link from 'next/link';
import { IMenuItem } from '~/types/menuItem';
import styles from './MenuItem.module.scss';

interface IMenuItemProps {
  item: IMenuItem;
}

const MenuItem: FC<IMenuItemProps> = ({ item }) => (
  <Link href={item.href}>
    <li className={styles.list__el}>{item.value}</li>
  </Link>

);

export default MenuItem;
