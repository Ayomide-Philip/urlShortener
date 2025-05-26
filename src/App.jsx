export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526]">
      <div className="container mx-auto max-w-xl p-8">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
          <h1 className="text-4xl font-extrabold mb-8 text-green-400 text-center tracking-wider drop-shadow-xl flex items-center justify-center gap-2">
            <span className="inline-block animate-bounce">🔗</span>
            Url Shortener
          </h1>

          <form className="space-y-6">
            <div>
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
                className="w-full px-5 py-3 border border-gray-700 bg-gray-900 text-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-inner placeholder:text-gray-500"
                placeholder="Paste your long url here..."
              />
            </div>

            <div className="text-center">
              <button
                className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-green-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2"
                type="submit"
              >
                <span className="inline-block align-middle mr-2 animate-pulse">✨</span>
                Generate Short Url
              </button>
            </div>
          </form>

          <div className="mb-2 mt-10">
            <div className="relative flex">
              <input
                type="text"
                id="short-url"
                name="short-url"
                className="w-full px-5 py-3 border border-gray-700 bg-gray-900 text-green-400 font-mono rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder:text-gray-500"
                placeholder="Your short url will appear here"
                readOnly
              />
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-r-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ marginLeft: "-1px" }}
                type="button"
              >
                📋 Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
