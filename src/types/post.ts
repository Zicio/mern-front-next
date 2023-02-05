export interface IPost {
  _id: string;
  title: string;
  text: string;
  tags?: string[];
  user: string;
  imageUrl?: string;
  viewCount?: number;
}
