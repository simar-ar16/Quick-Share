export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">About QuickShare</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          QuickShare is a simple and secure way to share text instantly. 
          Just enter your text, generate a unique 6-digit code, and share it with anyone. 
          The receiver can enter the code on the Retrieve page to access your text — no login required.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our goal is to make sharing quick, hassle-free, and accessible from any device. 
          Whether you’re passing notes, sharing ideas, or sending temporary messages, 
          QuickShare ensures it’s done in seconds.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This project is built with <span className="font-semibold text-yellow-500">React</span>, 
          <span className="font-semibold text-yellow-500"> Tailwind CSS</span>, and a 
          <span className="font-semibold text-yellow-500"> Node.js backend</span>.
        </p>
      </div>
    </div>
  );
}
