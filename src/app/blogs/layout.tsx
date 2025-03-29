import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Lists",
  description: "DANH SACH BLOG",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
