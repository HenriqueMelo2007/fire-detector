import NavBar from '@/components/navbar'
import BarChart from '@/components/barchart'
import HistoryChart from '@/components/historychart'

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      <div className="min-h-screen w-screen flex justify-between items-center px-12 mb-5">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h2 className="font-bold text-4xl mb-4">Thermophilic</h2>
          <h2 className="font-bold text-4xl mb-8">Intelligent fire detector</h2>
          <p className="text-gray-400 mb-4">
            This project is a web platform that allows users to monitor and
            visualize data from an intelligent fire detection system. After
            registering, users can link their personal fire detection devices to
            the platform. The system continuously collects environmental data
            such as light intensity, humidity, temperature, and the presence of
            smoke or flammable gases to determine if there is a potential fire.
          </p>
          <p className="text-gray-400">
            The platform then displays detailed current sensor readings,
            historical graphs of the last ten measurements for each parameter,
            and alerts users to the most recent fire detection event.
          </p>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center text-center px-10">
          <BarChart></BarChart>
          <HistoryChart></HistoryChart>
        </div>
      </div>
    </div>
  )
}
