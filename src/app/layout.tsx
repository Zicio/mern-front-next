import "./globals.css";
import React from "react";
import Navbar from "~/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
}
