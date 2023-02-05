import './page.css';
import { Roboto } from '@next/font/google';
import { IPost } from '~/types/post';
import PostList from '~/modules/PostList/PostList';

const font = Roboto({ weight: '400' });

const Home = () => {
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
    <div className="page">
      <div className="container">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
