import { useState } from "react";
import axios from "axios";

export default function Retrieve() {
  const [code, setCode] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRetrieve = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    setLoading(true);
    setError("");
    setText("");

    try {
      const res = await axios.get(`http://localhost:5000/api/share/${code}`);
      setText(res.data.text);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-16 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Retrieve Text</h1>

      <form className="flex flex-col items-center w-full max-w-md" onSubmit={handleRetrieve}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter 6-digit code"
          className="w-full p-4 mb-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-400"
          } text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-lg transition`}
        >
          {loading ? "Retrieving..." : "Get Text"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {text && (
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 text-center w-96">
          <h2 className="text-xl font-bold text-yellow-500 mb-3">Your Text</h2>
          <p className="text-gray-800">{text}</p>
        </div>
      )}
    </div>
  );
}
