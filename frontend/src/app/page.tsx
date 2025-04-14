import NavBar from "@/components/navbar";
import Container from "@/components/container";
import BarChart from "@/components/barchart";
import HistoryChart from "@/components/historychart";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      <Container>
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h2 className="font-bold text-4xl mb-4">Thermophilic</h2>
          <h2 className="font-bold text-4xl mb-8">Intelligent fire detector</h2>
          <p className="text-gray-400">Fire detection system that integrates physical sensors (ESP32), a Machine Learning model and a real-time web interface.</p>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center text-center">
          <BarChart></BarChart>
          <HistoryChart></HistoryChart>
        </div>
      </Container>
    </div>
  );
}
