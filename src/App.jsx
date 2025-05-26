export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="container mx-auto max-w-xl p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4 text-gray-100">
            Url Shortener
          </h1>

          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-gray-300 font-semibold mb-2"
            >
              Your Url:
            </label>
            <input
              type="text"
              id="url"
              name="url"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your long url"
            />
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
              Generate Short Url
            </button>
          </div>

          <div className="mb-4 mt-5">
            <div className="relative flex">
              <input
                type="text"
                id="short-url"
                name="short-url"
                className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-l-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                placeholder="Generated Short Url"
                readOnly
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                style={{ marginLeft: "-1px" }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
