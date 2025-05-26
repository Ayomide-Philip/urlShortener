export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="containermx-auto max-w-xl p-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Apply Coupon Code</h1>

          <div className="mb-4">
            <label htmlFor="coupon" className="block text-gray-700 font-semibold mb-2">
              Coupon Code:
            </label>
            <input
              type="text"
              id="coupon"
              name="coupon"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your coupon code"
            />
          </div>

          <div className="text-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
              Apply Coupon
            </button>
          </div>

          <div className="mt-4 text-green-500">
            Coupon code applied successfully! You saved $10.
          </div>
        </div>
      </div>
    </div>
  );
}
