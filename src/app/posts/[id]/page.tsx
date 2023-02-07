import { FC } from 'react';

interface IFullPostProps {
  id: string;
}

const FullPost: FC<IFullPostProps> = ({ id }) => (
  <div className="single-centered-container">
    Пост №
    {id}
  </div>
);

export default FullPost;
