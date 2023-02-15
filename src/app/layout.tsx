import "./globals.css";
import { ReactNode } from "react";
import NavBar from "~/components/NavBar/NavBar";
import { Merriweather, Philosopher } from "@next/font/google";
import Menu from "~/modules/Menu/Menu";
import { IMenuItem } from "~/types/menuItem";
import MenuProvider from "~/modules/MenuProvider";

const merriweather = Merriweather({
  weight: "400",
  fallback: ["system-ui"],
  variable: "--merriweather-font",
});

const philosopher = Philosopher({
  weight: "400",
  fallback: ["system-ui"],
  variable: "--philosopher-font",
});

const items: IMenuItem[] = [
  { value: "Главная", href: "/" },
  { value: "Блог", href: "/posts" },
  {
    value: "Обо мне",
    href: "/about",
  },
];

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html
    lang="ru"
    className={`${merriweather.variable} ${philosopher.className}`}
  >
    <body>
      <MenuProvider>
        <NavBar />
        <Menu title="Menu" items={items} />
        {children}
      </MenuProvider>
    </body>
  </html>
);

export default RootLayout;
