import React from "react";
import { IPost } from "~/types/post";
import styles from "./PostItem.module.scss";

interface IPostItemProps {
  post: IPost;
}

const PostItem: React.FC<IPostItemProps> = ({ post }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.text}>{post.text}</p>
      <div className={styles.footer}>
        <ul className={styles.tags}>
          {post.tags &&
            post.tags.map((tag) => (
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
