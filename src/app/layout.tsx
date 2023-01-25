import "./globals.css";
import React from "react";
import { Roboto } from "@next/font/google";

const font = Roboto({ weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <title>Main page</title>
      </head>
      <body>
        <div className={font.className}>Layout</div>
        {children}
      </body>
    </html>
  );
}
