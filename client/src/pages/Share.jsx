import { useState, useEffect } from "react";
import axios from "axios";

export default function Share() {
  const [text, setText] = useState("");
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    setCode(null);
    setCopied(false);

    try {
      const res = await axios.post("http://localhost:5000/api/share", { text });
      setCode(res.data.code);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    document.title = "QuickShare | Share Text";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Text</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a secure 6-digit code to share your text. No account needed.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Input Section */}
          <div className="p-8">
            <div className="mb-6">
              <label htmlFor="text-input" className="block text-lg font-medium text-gray-700 mb-2">
                Your Text
              </label>
              <textarea
                id="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste your text here..."
                className="w-full h-48 p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 resize-none"
              />
              <div className="flex justify-between items-center mt-2">
                <span className={`text-sm ${text.length > 1000 ? 'text-red-500' : 'text-gray-500'}`}>
                  {text.length}/1000 characters
                </span>
                <button 
                  onClick={() => setText('')} 
                  className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Clear text
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleShare}
              disabled={loading || !text.trim()}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                loading 
                  ? "bg-indigo-400 cursor-not-allowed" 
                  : !text.trim()
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Code...
                </div>
              ) : (
                "Generate Share Code"
              )}
            </button>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Result Section */}
          {code && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-t border-gray-200 p-8">
              <div className="bg-white rounded-xl shadow-inner p-6 text-center max-w-md mx-auto">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Share Code</h2>
                <p className="text-sm text-gray-600 mb-6">Share this code with anyone to retrieve your text</p>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <p className="text-3xl font-mono font-bold text-indigo-700 tracking-wider">{code}</p>
                </div>
                
                <button
                  onClick={handleCopy}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white shadow-md transition-all duration-300 flex items-center justify-center ${
                    copied 
                      ? "bg-green-600" 
                      : "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                      Copy Code
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 mt-4">
                  Code will be valid for 24 hours
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Sharing</h3>
            <p className="text-gray-600">Generate a code in seconds and share it with anyone.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Simple Codes</h3>
            <p className="text-gray-600">6-digit codes are easy to share and remember.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Registration</h3>
            <p className="text-gray-600">Share text instantly without creating an account.</p>
          </div>
        </div>
      </div>
    </div>
  );
}