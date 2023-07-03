import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
      <Link href="www.google.com">Go to my profile</Link>
    </main>
  );
}
