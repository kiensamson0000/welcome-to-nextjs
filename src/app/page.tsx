import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import HomePage from "@/components/homepages";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to NextJS",
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
