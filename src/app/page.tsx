import Link from "next/link";
import style1 from "@/styles/app.module.css";
import style2 from "@/styles/customCSS.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <ul>
        <li className={style1["red"]}>
          <Link href={`/youtube`}>
            <span className={style2["red"]}>Youtube</span>
          </Link>
        </li>
        <li>
          <Link href={`/facebook`}>Facebook</Link>
        </li>
        <li>
          <Link href={`/tiktok`}>Tiktok</Link>
        </li>
      </ul>
    </div>
  );
}
