import './page.css';
import { Roboto } from '@next/font/google';

const font = Roboto({ weight: '400' });
// TODO
const MainPage = () => (
  <div className="page">
    <h1>Hello, my friend! Welcome to my first true app!</h1>
  </div>
);

export default MainPage;
