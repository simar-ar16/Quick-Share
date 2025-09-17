import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "QuickShare";
  }, []);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">QuickShare</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Share and retrieve text instantly with just a 6-digit code. No accounts, no hassle.
          </p>

          {/* Cards */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-80 border border-indigo-100 hover:scale-105 transition-all duration-300 transform hover:shadow-2xl">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-14 h-14 rounded-lg flex items-center justify-center mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Share Text</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">Enter your text and generate a secure code.</p>
              <Link
                to="/share"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Share Now
              </Link>
            </div>

            <div className="bg-white shadow-2xl rounded-2xl p-8 w-80 border border-green-100 hover:scale-105 transition-all duration-300 transform hover:shadow-2xl">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-14 h-14 rounded-lg flex items-center justify-center mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Retrieve Text</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">Enter a code to view the shared text instantly.</p>
              <Link
                to="/retrieve"
                className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Retrieve Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Removed inaccurate numbers */}

      {/* Steps Section */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Works</span>
          </h2>

          <div className="relative">
            <div className="absolute left-7 top-10 h-4/5 w-1 bg-gradient-to-b from-indigo-300 to-purple-300 transform -translate-y-4 ml-1 rounded-full"></div>
            
            <div className="space-y-10 relative">
              {[
                { title: "Step 1: Enter Text", desc: "Type or paste the text you want to share." },
                { title: "Step 2: Generate Code", desc: "Click generate to get a unique 6-digit code." },
                { title: "Step 3: Share Code", desc: "Send the code to your friend or colleague." },
                { title: "Step 4: Retrieve Text", desc: "Your friend enters the code on the Retrieve page." },
                { title: "Step 5: Done!", desc: "The text appears instantly, no login required." }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-lg mr-6 relative z-10">
                    {index + 1}
                  </div>
                  <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated with accurate information */}
      <section className="py-3 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Use QuickShare?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Instant Sharing</h3>
              </div>
              <p className="text-gray-600">Share text in seconds with a simple 6-digit code. No lengthy sign-up processes or complicated interfaces.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Simple Codes</h3>
              </div>
              <p className="text-gray-600">Easy-to-share 6-digit codes make retrieving your text simple for anyone, even on mobile devices.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Easy Sharing</h3>
              </div>
              <p className="text-gray-600">Perfect for sharing code snippets, messages, notes, or any text between devices, teams, or friends.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">No Registration</h3>
              </div>
              <p className="text-gray-600">Start sharing immediately without creating an account. No passwords to remember or personal information to provide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Share Something?</h2>
          <p className="text-xl text-gray-600 mb-10">Get started now - it's free and always will be.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/share"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg"
            >
              Share Text
            </Link>
            <Link
              to="/retrieve"
              className="bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg hover:bg-indigo-50"
            >
              Retrieve Text
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}