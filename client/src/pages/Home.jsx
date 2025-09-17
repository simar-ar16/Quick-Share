import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
      document.title = "QuickShare";
    }, []);
  return (
    <div>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-indigo-50 to-white">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to <span className="text-indigo-600">QuickShare</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Share and retrieve text securely with just a 6-digit code.
        </p>

        {/* Cards */}
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-72 hover:scale-105 transition transform">
            <h2 className="text-xl font-bold mb-3 text-indigo-700">Share Text</h2>
            <p className="text-gray-600 mb-6">Enter your text and generate a secure code.</p>
            <Link
              to="/share"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700"
            >
              Share Now
            </Link>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 w-72 hover:scale-105 transition transform">
            <h2 className="text-xl font-bold mb-3 text-green-700">Retrieve Text</h2>
            <p className="text-gray-600 mb-6">Enter a code to view the shared text instantly.</p>
            <Link
              to="/retrieve"
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
            >
              Retrieve Now
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
  How It Works
</h2>

<div className="max-w-2xl mx-auto space-y-6">
  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-indigo-600">Step 1: Enter Text</h3>
    <p className="text-gray-600 mt-2">Type or paste the text you want to share.</p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-indigo-600">Step 2: Generate Code</h3>
    <p className="text-gray-600 mt-2">Click generate to get a unique 6-digit code.</p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-indigo-600">Step 3: Share Code</h3>
    <p className="text-gray-600 mt-2">Send the code to your friend or colleague securely.</p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-indigo-600">Step 4: Retrieve Text</h3>
    <p className="text-gray-600 mt-2">Your friend enters the code on the Retrieve page.</p>
  </div>

  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-indigo-600">Step 5: Done!</h3>
    <p className="text-gray-600 mt-2">The text appears instantly, no login or signup needed.</p>
  </div>
</div>

      </section>
    </div>
  );
}
