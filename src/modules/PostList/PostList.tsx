'use client';

import { FC } from 'react';
import { IPost } from '~/types/post';
import PostItem from '~/components/PostItem/PostItem';
import styles from './PostList.module.scss';

interface IPostListProps {
  posts: IPost[];
}

const PostList: FC<IPostListProps> = ({ posts }) => (
  <ul className={styles.list}>
    {posts.map((post) => (
      <PostItem key={post._id} post={post} />
    ))}
  </ul>
);

export default PostList;
