import Link from "next/link";

export default function Home() {
  return (
    <Link href="/login" id="link">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Link>
  );
}