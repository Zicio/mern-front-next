import "./page.css";
import { Roboto } from "@next/font/google";
import { PostList } from "~/components/PostList";
import { IPost } from "~/types/post";

const font = Roboto({ weight: "400" });

const Home = () => {
  const posts: IPost[] = [
    {
      _id: "1",
      title: "Post",
      text: "Lorem ipsum dolor sit amet",
      user: "Baba",
      viewCount: 0,
    },
  ];
  return (
    <div className={`${font.className} title`}>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
