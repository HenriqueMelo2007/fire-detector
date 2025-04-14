import Link from "next/link";
import Btn from "@/components/btn";
import BarChart from "@/components/barchart";
import HistoryChart from "@/components/historychart";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <Link className="bg-red-500 p-5 rounded-2xl text-white" href="/dashboard">Dashboard</Link>
    </div>
  );
}
