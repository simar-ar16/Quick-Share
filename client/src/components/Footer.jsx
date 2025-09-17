export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 text-center mt-16">
      <div className="container mx-auto px-4">
        <p className="text-sm font-light tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold">
            QuickShare
          </span>
          . Made with <span className="text-red-400 animate-pulse">❤️</span> to share text instantly.
        </p>
        
        
      </div>
    </footer>
  );
}