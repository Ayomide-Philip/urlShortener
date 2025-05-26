export default function UrlForm({ handleSubmit, setUrl }) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url" className="block text-gray-300 font-semibold mb-2">
          Your Url:
        </label>
        <input
          type="text"
          id="url"
          name="url"
          className="w-full px-5 py-3 border border-gray-700 bg-gray-900 text-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-inner placeholder:text-gray-500"
          placeholder="Paste your long url here..."
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="text-center">
        <button
          className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-green-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2"
          type="submit"
        >
          <span className="inline-block align-middle mr-2 animate-pulse">
            ✨
          </span>
          Generate Short Url
        </button>
      </div>
    </form>
  );
}
