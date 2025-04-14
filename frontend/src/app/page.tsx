import Btn from "@/components/btn";
import BarChart from "@/components/barchart";
import HistoryChart from "@/components/historychart";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <Btn href="/signup" text="Sign up"></Btn>
      <Btn href="/login" text="Login"></Btn>
    </div>
  );
}
