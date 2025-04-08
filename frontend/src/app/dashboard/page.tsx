export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <h1 className="font-bold">Fire Detector</h1>
        <div className="w-full flex">
          <div className="w-[70%] pr-4">
            <div className="space-y-6">
              <div>
                <p className="mb-1 font-semibold">Temperature</p>
                <div className="w-full h-4 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-blue-500 rounded"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold">Humidity</p>
                <div className="w-full h-4 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-green-500 rounded"
                    style={{ width: '30%' }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold">Brightness</p>
                <div className="w-full h-4 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-yellow-500 rounded"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold">
                  Presence of smoke or flammable gases.
                </p>
                <div className="w-full h-4 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-red-500 rounded"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] bg-red-500 flex items-center justify-center rounded-lg">
            <span className="text-white text-xl font-bold">Fire detected.</span>
          </div>
                </div>
        </div>
    </div>
  )
}
