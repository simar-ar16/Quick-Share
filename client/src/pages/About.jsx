import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "QuickShare | About";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About <span className="text-indigo-600">QuickShare</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            The fastest way to share text securely without the hassle
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                QuickShare is a simple and secure platform that allows you to share text instantly with anyone, anywhere. 
                No sign-ups, no complicated processes—just pure, effortless sharing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're collaborating on projects, sharing important notes, or sending temporary messages, 
                QuickShare ensures your information is delivered quickly and securely.
              </p>
            </div>

            {/* How It Works */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Enter Text</h3>
                  <p className="text-gray-600 text-sm">Type or paste your content</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Get Code</h3>
                  <p className="text-gray-600 text-sm">Generate a unique 6-digit code</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Share & Retrieve</h3>
                  <p className="text-gray-600 text-sm">Share the code with anyone to access your text</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Why Choose QuickShare?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1 mr-3">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">No registration required - start sharing immediately</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1 mr-3">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">End-to-end encryption for maximum security</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1 mr-3">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Automatic expiration after retrieval</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1 mr-3">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Works on all devices - desktop, tablet, and mobile</p>
                </li>
              </ul>
            </div>

            {/* Technology Stack */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Built With Modern Technology
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700 font-medium">React</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                  <span className="text-gray-700 font-medium">Tailwind CSS</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700 font-medium">Node.js</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-gray-700 font-medium">Express</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span className="text-gray-700 font-medium">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ready to start sharing?</h3>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>QuickShare - Making text sharing simple and secure since 2023</p>
        </div>
      </div>
    </div>
  );
}