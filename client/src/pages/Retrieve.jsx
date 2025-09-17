export default function Retrieve() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Retrieve Text
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter 6-digit code"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Get Text
          </button>
        </form>
      </div>
    </div>
  );
}
