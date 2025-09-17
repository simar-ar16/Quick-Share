import { useState } from "react";
import axios from "axios";

export default function Share() {
  const [text, setText] = useState("");
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShare = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    setCode(null);

    try {
      const res = await axios.post("http://localhost:5000/api/share", { text });
      setCode(res.data.code); // backend should return { code: "123456" }
      setText(""); // optional: clear input
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-16 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Share Your Text
      </h1>

      {/* Text Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-11/12 md:w-2/3 lg:w-1/2 h-40 p-4 border rounded-xl shadow-md focus:ring-2 focus:ring-indigo-400 outline-none mb-6"
      />

      {/* Generate Code Button */}
      <button
        onClick={handleShare}
        disabled={loading}
        className={`${
          loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
        } text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition`}
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Display Returned Code */}
      {code && (
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 text-center w-80">
          <h2 className="text-xl font-bold text-indigo-600 mb-3">Your Code</h2>
          <p className="text-2xl font-mono font-bold mb-4">{code}</p>
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow"
          >
            Copy Code
          </button>
        </div>
      )}
    </div>
  );
}
