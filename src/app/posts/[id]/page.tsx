import { FC } from 'react';

interface IFullPostProps {
  id: string;
}

const FullPost: FC<IFullPostProps> = ({ id }) => (
  <div>
    Пост №
    {id}
  </div>
);

export default FullPost;
