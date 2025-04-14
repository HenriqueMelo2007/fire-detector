export default function BarChart() {
  return (
    <div className="flex items-center justify-center text-gray-200 w-full">
      <div className="w-full bg-gray-800 shadow-md rounded-lg p-6 flex">
        <div className="w-[70%] pr-4">
          <div className="space-y-6">
            <div>
              <p className="mb-1 font-semibold">Temperature</p>
              <div className="w-full h-4 bg-gray-400 rounded">
                <div
                  className="h-4 bg-green-500 rounded"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div>
              <p className="mb-1 font-semibold">Humidity</p>
              <div className="w-full h-4 bg-gray-400 rounded">
                <div
                  className="h-4 bg-blue-500 rounded"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
            <div>
              <p className="mb-1 font-semibold">Luminosity</p>
              <div className="w-full h-4 bg-gray-400 rounded">
                <div
                  className="h-4 bg-yellow-500 rounded"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div>
              <p className="mb-1 font-semibold">
                Presence of Smoke or Flammable Gases
              </p>
              <div className="w-full h-4 bg-gray-400 rounded">
                <div
                  className="h-4 bg-orange-500 rounded"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-red-500 flex items-center justify-center rounded-lg">
          <span className="text-xl font-bold">FIRE DETECTED</span>
        </div>
      </div>
    </div>
  )
}