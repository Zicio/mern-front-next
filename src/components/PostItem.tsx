import React from "react";
import { IPost } from "~/types/post";
import "../styles/PostItem.scss";

interface IPostItemProps {
  post: IPost;
}

const PostItem: React.FC<IPostItemProps> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default PostItem;
