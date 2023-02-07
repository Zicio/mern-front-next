import { IPost } from '~/types/post';
import PostList from '~/modules/PostList/PostList';

const PostsPage = () => {
  const posts: IPost[] = [
    {
      _id: '1',
      title: 'Post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eaque, earum enim esse, facilis illo impedit ipsa',
      user: 'Baba',
      viewCount: 0,
      tags: ['JS', 'Next.JS', 'SCSS'],
    },
  ];
  return (
    <PostList posts={posts} />
  );
};

export default PostsPage;
