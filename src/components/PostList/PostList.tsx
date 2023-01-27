"use client";

import React from "react";
import { IPost } from "~/types/post";
import styles from "./PostList.module.scss";
import PostItem from "~/components/PostItem/PostItem";

interface IPostListProps {
  posts: IPost[];
}

export const PostList: React.FC<IPostListProps> = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
