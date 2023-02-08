import './globals.css';
import { ReactNode } from 'react';
import NavBar from '~/components/NavBar/NavBar';
import { Merriweather, Philosopher } from '@next/font/google';

const merriweather = Merriweather({
  weight: '400',
  fallback: ['system-ui'],
  variable: '--merriweather-font',
});

const philosopher = Philosopher({
  weight: '400',
  fallback: ['system-ui'],
  variable: '--philosopher-font',
});

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="ru" className={`${merriweather.variable} ${philosopher.className}`}>
    <body>
      <NavBar />
      {children}
    </body>
  </html>
);

export default RootLayout;
