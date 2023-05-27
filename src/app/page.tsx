import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl">
      <Link href={"/calculator"}>Calculator</Link>
    </div>
  );
}
