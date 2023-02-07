'use client';

import { FC } from 'react';
import { IPost } from '~/types/post';
import { useRouter } from 'next/navigation';
import styles from './PostItem.module.scss';

interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  const router = useRouter();

  return (
    <div className={styles.card} role="presentation" onClick={() => router.push(`/posts/${post._id}`)}>
      <button type="button" className={styles.delete}>&#128473;</button>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.text}>
        {post.text.length > 100
          ? post.text.replace(/^(.{100}\S*).*/, '$1...')
          : post.text}
      </p>
      <div className={styles.footer}>
        <ul className={styles.tags}>
          {post.tags
            && post.tags.map((tag) => (
              <li className={styles.tag} key={tag}>
                {tag}
              </li>
            ))}
        </ul>
        <span className={styles.user}>{post.user}</span>
      </div>
    </div>
  );
};

export default PostItem;
