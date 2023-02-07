import './globals.css';
import { ReactNode } from 'react';
import NavBar from '~/components/NavBar/NavBar';
import { Merriweather } from '@next/font/google';

const merriweather = Merriweather({
  weight: '400',
  fallback: ['system-ui'],
  variable: '--merriweather-font',
});

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="ru" className={`${merriweather.variable}`}>
    <body>
      <NavBar />
      {children}
    </body>
  </html>
);

export default RootLayout;
