export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-indigo-400">QuickShare</span>.  
        Made with ❤️ to share text instantly.
      </p>
    </footer>
  );
}
