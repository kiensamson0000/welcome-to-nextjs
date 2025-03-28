import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <Link href={`/youtube`}>Youtube</Link>
        <Link href={`/facebook`}>Facebook</Link>
        <Link href={`/tiktok`}>Tiktok</Link>
      </ul>
    </div>
  );
}
