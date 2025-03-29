"use client";
import Link from "next/link";
import style1 from "@/styles/app.module.css";
import style2 from "@/styles/customCSS.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "@/components/app.table";
// import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(">>> check data: ", data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();

  //     console.log(">>> check res: ", data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div>{data?.length}</div>

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
      <TableComponent />
    </div>
  );
}
