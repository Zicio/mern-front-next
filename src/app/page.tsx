import "./page.css";
import { Roboto } from "@next/font/google";

const font = Roboto({ weight: "400" });

export default function Home() {
  return (
    <div className={`${font.className} title`}>
      <div>Home</div>
      <div>Yes</div>
    </div>
  );
}
