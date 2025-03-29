import Link from "next/link";
import style1 from "@/styles/app.module.css";
import style2 from "@/styles/customCSS.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Welcome to NextJS",
};

export default function Home() {
  return (
    <div>
      <ul>
        <li className={style1["red"]}>
          <Link href={"/facebook"}>
            <span className={style2["red"]}>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/tiktok"}>Tiktok</Link>
        </li>
      </ul>
    </div>
  );
}
