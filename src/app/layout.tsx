import './globals.css';
import { ReactNode } from 'react';
import Navbar from '~/components/Navbar/Navbar';

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="ru">
    <head>
      <title>ZICIO BLOG</title>
    </head>
    <body>
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
