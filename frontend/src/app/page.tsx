import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>Here, there will be a home page</h1>
      <Link className="bg-red-500 p-5 rounded-2xl text-white" href="/dashboard">Dashboard</Link>
    </div>
  );
}
