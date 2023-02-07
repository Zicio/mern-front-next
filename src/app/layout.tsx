import './globals.css';
import { ReactNode } from 'react';
import NavBar from '~/components/NavBar/NavBar';

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="ru">
    <body>
      <NavBar />
      <div className="flex flex-col items-center mt-10 h-[calc(100vh-120px)] justify-center">
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
