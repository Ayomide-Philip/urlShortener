export default function ShortenURL({ shortUrl, copyToClipboard }) {
  return (
    <div className="mb-2 mt-10">
      <div className="relative flex">
        <input
          type="text"
          id="short-url"
          name="short-url"
          className="w-full px-5 py-3 border border-gray-700 bg-gray-900 text-green-400 font-mono rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder:text-gray-500"
          placeholder="Your short url will appear here"
          value={shortUrl ? shortUrl : undefined}
          readOnly
        />
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-r-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{ marginLeft: "-1px" }}
          type="button"
          onClick={() => {
            copyToClipboard(shortUrl);
          }}
        >
          📋 Copy
        </button>
      </div>
    </div>
  );
}
