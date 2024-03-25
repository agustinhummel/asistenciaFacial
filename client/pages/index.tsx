import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Link href="/login" id="link">
        VAMOS AL about
      </Link>
      <h1 className="underline">UNDERLINE</h1>
    </main>
  );
}
