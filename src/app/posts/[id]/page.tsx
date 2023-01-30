import React from "react";

interface IFullPostProps {
  id: string;
}

const FullPost: React.FC<IFullPostProps> = ({ id }) => {
  return <div>Пост № {id}</div>;
};

export default FullPost;
