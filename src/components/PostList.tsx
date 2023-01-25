"use client";

import React from "react";
import { IPost } from "~/types/post";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PostItem from "~/components/PostItem";

interface IPostListProps {
  posts: IPost[];
}

export const PostList: React.FC<IPostListProps> = ({ posts }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </Box>
    </Grid>
  );
};
