"use client";
import TableComponent from "@/components/app.table";
import useSWR from "swr";

const BlogsPage = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();

  //     console.log(">>> check res: ", data);
  //   };
  //   fetchData();
  // }, []);

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

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>no data...</div>;
  }

  return (
    <div className="mt-3">
      <TableComponent
        blogs={data?.sort((a: any, b: any) => b.id - a.id) ?? []}
      />
    </div>
  );
};

export default BlogsPage;
