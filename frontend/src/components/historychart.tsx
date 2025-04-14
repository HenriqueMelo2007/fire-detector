export default function HistoryChart() {
  return (
    <div className="bg-gray-800 flex items-center justify-center mt-10 text-gray-200 w-full rounded-lg">
      <div className="bg-gray-800 shadow-md rounded-lg p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">History of Presence of Smoke or Flammable Gases</h1>
        <svg
          viewBox="0 0 300 150"
          className="w-full h-64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            fill="none"
            stroke="#F97316"
            strokeWidth="1"
            points="0,100 33,70 66,90 100,50 133,80 166,30 200,70 233,20 266,60 300,40"
          />
        </svg>
      </div>
    </div>
  )
}
